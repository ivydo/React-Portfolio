import React from 'react'
import Run from "../assets/run.png"

function Card4() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>
          <div className='title'>HTML/CSS</div>
        </div>
        <div className='card-image'>
        <img src={Run} alt="Placeholder"/>
        </div>
        <div className='card-content'>
          <a href="https://pacific-sea-53881.herokuapp.com/">Run-Buddy</a>
        </div>
      </div>
    </div>  )
}

export default Card4