import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
// function App(probs) {

//   return (
//     <div className='container'>
//       <div>
//         {probs.name}
//       </div>
//       <div>{probs.price}</div>
//       <div>{probs.change}</div>
//       <div>{probs.trade}</div>
//     </div>
//   );
// }
function Nav(){
  return(
    <u>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </u>


  )

}

function App(){
  return(
    <BrowserRouter>
    <Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
  )
}



export default App;
