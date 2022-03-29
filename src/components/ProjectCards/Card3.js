import React from 'react'
import Event from "../assets/event.png"

function Card3() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>
          <div className='title'>Front-End</div>
        </div>
        <div className='card-image'>
        <img src={Event} alt="Placeholder"/>
        </div>
        <div className='card-content'>
          <a href="https://pacific-sea-53881.herokuapp.com/">Event Finder</a>
        </div>
      </div>
    </div>  )
}

export default Card3