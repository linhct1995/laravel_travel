import React from "react";
import { useSelector } from "react-redux";
const Clock = () =>{
    const time = useSelector((state) =>{
       return state.time
    })
    return(
        <p id="result">{time}</p>
    )
}
export default Clock;