import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom'; // giúp kêt nối file index.html
import App from './App';
import reportWebVitals from './reportWebVitals';


// hướng dẫn viết jsx
// const temp = (
//   <>
//     <h3>Menu</h3>
//       <ul>
//         <li>home {}</li>
//         <li>about</li>
//         <li>contact</li>
//       </ul>
//   </>
// );
// khái niệm componer


// muốn đẩy componer sang html phải ở dạng tag <Menu/>
// props dùng để lấy dữ liệu
// const Title = (props) =>{
//   return(
//     <h1>{props.menu}</h1>
//   )
// };
// const Menu = (props)=>{
//   return(
//     <>
//     <Title menu="Danh mục"/>
//     <ul>
//       <li>{props.data1}</li>
//       <li>{props.data2}</li>
//       <li>contact</li>
//     </ul>
//     </>
//   )
// }  



//  sử dụng state và hook
// const Menu = (props) => {
//   const [data, dataset] = React.useState('Hello reacts');
//   const changedata = () =>{
//     return dataset('Xin chao Reactjs')
//   }
//   return (
//   <>
//   <h3>{data}</h3>
//   <button onClick={changedata}>Click</button>
//   </>
// )
// }
// học về eventHanddle
// const App = () =>{
//   const eventHanddle  = (val) =>{
//     alert("Hello" + val);
//   }
//   return(
//     <button onClick = {() => eventHanddle("React")}>Action</button>    
//   )
// };
// học về mảng map
// const App = () => {
//   const items = [
//     "ABC",
//     "BCD",
//     "CDE"
//   ];
//   const results = items.map((value, index) => {
//     return (
//       <li>{value}</li>
//     )
//   });
//   return (
//     <ul>
//       {results}
//     </ul>
//   )
// };

// const App = () => {
//   const evenHanddle = (e , val) =>{
//     e.preventDefault();
//     console.log(val);
//       // console.log(e.target.name);
//       // console.log(e.target.type);
//       console.log(e.target.value);
//       // console.log("reac");
//   }
//   return (
//     <form method="post" onSubmit = {evenHanddle}>
//       <input onChange={ (e)=> evenHanddle(e, "vietpro")} type="text" name="txt" />
//       <button type="submit">Action</button>
//     </form>
//   )
// }
// hướng dẫn thêm css
// const App = () =>{
//   return(
//     <h1 className = "title">Linh</h1>
//   )
// }

// HOOK
// const App = () => {
//   const [data, setData] = React.useState(true);
//   // cu phap hook
//   React.useEffect(() => {
//     console.log("DidMount")
//   }, []);
//   React.useEffect(() => {
//     if (!data) {
//       console.log("DidUpdate")
//     }

//   });
//  return (
//    <button onClick={() => setData(!data)} type = "button">Action</button>
//  )
// }
//  AXIOS
// const App = () =>{
//   axios({
//     method : "GET",
//     url : "https://jsonplaceholder.typicode.com/users",
//     data : {}
//   }).then( (res) =>{
//      console.log(res.data);
//   }).catch((err) => {

//   })
//   return(
//     <h1>Axios</h1>
//   )
// }

// const App = () => {
//   // const [data, setData] = React.useState([]);

//   const delUser = (e) => {
//     e.preventDefault();
//     const userId = 5;
//     const user = {
//       name: "Linhct",
//       email: "Linh@gmail.com"
//     }
//     axios.delete( `https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((res) => {
//         // setData(res.data);
//         console.log(res);
//         console.log(res.data);
//       }).catch((err) => {

//       });
//   }
  // const result = data.map((value,index) =>{
  //   return(
  //     <tr>
  //           <td>{value.name}</td>
  //           <td>{value.username}</td>
  //           <td>{value.email}</td>
  //         </tr>
  //   )
  // });
  // return (
    // <div id="wrapper" className="container">
    //   <h2>Quản lý thành viên</h2>
    //   <p>Demo đơn giản về hiển thị danh sách thành viên thông qua việc <b>GET Data API bằng Axios Module</b></p>
    //   <table className="table table-dark table-hover">
    //     <thead>
    //       <tr>
    //         <th>Fullname</th>
    //         <th>Username</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //         {result}
    //     </tbody>
    //   </table>
    // </div>
//     <form method="POST" onSubmit={delUser}>
//       <button type="submit" >Action</button>
//     </form>

//   )
// }
// const App = () =>{
//   const Http = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
//   });
//   const config = {
//     params:{
//       id:[1,3,5]
//     }
//   }
//   Http.get("/users", config)
//   .then((res) => {
//      console.log(res);
//      console.log(res.data);
//   })
//   return(
//     <h1>Axios</h1>
//   )
// }
// ôn lại rexdux. axios. lyciker,
ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
