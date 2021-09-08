import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Controller = () => {
    let interval;
    const dispatch = useDispatch();
    const time = useSelector((state) =>{
        if (state.time <= 0 ) {
            stopTime ();
        }
    });
    const startTime = () => {
        interval = setInterval(() => {
            dispatch({type : "START"});
        },500);
        
    }
    const stopTime = () =>{
         clearInterval(interval);
    }

    // if (time == 0 ) {
        
    //     return stopTime();
    // }
    return (
        <div className="buttons">
            <input onClick={startTime} type="button" id="start" defaultValue="Start" />
            <input onClick = {stopTime} type="button" id="stop" defaultValue="Stop" />
        </div>
    )
}
export default Controller;