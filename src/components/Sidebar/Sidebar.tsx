import Step from "./components/Step/Step";
import "./Sidebar.css";

const steps = [
  {
    index: 1,
    title: "YOUR INFO",
  },
  {
    index: 2,
    title: "SELECT PLAN",
  },
  {
    index: 3,
    title: "ADD-ONS",
  },
  {
    index: 4,
    title: "SUMMARY",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {steps.map((step) => (
        <Step key={step.index} index={step.index} title={step.title} />
      ))}
    </div>
  );
};

export default Sidebar;
