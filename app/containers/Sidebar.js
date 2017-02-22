import React from 'react'

import Profile from './Chat/Profile'
// import ChatBox from './Chat/ChatBox'
// import Composer from './Chat/Composer'

//  Array is raw due to the unique nature of each element
const Sidebar = ({chat = [], user }) => (
  <div>
    <Profile />
    <div className='md-divider' />

    {/*
    <ChatBox messages={chat} />
    <div className='md-divider' />
    <Composer />
    */}
  </div>
)

export default Sidebar
