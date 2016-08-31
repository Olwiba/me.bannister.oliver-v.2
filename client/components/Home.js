import React, { Component, PropTypes } from 'react'

import Navigation from './Home-Components/Navigation'
import Splash from './Home-Components/Splash'
import Intro from './Home-Components/Intro'
import About from './Home-Components/About'
import Skills from './Home-Components/Skills'
import Projects from './Home-Components/Projects'

class Home extends Component {
  static propTypes = {
    //propTypes go here
  }

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <div className='content'>
        <Navigation/>
        <Splash/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default Home