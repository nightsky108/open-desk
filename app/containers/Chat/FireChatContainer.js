import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import $ from 'jquery'

/*
import $ from 'jquery'
import FirechatUI from 'firechat'
import { FirechatUI } from 'https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js'
import '../../firechat.min.js'
import FirechatUI from 'firechat'
*/
// import Firechat from './firechat/src/js/firechat'
// import FirechatUI from './firechat/src/js/firechat-ui'

// const Firechat = require('firechat')

// const FirechatCDN = '<script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>'

class FireChatContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.injectCDN.bind(this)
  }

  injectCDN () {
    return {__html: '<script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>'}
  }

  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.injectCDN()} ref='firechatscript' />
        <div id='firechat-wrapper'>
          Wrapper
        </div>
      </div>
    )
  }
  componentDidMount () {
    const firechatNode = findDOMNode(this.refs.firechatscript)
    console.log(firechatNode)
        // $(el).slideToggle();
  //   var chat = new FirechatUI(this.props.chat, document.getElementById('firechat-wrapper'))
  //   // Set the Firechat user
  //   chat.setUser(this.props.user.uid, this.props.user.displayName)
  }
}

export default FireChatContainer
