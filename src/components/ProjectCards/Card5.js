import React from 'react'
import Horiseon from "../assets/horiseon.png"

function Card5() {
  return (    <div className='card-container'>
  <div className='card'>
    <div className='card-header'>
      <div className='title'>HTML/CSS</div>
    </div>
    <div className='card-image'>
    <img src={Horiseon} alt="Placeholder"/>
    </div>
    <div className='card-content'>
      <a href="https://pacific-sea-53881.herokuapp.com/">Horiseon</a>
    </div>
  </div>
</div>  
)
}

export default Card5