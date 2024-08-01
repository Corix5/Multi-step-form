import { ChangeEvent } from "react";
import "./Add.css";
interface AddProps {
  title: string;
  description: string;
  price: string;
  checked: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Add = ({
  title,
  description,
  price,
  name,
  checked,
  onChange,
}: AddProps) => {
  return (
    <div className={checked ? "add-box selected" : "add-box"}>
      <div className="add-input">
        <input
        className="input"
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name}>
          <h3>
            {title}
            <br />
            <span>{description}</span>
          </h3>
        </label>
      </div>

      <div className="price">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Add;
