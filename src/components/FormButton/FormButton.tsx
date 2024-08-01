import "./FormButton.css";

interface FormButtonProps {
  title: string;
  method?: () => void;
  style: string,
}

const FormButton = ({ title, method, style }: FormButtonProps) => {
  return (
    <>
      <button type="submit" onClick={method} className={`btn ${style}`}>
        {title}
      </button>
    </>
  );
};

export default FormButton;
