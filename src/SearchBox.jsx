import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

const SearchBox = ({ updateInfo }) => {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "fca34fc2b3306050aecca9aa1c32141b"

    let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city : city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        temp : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    }catch (err) {
      throw err
    }
  };

    let handleChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleSubmit = async (evt) => {
        try {
          evt.preventDefault();
          console.log(city);
          setCity("");
          let newInfo = await getWeatherInfo();
          updateInfo(newInfo);
        }catch (err) {
          setError(true)
        }
    }

  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
        Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  )
}

export default SearchBox
