import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {

    const [weatherInfo, setweatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 45,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    };

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{fontSize: "35px", textDecoration: "underline"}}>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
