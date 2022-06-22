import React from "react";
import Button from '@mui/material/Button';

function ButtonSum(props){
    return(
        <div>
            <Button variant="contained" onClick={props.buttonClicked}>+</Button>
        </div>
    )
}

export default ButtonSum;