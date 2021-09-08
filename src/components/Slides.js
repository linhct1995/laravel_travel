import React from 'react';
const Slides = (props) => {
    
    return (
        <div id="slide-img">
            <img src={props.imgUrl} />
        </div>
    )
};
export default Slides;