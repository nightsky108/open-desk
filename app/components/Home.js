import React from 'react'

import Dashboard from '../containers/Dashboard'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Code 501</h1>
        <h2>Building Web Apps with React + Redux</h2>
        <Dashboard />
      </div>
    )
  }
}

export default Home
