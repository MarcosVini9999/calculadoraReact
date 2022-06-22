import React from "react";

function NumberInput({number, setNumber}){
    return(
        <div>
            <input type="number" value={number} onChange={(e)=>{
                console.log(e.target.value)
                setNumber(Number(e.target.value))
            }}/>
        </div>
    )
}
export default NumberInput;