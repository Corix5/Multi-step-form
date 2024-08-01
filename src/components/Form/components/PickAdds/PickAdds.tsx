import Header from "../Header/Header";
import Add from "./Add/Add";
import FormButton from "../../../FormButton/FormButton";
import { useNumberOfIndexContext } from "../../../../context/NumberOfIndexContext";
import { useDataContext } from "../../../../context/DataContext";

interface PickAddsProps {
  next: () => void;
  back: () => void;
}

const PickAdds = ({ next, back }: PickAddsProps) => {
  const title = "Pick add-ons";
  const description = "Add-ons help enhance your gaming experience.";
  const { data, setData } = useDataContext();
  const { count } = useNumberOfIndexContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
    console.log(e.target.checked);
  };

  return (
    <>
      <Header title={title} description={description} />
      <form onSubmit={handleSubmit}>
        <Add
          title="Online service"
          description="Access to multiplayer games"
          price={data.planMode ? "+$10/yr" : "+$1/mo"}
          name="onlineService"
          checked={data.onlineService}
          onChange={handleChange}
        />
        <Add
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={data.planMode ? "+$20/yr" : "+$2/mo"}
          name="largerStorage"
          checked={data.largerStorage}
          onChange={handleChange}
        />
        <Add
          title="Customizable profile"
          description="Custom theme on your profile"
          price={data.planMode ? "+$20/yr" : "+$2/mo"}
          name="customizableProfile"
          checked={data.customizableProfile}
          onChange={handleChange}
        />
        {count > 0 && count < 4 && (
          <FormButton title="Go Back" style="back" method={back} />
        )}
        {count < 3 && <FormButton title="Next Step" style="next" method={next}/>}
      </form>
    </>
  );
};

export default PickAdds;
