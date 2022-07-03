import React, { useEffect, useState } from "react";
import '../styles/App.css';

export default function App(){
  const [lat, setLat]= useState([]);
  
  const [long, setLong]= useState([]);
  
  useEffect(()=>{
    const fetchData= async()=>{
    
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4721875125989469f55f6f67bccf42ac`)
    .then(res=>res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData();

  },[lat, long]);
  return(
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <weather weatherData={data}/>

      ):(
        <div></div>
      )}

    </div>
  );
}
