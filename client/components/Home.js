import React, { Component, PropTypes } from 'react'

import Navigation from './Home-Components/Navigation'


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
      </div>
    );
  }
}

export default Home