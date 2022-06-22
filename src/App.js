import { useState } from "react";
import NumberInput from "./components/number-input/index";
import ButtonSum from "./components/button-sum/index";
import './App.css';

function App() {

  const [inputA, setInputA]=useState(0);
  const [inputB, setInputB]=useState(0);
  const [result, setResult]=useState(0);
  return (
    <>
      <div className="inputs">
        <NumberInput
          number={inputA}
          setNumber={setInputA}
        /> 
        <NumberInput
          number={inputB}
          setNumber={setInputB}
        /> 
      </div>
      <ButtonSum buttonClicked={()=>setResult(inputA+inputB)}/>
      <div className="result">{result}</div>
    </>
  );
}
export default App;
