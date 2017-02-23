import React, { Component } from 'react'

import Profile from './Chat/Profile'
import FireChatContainer from './Chat/FireChatContainer'
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
        <Profile user={this.props.user} authenticate={this.props.authenticate} />
        <div className='md-divider' />
        <FireChatContainer user={this.props.user} chat={this.props.chat} />
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
