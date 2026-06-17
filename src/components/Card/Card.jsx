import React from 'react'
import "./Card.css"

function Card({weather}) {
  return (
    <div className='card'>
      <h1>{weather.name}</h1>
      <p>{weather.sys.country}</p>
      <p>{weather.main.temp       }</p>
      <p>{weather.main.feels_like    }</p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.humidity  }</p>
      <p>{weather.wind.speed   }</p>
      <p>{weather.visibility              }</p>
      <p>{weather.main.temp_max }</p>
      <p>{weather.main.temp_min }</p>
      <p>{weather.main.pressure}</p>
      <p>{weather.sys.sunrise  }</p>
      <p>{weather.sys.sunset    }</p>
      <p>{weather.weather[0].icon   }</p>
    </div>
  )
}

export default Card
