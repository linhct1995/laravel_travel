// là thằng chứa rất nhiều componer sau đó đẩy sang thằng index.js
import React from 'react';
import Content from './components/Content';
import Title from './components/Title';
import Image from './components/Image';
import Number from './components/Button';
import { Provider } from "react-redux";
import Button from './components/Button';
import Number2 from './components/Number2';
import store from "./redux/store";
import Timer from './components/Timer';
import Clock from './components/Clock';
import Controller from './components/Controlller';
import { BrowserRouter , Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';
import Menu from './components/Menu';
import Footerr from './components/Footerr';
import Main from './components/Main';
import Detail from './components/Details';
import { useState } from 'react';


// import Small from './components/Small';
// import Large from './components/Large';

// const App = () =>{
//   const [imgUrl , setimgUrl]  = React.useState("images/banner-1.jpg");
//   const changedata = () =>{
//     return setimgUrl("images/banner-1.jpg");
//   }
//   const changedata2 = () =>{
//     return setimgUrl("images/banner-2.jpg");
//   }
//   const changedata3 = () =>{
//     return setimgUrl("images/banner-3.jpg");
//   }
//   return(
//   <>
//   {/* <Header/>
//   <Body/>
//   <Footer/> */}
//   <div id="slide">
//     <Slides imgUrl={imgUrl} />
//     <Number linh1 = {changedata}
//             linh2 = {changedata2}
//             linh3 = {changedata3}
//     />
//   </div>

//   </>
//   )
// const App = (props) => {
//   const [imgUrl , setImgUrl] = React.useState("images/img-1.jpg");
//   const changedata = (value) =>{
//         return setImgUrl(value);
//       }
//   return (
//     <div id="products">
//       <Large linh = {imgUrl} />
//       <Small long = {changedata}
//               linh = {imgUrl} />
//     </div>
//   )

// };
// 
// const App = () => {
//   // const [number , setNumber] = React.useState (10);
//   // const changenumber = () =>{
//   //   const num = Math.round(Math.random()*10);
//   //   return setNumber(num);
//   // }
//   return (
//     <Provider store = {store}>
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 col-sm-12 text-center">
//           <div id="main">
//            <Number2/>
//            <Button />
//           </div>
//         </div>
//       </div>
//     </div>
//     </Provider>
//   )
// }

// const App = () => {
//   return (
//     <Provider store = {store}>
//     <div>
//       <div className="container">
//         <Timer/>
//         <Clock/>
//         <p id="sec">sec</p>
//       </div>
//       <Controller/>
//     </div>
//     </Provider>
//   )
// }
const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <Menu />
              </nav>
            </div>
          </div>
        </div>
        <div id="body">  
                
            <Route exact path="/" component={Main} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />  
            <Route path="/Details" component={Detail}/>
          <div className="container-fluid">
            <Footerr />
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App;