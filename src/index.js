import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
// function Printname(){
//   // return <h1>Hello hii</h1>

//   return (
//     <div>
//       <h1>
//         Hii{10+20}
//       </h1>
//     </div>
//   )
// }
// ReactDOM.render(
//   <Printname/>,document.getElementById("root")
// )



const root  = ReactDOM.createRoot(document.getElementById("root"));

const data = [
  {name : 'Ethereum',price :'23453', change :'17%',trade:'SELL'},
  {name : 'Bitcoin',price :'30453', change :'42%',trade:'BUY'},
  {name : 'DOGE',price :'0.353', change :'3%',trade:'SELL'},
  {name : 'MATIC',price :'1.3', change :'7%',trade:'SELL'},
];

root.render(
  <>
  {/* <Printname/> */}
  {/* <App name={data[0].name} price={data[0].price} change={data[0].change} trade = {data[0].trade}   />
  <App name={data[1].name} price={data[1].price} change={data[1].change} trade = {data[1].trade} />
  <App name={data[2].name} price={data[2].price} change={data[2].change} trade = {data[2].trade} />
  <App name={data[3].name} price={data[3].price} change={data[3].change} trade = {data[3].trade} /> */}
  <App/>
  </>
)