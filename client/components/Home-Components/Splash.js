import React, { Component } from 'react'

class Splash extends Component {

  render() {
    return (
      <div className='splash'>
      	<div className='center'>
          <img src='/resources/images/smile.png' className='smileFace'/>
	        <h1 className='white'>Hi There&#44;</h1>
	        <h1 className='white'>It&#39;s nice to meet you&#33;</h1>
          <img src='/resources/images/downArrow.png' className='downArrow'/>
    		</div>
      </div>
    );
  }
}

export default Splash
