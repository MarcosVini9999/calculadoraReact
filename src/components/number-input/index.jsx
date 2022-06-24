import React from "react";
import "./index.css";

function NumberInput({ number, setNumber }) {
    return (
        <div>
            <input className="inputBtn" type="number" value={number} onChange={(e) => {
                console.log(e.target.value)
                setNumber(Number(e.target.value))
            }} />
        </div>
    )
}
export default NumberInput;