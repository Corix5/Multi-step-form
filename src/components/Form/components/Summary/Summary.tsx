import Header from "../Header/Header";
import { useDataContext } from "../../../../context/DataContext";
import "./Summary.css";
import { useState, useEffect } from "react";
import { useNumberOfIndexContext } from "../../../../context/NumberOfIndexContext";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../FormButton/FormButton";

interface SummaryProps {
  submit: () => void;
  back: () => void;
}

const Summary = ({ submit, back }: SummaryProps) => {
  const navigate = useNavigate();
  const { data } = useDataContext();
  const [price, setPrice] = useState(0);
  const [priceString, setPriceString] = useState("");

  const { count, setCount } = useNumberOfIndexContext();

  const updateCount = () => {
    setCount(count - 2);
    navigate("/plan");
  };

  const title = "Finishing Up";
  const description = "Double-check everything looks OK before confirming.";

  type PlanType = "Arcade" | "Advanced" | "Pro";
  type PlanMode = "yearly" | "monthly";

  interface PlanDetails {
    priceString: string;
    price: number;
  }

  interface Plans {
    [key: string]: {
      yearly: PlanDetails;
      monthly: PlanDetails;
    };
  }

  const plans: Plans = {
    Arcade: {
      yearly: { priceString: "$90/yr", price: 90 },
      monthly: { priceString: "$9/mo", price: 9 },
    },
    Advanced: {
      yearly: { priceString: "$120/yr", price: 120 },
      monthly: { priceString: "$12/mo", price: 12 },
    },
    Pro: {
      yearly: { priceString: "$150/yr", price: 150 },
      monthly: { priceString: "$15/mo", price: 15 },
    },
  };

  useEffect(() => {
    if (data.plan in plans) {
      const planType: PlanMode = data.planMode ? "yearly" : "monthly";
      setPriceString(plans[data.plan as PlanType][planType].priceString);
      setPrice(plans[data.plan as PlanType][planType].price);
    }
  }, [data.plan, data.planMode, plans]);

  let onlineServicePrice = data.onlineService ? (data.planMode ? 10 : 1) : 0;
  let largerStoragePrice = data.largerStorage ? (data.planMode ? 20 : 2) : 0;
  let customProfile = data.customizableProfile ? (data.planMode ? 20 : 2) : 0;

  let finalPrice =
    onlineServicePrice + largerStoragePrice + customProfile + price;

  return (
    <>
      <Header title={title} description={description} />
      <div className="summary-box">
        <section className="plan-resume">
          <div>
            <p>
              {`${data.plan} (${priceString})`}
              <span className="change">
                <a onClick={updateCount}>change</a>
              </span>
            </p>
          </div>

          <p className="price">{priceString}</p>
        </section>
        <hr />
        <section className="add-resume">
          {data.onlineService && (
            <>
              <p>Online service</p>
              <p>+{data.planMode ? "$10/yr" : "$1/mo"}</p>
            </>
          )}
        </section>
        <section className="add-resume">
          {data.largerStorage && (
            <>
              <p>Larger storage</p>
              <p>+{data.planMode ? "$20/yr" : "$2/mo"}</p>
            </>
          )}
        </section>
        <section className="add-resume">
          {data.customizableProfile && (
            <>
              <p>Customizable profile</p>
              <p>+{data.planMode ? "$20/yr" : "$2/mo"}</p>
            </>
          )}
        </section>
      </div>

      <section className="total-resume">
        <p>{`Total (per ${data.planMode ? "year" : "month"})`}</p>
        <p className="final-price">{`$${finalPrice}/${
          data.planMode ? "yr" : "mo"
        }`}</p>
      </section>
      {count > 0 && count < 4 && (
        <FormButton title="Go Back" style="back" method={back} />
      )}
      {count === 3 && (
        <FormButton title="Confirm" style="confirm" method={submit} />
      )}
    </>
  );
};

export default Summary;
