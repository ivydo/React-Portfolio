import React from 'react'
import Squeaky from "../assets/full-stack.png"

function Card2() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>
          <div className='title'>Full Stack Project</div>
        </div>
        <div className='card-image'>
        <img src={Squeaky} alt="Placeholder"/>
        </div>
        <div className='card-content'>
          <a href="https://pacific-sea-53881.herokuapp.com/">Squeaky Cleaners</a>
        </div>
      </div>
    </div>  )
}

export default Card2