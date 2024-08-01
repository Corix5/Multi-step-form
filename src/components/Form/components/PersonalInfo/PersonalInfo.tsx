import Header from "../Header/Header";
import "./PersonalInfo.css";
import { useDataContext } from "../../../../context/DataContext";
import { useNumberOfIndexContext } from "../../../../context/NumberOfIndexContext";
import FormButton from "../../../FormButton/FormButton";
import { useState } from "react";

interface PersonalInfoProps {
  next: () => void;
}

const PersonalInfo = ({ next }: PersonalInfoProps) => {
  const title = "Personal Info";
  const description = "Please provide your name, email adress and phone number";

  const { data, setData } = useDataContext();
  const { count } = useNumberOfIndexContext();

  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (data.name && data.email && data.phone) {
      next();
    } else {
      setError("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header title={title} description={description} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name {!data.name && formSubmitted && (<span className="error-span">This field is required</span>)}</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            value={data.name}
            onChange={handleChange}
            className={!data.name ? error: ""}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email Adress{!data.email && formSubmitted && (<span className="error-span">This field is required</span>)}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={data.email}
            onChange={handleChange}
            className={!data.email ? error: ""}
          />
        </div>

        <div className="input-container">
          <label htmlFor="phone">Phone Number{!data.phone && formSubmitted && (<span className="error-span">This field is required</span>)}</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890 "
            value={data.phone}
            onChange={handleChange}
            className={!data.phone ? error: ""}
          />
        </div>

        {count < 3 && <FormButton title="Next Step" style="next" />}
      </form>
    </>
  );
};

export default PersonalInfo;
