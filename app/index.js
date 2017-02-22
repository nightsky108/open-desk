import React from 'react'
import { render } from 'react-dom'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

import UI from './containers/UI'

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}
render(
  <UI />
  , document.getElementById('app')
)
//  Add a route: <Route path='about' component={About} />
