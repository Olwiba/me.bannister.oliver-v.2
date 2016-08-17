import React, { Component, PropTypes } from 'react';

class Landing extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  render() {
    return (
      <div className='content'>
        <div id='container1' className='container blur-bg shaded'>
          <div className='content'>
            <img src='/resources/images/welcome.png' className='welcome'/>
            <img src='/resources/images/olwiba-logo-new.png' alt='Olwiba' className='logo'/>
        		<h1>Where did you want to go?</h1>
            
          <div className='content-buttons'>
            <a href='#' className='btn home'>Check Me Out!</a>
            <a href='#' className='btn home'>Contact Me</a>
          </div>
          </div>
        </div>
        <div id='container2' className='blur-bg shaded'>
            <h2>Copyright © | Ollie Bannister 2016</h2>
        </div>
      </div>
    );
  }
}

export default Landing;