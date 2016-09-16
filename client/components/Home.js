import React, { Component, PropTypes } from 'react'

import Navigation from './Home-Components/Navigation'
import Splash from './Home-Components/Splash'
import Intro from './Home-Components/Intro'
import About from './Home-Components/About'
import Attributes from './Home-Components/Attributes'
import Skills from './Home-Components/Skills'
import Interests from './Home-Components/Interests'
import Projects from './Home-Components/Projects'
import Contact from './Home-Components/Contact'

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
        <Attributes/>
        <Skills/>
        <Interests/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default Home
