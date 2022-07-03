import React, {Component, useState,useEffect} from "react";
import Weathercard from "./Weathercard";
import '../styles/App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=eefde8ab9ccbfc5ebdc29c2520f348db`

      const res = await fetch(url);
      const data = await res.json();

      const { temp} = data.main;
      const { main: weathermood } = data.weather[0];
      const {name} = data;
      const {country} = data.sys;

        const myNewWeatherInfo = {
          temp,
          weathermood,
          name,
          country,
        };

        setTempInfo(myNewWeatherInfo);
    } catch(error){
      alert("City not Found ");
      setSearchValue("");
      //console.log(error);
    }
   };

  useEffect(() => {
    getWeatherInfo();
  },[]);
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search"
            placeholder='search...' autoFocus
            id='search'
            className='searchTerm' 
            value={ searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
   
      <Weathercard tempInfo={tempInfo}/>
    </>
  )
}


export default App;