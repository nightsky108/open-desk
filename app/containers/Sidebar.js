import React, { Component } from 'react'

import Profile from './Chat/Profile'
// import ChatBox from './Chat/ChatBox'
// import Composer from './Chat/Composer'

//  Array is raw due to the unique nature of each element

class Sidebar extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      chat: []
      // user: false
    }
  }

  render () {
    return (
      <div>
        <Profile authenticate={this.props.authenticate} user={this.props.user} />
        <div className='md-divider' />

        {/*
        <ChatBox messages={chat} />
        <div className='md-divider' />
        <Composer />
        */}
      </div>
    )
  }
}

//
// const Sidebar = ({chat = [],  }) => (
//   <div>
//     <Profile />
//     <div className='md-divider' />
//
//     {/*
//     <ChatBox messages={chat} />
//     <div className='md-divider' />
//     <Composer />
//     */}
//   </div>
// )

export default Sidebar
