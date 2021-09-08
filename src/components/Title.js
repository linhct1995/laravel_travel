import React from "react";
const Title = (props) =>{
    const setTitle2 = ()=>{
        return(
            props.changTitle1()
        )
    }
    const txtTitle = () =>{
        return(
            <h4  onDoubleClick = {setTitle2} >{props.title1}</h4>
        )
    };
    const frmTitle = () =>{
        return(
            <input id = "title" onChange = { (e) =>updateTitle(e)} onBlur ={setTitle2} type = "text" value ={props.title1} />
        )
    };
    const updateTitle = (e ) =>{
        return props.long(e)
    }
    const showTitle = () =>{
       if (props.setTitle1 === true ) {
           return txtTitle();
       } else {
           return frmTitle();
       }
    }
    React.useEffect(() => {
        if (!props.setTitle1) {
            document.getElementById("title").focus();
        }
    },[props.setTitle1]);
    return(
        // <h4>{props.title1}</h4>
        showTitle()

    )
}
export default Title;