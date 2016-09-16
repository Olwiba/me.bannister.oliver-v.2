import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink'
import GithubCorner from 'react-github-corner'

class Landing extends Component {

  render() {
    return (
      <div className='landing-content'>
        <GithubCorner href="https://github.com/Olwiba/me.bannister.oliver-v.2" direction="left" bannerColor="rgba(4, 176, 3, 0.9)" />
        <div id='container1' className='container blur-bg shaded'>
          <div className='content'>
            <img src='/resources/images/welcome.png' className='welcome'/>
            <img src='/resources/images/olwiba-logo-new.png' alt='Olwiba' className='logo'/>
        		<h1 className='white'>Where did you want to go?</h1>
            
          <div className='content-buttons'>
            <NavLink to='/Home'><a className='btn home'>Check Me Out!</a></NavLink>
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