import React from "react";
import { useDispatch } from "react-redux";
const Timer = () => {
    const dispatch = useDispatch();
    const nextTime = () => {
        dispatch({ type: "NEXT" });
    }
    const backTime = () =>{
        dispatch({ type : "BACK"});
    }
    return (
        <div id="pm">
            <input onClick={nextTime} type="button" id="plus" defaultValue="" />
            <input onClick = {backTime} type="button" id="minus" defaultValue="" />
        </div>
    )
}
export default Timer;