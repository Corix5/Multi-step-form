import { useNumberOfIndexContext } from "../../../../context/NumberOfIndexContext";
import StepCircle from "../StepCircle/StepCircle";
import "./Step.css";

interface StepProps{
    index:number,
    title: string
}

const Step = ({index, title}: StepProps) => {
    const {count} = useNumberOfIndexContext();
    let style = "";
    if(index === count + 1){
        style = "selected";
    }

    return (  
        <div className="step-container">
        <StepCircle index={index} style={style}/>
        <div className="step-info">
            <p className="step-number">{`STEP ${index}`}</p>
            <p className="step-title">{title}</p>
        </div>
        </div>
    );
}
 
export default Step;