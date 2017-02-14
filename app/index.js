import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store'
const store = configureStore()

import App from './containers/App'

const target = document.getElementById('app')

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

const node = (<App store={store} />)
ReactDOM.render(node, target)

// render(<HomePage />, document.getElementById('app'))

/*
import App from './App'

import configureStore from './store'

const store = configureStore()

const targetEl = document.getElementById('root')

const node = (<App store={store}/>)
ReactDOM.render(node, targetEl)
*/
