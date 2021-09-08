import React from "react";
import { useDispatch } from "react-redux";
const Button = (props) => {
    const dispatch = useDispatch();
    const getNUmber = () =>{
        dispatch({type : "ACTION"});
    }
    const resetNumber = () =>{
        dispatch({type: "RESET"});
    }
    return (
        <div>
            <button 
            className="btn btn-dark"
            onClick = {getNUmber}
            >Get number</button>
            <button 
            onClick = {resetNumber}
            className="btn btn-dark" 
            >Reset</button>
        </div>
    )
}
export default Button;