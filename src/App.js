import logo from './logo.svg';
import './App.css';
function App(probs) {

  return (
    <div className='container'>
      <div>
        {probs.name}
      </div>
      <div>{probs.price}</div>
      <div>{probs.change}</div>
      <div>{probs.trade}</div>
    </div>
  );
}

export default App;
