import React from 'react'
import Navbar from '../Navbar/Navbar';
import Card1 from '../ProjectCards/Card1';
import Card2 from '../ProjectCards/Card2';
import Card3 from '../ProjectCards/Card3';
import Card4 from '../ProjectCards/Card4';
import Card5 from '../ProjectCards/Card5';
import Card6 from '../ProjectCards/Card6';
// import im1 from '../assets/full-stack.png'
// import im1 from '../assets/event.png'
// import im1 from '../assets/run.png'
// import im1 from '../assets/horiseon.png'

import '../styles/Project.css'


function Projects() {
  return (
    <div>
      <Navbar />
      <div className='section is-medium'>
        <div className='columns'>
          {/* col1 */}
          <div className='column'>
            <Card1 />
            <Card2 />
          </div>
          {/* col2 */}
          <div className='column'>
            <Card3 />
            <Card4 />
          </div>
          {/* col3 */}
          <div className='column'>
            <Card5 />
            <Card6 />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects