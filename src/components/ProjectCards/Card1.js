import React from 'react';
import Sparkling from "../assets/sparkling.png"

function Card1() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>
          <div className='title'>MERN Project</div>
        </div>
        <div className='card-image'>
        <img src={Sparkling} alt="Placeholder"/>
        </div>
        <div className='card-content'>
          <a href="https://pacific-sea-53881.herokuapp.com/">Sparkling Spaces</a>
        </div>
      </div>
    </div>
  )
}

export default Card1