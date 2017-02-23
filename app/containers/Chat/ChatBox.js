import React from 'react'

import Avatar from 'react-md/lib/Avatars'
import Paper from 'react-md/lib/Papers'

//  Array is raw due to the unique nature of each element
const ChatBox = () => (
  <div className='chat-box'>
    <div className='message'>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
      <div className='content receiver'>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </div>
    </div>
    <div className='message'>
      <div className='content sender'>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </div>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
    </div>
    <div className='chat-message'>

      <Paper style={{borderRadius: '8px 0 8px 8px'}}>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </Paper>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
    </div>

    <div className='chat-message'>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
      <Paper style={{borderRadius: '0 8px 8px 8px'}}>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </Paper>
    </div>
    <div className='chat-message'>

      <Paper style={{borderRadius: '8px 0 8px 8px'}}>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </Paper>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
    </div>
  </div>
)

export default ChatBox
