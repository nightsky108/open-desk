import React from 'react'
// import { hashHistory } from 'react-router' //  For pushing links w/o Router

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'

import Paper from 'react-md/lib/Papers'

import TextField from 'react-md/lib/TextFields'

//  Array is raw due to the unique nature of each element
const NavItems = [
  <ListItem
    leftAvatar={<Avatar src='http://derfunknoid.com/logo.png' role='presentation' />}
    primaryText='Barren Skew'
    secondaryText={'Senior Graphics Coordinator\nGraphics Department'}
    threeLines
  />, {divider: true},
  <div className='chat-box'>
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
  </div>, {divider: true},
  <TextField
    id='singleMultiline'
    // id='floatingMultiline'
    // label='Type a message...'
    // placeholder="Hello World"
    lineDirection='right'
    rows={4}
    className='md-cell md-cell--bottom'
  />
]

export default NavItems
