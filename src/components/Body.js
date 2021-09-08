import react from "react";
import Main from "./Main";
import Navbar from "./Navbar";
const Body = () =>{
    return(
        <div id = "body">
            <div class= "container">               
                <Navbar/>
                <Main/>
            </div>
        </div>
    )
};
export default Body;