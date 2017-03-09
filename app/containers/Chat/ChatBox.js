import React from 'react'

import Avatar from 'react-md/lib/Avatars'

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
    <div className='message' style={{direction: 'rtl'}}>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
      <div className='content sender'>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World
      </div>
    </div>

    <div className='message'>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
      <div className='content receiver'>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World
      </div>
    </div>
    <div className='message'>
      <div className='content sender'>
        <span className='md-text--secondary'>Darren | 12:41pm</span><br />
        Hello World I'm going to talk about myself and my packages nyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenyenye
      </div>
      <Avatar src='http://derfunknoid.com/logo.png' iconSized role='presentation' />
    </div>

  </div>
)

export default ChatBox
