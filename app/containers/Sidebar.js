import React from 'react'

import Profile from './Chat/Profile'
import ChatBox from './Chat/ChatBox'
import Composer from './Chat/Composer'

//  Array is raw due to the unique nature of each element
const Sidebar = [
  <Profile />,
  {divider: true},
  <ChatBox />,
  {divider: true},
  <Composer />
]

export default Sidebar
