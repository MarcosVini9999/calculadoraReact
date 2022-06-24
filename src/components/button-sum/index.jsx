import React from "react";
import Button from '@mui/material/Button';
import './index.css';

function ButtonSum(props) {
    return (
        <div>
            <Button classes={{ root: 'btnResult' }} variant="contained" onClick={props.buttonClicked}>+</Button>
        </div>
    )
}

export default ButtonSum;