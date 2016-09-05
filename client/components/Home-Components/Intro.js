import React, { Component } from 'react'

class Intro extends Component {

  render() {
    return (
      <section id='section-intro'>
        <div className='intro'>
          <div className='intro-content'>
            <h1 className=''>The Essentials</h1>
            <div className='essentials'>
              <div className='essential-item'>
                <img src='/resources/images/tools.png' alt='Creative' className='essential-img'/>
                <p>
                  Naturally talented in design, I love making things look awesome. On top of creating visually beautiful websites and Applications, I also have a strong sense in user experiance.
                </p>
              </div>
              <div className='essential-item'>
                <img src='/resources/images/thumbsUp.svg' alt='Creative' className='essential-img'/>
                <p>
                  I'm a very positive person, always finding the up side in everything in life.
                </p>
              </div>
              <div className='essential-item'>
                <img src='/resources/images/group.svg' alt='Creative' className='essential-img'/>
                <p>
                  Thoughout my experiances I houve found that I work much better in teams, This has aided me in deveoping some really strong communication and realtionship skills. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro
