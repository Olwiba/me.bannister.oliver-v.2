import React, { Component, PropTypes } from 'react'

import Navigation from './Home-Components/Navigation'
import Splash from './Home-Components/Splash'
import Intro from './Home-Components/Intro'
import About from './Home-Components/About'

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
      </div>
    );
  }
}

export default Home