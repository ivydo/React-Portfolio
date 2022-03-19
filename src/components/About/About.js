import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../styles/About.css'
import Profile from '../assets/profile-pic.png'


function About() {
  return (
    <div>
      <Navbar />

      <div className='about'>
        <div>
        <img src={Profile} alt="profile" className="profile" />
        </div>
        <div className='about-me'>
        <h2>about me</h2>
      <p>
      Ambitious Front-End Web Developer. 
      Recent recipient of a certificate from the University of Central Florida Full Stack Web Development Bootcamp that allowed me to acquire and hone my skills.
      Professional strengths include multitasking, communication and time management with solid ability to learn quickly and stay calm under high pressure and 
      fast-paced environments, collaborate with a team or work independently, and a strong focus on attention to detail. 
      Passionate to make an impact in creating intuitive applications and continue my growth in this ever-growing field.
      </p>

      <h2>skills</h2>
      <p>HTML5 | CSS3 | JAVASCRIPT | jQUERY | NODE.JS | MONGO-DB | MYSQL | REACT | EXPRESS | EXPRESS-HANDLEBARS | JSON</p>

      <h2>education</h2>
      <h2>UNIVERSITY OF CENTRAL FLORIDA </h2>
      <p>BACHELORS IN EDUCATION 2019</p>
      <h2>UNIVERSITY OF CENTRAL FLORIDA BACHELORS IN EDUCATION 2019</h2>
      <p>FULL STACK WEB DEVELOPMENT CERTIFICATE</p>
        </div>
      
      </div>
      
    </div>
  )
}

export default About