import React from "react";
import "./Card.css";

function Card({ weather }) {
 
  const getWeatherEmoji = (condition) => {
  switch (condition) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Drizzle":
      return "🌦️";
    case "Thunderstorm":
      return "⛈️";
    case "Snow":
      return "❄️";
    case "Mist":
      return "🌫️"
    case "Fog":
       return "🌫️"
    case "Haze":
      return "🌫️";
    default:
      return "🌍";
  }
};


  return (
    <div className="card">
      <h1>{weather.name}</h1>
      <p className="temp">{weather.main.temp}&deg;C</p>
      <p className="humidity">Humidity : {weather.main.humidity}</p>
      <p className="desc">{weather.weather[0].description}</p>
      <p className="emoji">{getWeatherEmoji(weather.weather[0].main)}</p>
    </div>
  );
}

export default Card;
