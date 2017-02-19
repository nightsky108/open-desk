// jshint ignore: start
import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import UI from './containers/UI'
import Home from './components/Home'

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

render(
  <Router history={hashHistory}>
    <Route path='/' component={UI}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
  , document.getElementById('app')
)
//  Add a route: <Route path='about' component={About} />
