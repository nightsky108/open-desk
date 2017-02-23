import React, { Component } from 'react'

// import $ from 'jquery'
// import { Firechat, FirechatUI } from 'firechat'
// import { FirechatUI } from 'https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js'
// import '../../firechat.min.js'
// import FirechatUI from 'firechat'

class FireChatContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  render () {
    return (<div id='firechat-wrapper'>Wrapper</div>)
  }
  componentDidMount () {
    // var chat = new FirechatUI(this.props.chat, document.getElementById('firechat-wrapper'))
    // // Set the Firechat user
    // chat.setUser(this.props.user.uid, this.props.user.displayName)
  }
}

export default FireChatContainer
