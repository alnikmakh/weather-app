import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [weather, setWeather] = useState([]);
  const fetchWeather = async () => {
    return await (await fetch("http://localhost:8000/weather")).json();
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeather();
    setWeather(data);
    }
    fetchData();
    
  }, []);

  const clickHandler = () => {
    console.log(weather);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <button type="button" onClick={clickHandler} >Touch me</button>
      </div>
    </div>
  );
}

export default App;
