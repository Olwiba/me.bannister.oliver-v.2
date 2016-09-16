import React, { Component } from 'react'

class Navigation extends Component {

  render() {
    return (
      <div className='navigation'>
        <header className='main_h'>
		    <div className='row'>
		        <a href='#'><img src='/resources/images/olwiba-logo.png' alt='Olwiba' className='logo' /></a>
		        <div className='mobile-toggle'>
		            <span></span>
		            <span></span>
		            <span></span>
		        </div>
		        <nav>
		            <ul>
		                <li><a href='#section-intro'>Who Am I&#63;</a></li>
		                <li><a href='#'>Section 02</a></li>
		                <li><a href='#'>Section 03</a></li>
		                <li><a href='#'>Section 04</a></li>
		            </ul>
		        </nav>
		    </div>
		</header>
      </div>
    );
  }
}

export default Navigation
