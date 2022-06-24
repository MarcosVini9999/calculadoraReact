import {useState} from "react";
import NumberInput from "./components/number-input/index";
import ButtonSum from "./components/button-sum/index";
import Footer from "./components/layout/Footer";
import "./App.css";
function App() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <>
      <div className="containerBox">
        <div className="calculatorBox">
          <h1 className="titlePage">{process.env.REACT_APP_NAME}</h1>
          <div className="inputsNum">
            <NumberInput number={inputA} setNumber={setInputA} />
            <NumberInput number={inputB} setNumber={setInputB} />
          </div>
          <ButtonSum buttonClicked={() => setResult(inputA + inputB)} />
          <div className="resultNum">{result}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
