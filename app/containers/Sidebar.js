import React, { Component } from 'react'

import Profile from './Chat/Profile'
// import FireChatContainer from './Chat/FireChatContainer'
import ChatBox from './Chat/ChatBox'
import Composer from './Chat/Composer'

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
        <Profile user={this.props.user} auth={this.props.auth} unauth={this.props.unauth} />
        <div className='md-divider' />
        <ChatBox messages={this.state.chat} />
        <div className='md-divider' />
        <Composer />
      </div>
    )
  }
}


export default Sidebar
