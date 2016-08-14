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
      <div id='container1' className='container blur-bg shaded'>
  		<div className="content">
    		<h1>Welcome, It's Nice to meet you!</h1>
    		<h2>This is my landing page</h2>
		</div>
      </div>
    );
  }
}

export default Landing;