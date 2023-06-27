import logo from './logo.svg';
import './App.css';
import home from "./home"
import about from "./about"
import contact from "./contact"
import {BrowserRouter,Routes,Route} from "react-router-dom"

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
  <u>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </u>
}
<BrowserRouter>
  <Routes>
    <Route path="/" element="{<home.js/>}"/>
    <Route path="/about" element="{<about.js/>}"/>
    <Route path="/contact" element="{<contact.js/>}"/>
  </Routes>
</BrowserRouter>

export default App;
