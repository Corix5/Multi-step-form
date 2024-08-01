import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Form from "./components/Form/Form";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { NumberOfIndexProvider } from "./context/NumberOfIndexContext";

const App = () => {
  return (
    <NumberOfIndexProvider>
      <DataProvider>
        <div className="app-container">
          <Sidebar />
          <BrowserRouter>
            <Form />
          </BrowserRouter>
        </div>
      </DataProvider>
    </NumberOfIndexProvider>
  );
};

export default App;
