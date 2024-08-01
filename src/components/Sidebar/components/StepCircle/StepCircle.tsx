import "./StepCircle.css";

interface StepCircleProps {
  index: number;
  style: string;
}

const StepCircle = ({ index, style }: StepCircleProps) => {
  return (
    <>
      <p className={`circle ${style}`}>{index}</p>
    </>
  );
};

export default StepCircle;
