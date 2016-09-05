import React, { Component } from 'react'

class About extends Component {

  render() {
    return (
      <div className='about'>
        <div className='about-content'>
          <div className='about1'>
            <img src='/resources/images/myself.png' alt='Myself' className='portrait' />
          </div>
          <div className='about2'>
            <h2>Ollie Bannister</h2>
            <h3>Full-Stack Web Developer</h3>
            <p>
              Check me out on the following social medias:
            </p>
            <div>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
            <p>
              Want to know more? Check out my CV below:
            </p>
            <a href="#" className='download-cv'></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About
