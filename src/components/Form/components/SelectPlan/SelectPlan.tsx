import Header from "../Header/Header";
import PlanBox from "./PlanBox/PlanBox";
import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";
import FormButton from "../../../FormButton/FormButton";
import { useNumberOfIndexContext } from "../../../../context/NumberOfIndexContext";
import { useDataContext } from "../../../../context/DataContext";
import { ChangeEvent, useState } from "react";
import "./SelectPlan.css";

interface SelectPlanProps {
  next: () => void;
  back: () => void;
}

const SelectPlan = ({ next, back }: SelectPlanProps) => {
  const { data, setData } = useDataContext();
  const { count } = useNumberOfIndexContext();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "plan" ? e.target.value : e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (data.plan) {
      next();
    }
  };

  const title = "Select your plan";
  const description = "You have the option of monthly or yearly billing";
  return (
    <>
      <Header title={title} description={description} />
      <form className="form" onSubmit={handleSubmit}>
      {!data.plan && formSubmitted && (<><span className="error-span">This field is required</span></> )}
        <div className="plan-container">
          <PlanBox
            title="Arcade"
            icon={arcadeIcon}
            price={data.planMode ? "$90/yr" : "$9/mo"}
            checked={data.plan === "Arcade"}
            onChange={handleChange}
          />
          <PlanBox
            title="Advanced"
            icon={advancedIcon}
            price={data.planMode ? "$120/yr" : "$12/mo"}
            checked={data.plan === "Advanced"}
            onChange={handleChange}
          />
          <PlanBox
            title="Pro"
            icon={proIcon}
            price={data.planMode ? "$150/yr" : "$15/mo"}
            checked={data.plan === "Pro"}
            onChange={handleChange}
          />
        </div>

        <div className="sort-of-billing">
          <p>Monthly</p>
          <label className="switch">
            <input
              type="checkbox"
              name="planMode"
              checked={data.planMode}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
          <p>Yearly</p>
        </div>
        {count > 0 && count < 4 && (
          <FormButton title="Go Back" style="back" method={back} />
        )}
        {count < 3 && <FormButton title="Next Step" style="next" />}
      </form>
    </>
  );
};

export default SelectPlan;
