import React from 'react'
import Navbar from '../Navbar/Navbar';
import Card from '../assets/full-stack.png'
import Card2 from '../assets/event.png'
import Card3 from '../assets/run.png'
import Card4 from '../assets/horiseon.png'

import '../styles/Project.css'


function Projects() {
  return (
    <div>
      <Navbar/>
      
      <section class="work-section" id="work-section">
    <div class="work-header">
      <h2>Portfolio</h2>
    </div>
    <div class="work-row">
      <div class="work-link-main">
        <a href="https://fierce-beach-05697.herokuapp.com/" target="_blank"><img src={Card}
          class="runbuddy-img" alt="squeaky-cleaners-landing-page"/>
          <div class="overlay-main">
            <div class="text-main">
              <h3>Full Stack</h3>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="work-row-two">
      <div class="work-link-secondary">
        <a href="https://ivydo.github.io/horiseon/" target="_blank"><img src={Card2}
            class="horiseon-img" alt="horiseon landing page example"/>
          <div class="overlay-main">
            <div class="text-secondary">
              <h3>Horiseon</h3>
            </div>
          </div>
        </a>
      </div>

      <div class="work-link-secondary">
        <a href="https://lernantino.github.io/run-buddy/" target="_blank"><img src={Card3}
            class="runbuddy-img" alt="run buddy landing page example"/>
        <div class="overlay-main">
          <div class="text-secondary">
            <h3>Run Buddy</h3>
          </div>
        </div>
      </a>
      </div>

    
      <div class="work-link-secondary">
        <a href="https://ivydo.github.io/Event-Finder/"
          target="_blank">
          <img src={Card4} class="coming-soon-img" alt="coming soon website page"/>
        <div class="overlay-main">
          <div class="text-secondary">
            <h3>Weather Dashboard</h3>
          </div>
        </div>
      </a>
      </div>


    </div>

  </section>

    </div>

  )
}

export default Projects