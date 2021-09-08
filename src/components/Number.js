import React from 'react';
const Number = (props) => {
    // const changedata = () =>{
    //     return setimgUrl("images/banner-1.jpg");
    //   }
    //   const changedata2 = () =>{
    //     return setimgUrl("images/banner-2.jpg");
    //   }
    //   const changedata3 = () =>{
    //     return setimgUrl("images/banner-3.jpg");
    //   }
    return (
        <p id="slide-num">
            <a href="#" onClick={props.linh1}>1</a>
            <a href="#" onClick={props.linh2}>2</a>
            <a href="#" onClick={props.linh3}>3</a>
        </p>
    )
};
export default Number;