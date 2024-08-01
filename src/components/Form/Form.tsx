import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import PickAdds from "./components/PickAdds/PickAdds";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Summary from "./components/Summary/Summary";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Form.css";
import { useDataContext } from "../../context/DataContext";
import { useNumberOfIndexContext } from "../../context/NumberOfIndexContext";

const Form = () => {
  const { data } = useDataContext();
  const { count, setCount } = useNumberOfIndexContext();
  let newCount = count;
  const urls = ["/", "plan", "addon", "summary"];
  const navigate = useNavigate();

  const nextUrl = () => {
    if (count < urls.length - 1) {
        newCount = count + 1;
        setCount(newCount);
        navigate(urls[newCount]);   
    }
  };

  const backUrl = () => {
    if (count > 0) {
      newCount = count - 1;
      setCount(newCount);
      navigate(urls[newCount]);
    }
  };

  const submit = () => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <Routes>
        <Route path="/" element={<PersonalInfo next={nextUrl} />} />
        <Route path="/plan" element={<SelectPlan next={nextUrl} back={backUrl}/>} />
        <Route path="/addon" element={<PickAdds next={nextUrl} back={backUrl}/>} />
        <Route path="/summary" element={<Summary submit={submit} back={backUrl}/>} />
      </Routes>
    </div>
  );
};

export default Form;
