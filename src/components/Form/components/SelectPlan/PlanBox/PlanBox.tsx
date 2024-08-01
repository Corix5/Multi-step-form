import {ChangeEvent } from "react";
import "./PlanBox.css";

interface PlanBoxProps {
  icon: string;
  title: string;
  price: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const PlanBoxProps = ({ icon, title, price, checked, onChange }: PlanBoxProps) => {
  return (
    <div className="input-radio-container">
      <label htmlFor={title}>
      <input type="radio" id={title} name="plan" value={title} checked={checked} onChange={onChange}/>
        <div className="box">
          <figure>
            <img src={icon} alt={icon} />
          </figure>
          <br />
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </label>
    </div>
  );
};

export default PlanBoxProps;
