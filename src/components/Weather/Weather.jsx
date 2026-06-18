import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import Card from "../Card/Card";

function Weather() {
  const [city, setCity] = useState("Anand");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
      );
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    fetchWeather();
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchWeather();
                }
              }}
            />
          </div>
          <div className="btn-box">
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}

        {!loading && weather && <Card weather={weather} />}
      </div>
    </>
  );
}

export default Weather;
