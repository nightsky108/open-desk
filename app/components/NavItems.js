import React from 'react'
import { hashHistory } from 'react-router' //  For pushing links w/o Router

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'

import TextField from 'react-md/lib/TextFields'

//  Array is raw due to the unique nature of each element
const NavItems = [
  <ListItem
    leftAvatar={<Avatar src='http://derfunknoid.com/logo.png' role='presentation' />}
    // rightIcon={<FontIcon>star</FontIcon>}
    primaryText='Barren Skew'
    secondaryText={'Senior Graphics Coordinator\nGraphics Department'}
    threeLines
  />, {divider: true},
  <div>
    Chat Messages Here
  </div>, {divider: true},
  <TextField
    id='floatingMultiline'
    label='Company Chat'
    // placeholder="Hello World"
    lineDirection='right'
    rows={4}
    className='md-cell md-cell--bottom'
  />
]

export default NavItems
