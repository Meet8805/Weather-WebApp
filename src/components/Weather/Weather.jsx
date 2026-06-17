import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import Card from "../Card/Card";

function Weather() {
  const [city, setCity] = useState("");
  const [weather,setWeather]=useState("");

  const fetchData = async () => {
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
      );
      setWeather(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchData();
    console.log("clicked");
  };

  return (
    <>
      <div className="main-box">
        <div>
          <h1>Weather Web Application</h1>
        </div>
        <div className="search-box">
          <div className="input-box">
            <input
              type="text"
              placeholder="Search a city ..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="btn-box">
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
      <div className="cards-container">
          <Card weather={weather} />
      </div>
    </>
  );
}

export default Weather;
