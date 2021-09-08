import React from "react";
const Small = (props) => {
    const arrImg = [
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg"
    ]
    const updateUrrl = (value) =>{
        props.long(value);
    }
    const results = arrImg.map((value, index) => {
        return (
            <img onClick ={()=>updateUrrl(value)} className={props.linh == value ? "active"  : "" }src={value} />
        )
    });
    return (
        <div id="small">

          {results}
        </div>
    )
}
export default Small;