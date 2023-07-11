// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [temp, setTemp] = useState([]);
  const [name, setName] = useState([]);

  const changeEvent = (e) => {
    setUsers(e.target.value);
  };

  const clickEvent = (e) => {
    // const fetchData = () => {
    console.log(users);
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${users}&appid=4f13ad415eaff4542453cda4f44af349&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTemp(data.main.temp)
        setName(data.name)
      })
      .catch(error => console.log(error))

      setUsers("");

  };

  return (
    <center>
      <div className="search-conatiner">
        <input onChange={changeEvent} placeholder=" Search by Address"></input>
        <button onClick={clickEvent}>Search</button>
      </div>

      <div>{temp}</div>
      <div>{name}</div>
    </center>
  );
}

export default App;
