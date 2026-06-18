import React from 'react'
import "./Card.css"

function Card({weather}) {
  return (
    <div className='card'>

  <h1>{`${weather.main.temp_max} C`}</h1>
    </div>
  )
}

export default Card
