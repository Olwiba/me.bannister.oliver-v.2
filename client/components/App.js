import React, { Component, PropTypes } from 'react';
import Landing from './Landing';

class App extends Component {
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
      <div>
      <Landing />
      </div>
    );
  }
}

export default App;
