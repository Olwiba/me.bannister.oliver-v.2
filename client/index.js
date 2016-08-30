import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'
import Home from './components/Home'

const appContent = document.getElementById('app')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/Home" component={Home}/>
	</Route>
  </Router>
), appContent)
console.log('Oliver.Bannister.me Has finished loading...')
console.log('Checking out my code? Take a look at my Github for pre-bundled syntax.')
console.log('____(o^^)o_____(^-^*)____')


