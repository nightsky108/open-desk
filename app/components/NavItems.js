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
  />, {divider: true}, {
    primaryText: 'Company Chat', subheader: true
  }, {divider: true},
  <div>
    <div className='md-list-tile md-text' tabindex='0' aria-pressed='false'>
      <div className='md-tile-addon md-tile-addon--avatar'>
        <div className='md-inline-block md-avatar md-avatar--default'>
          <img src='https://unsplash.it/40/40?random&amp;time=1487572525338' role='presentation' className='md-avatar-img' />
        </div>
      </div>
      <div className='md-tile-content md-tile-content--left-avatar md-tile-content--right-padding'>
        <div className='md-tile-text--primary md-text'><b>Kelli Trosvig</b></div>
        <div className='md-tile-text--secondary md-text--secondary md-tile-text--three-lines'>I'll be in your neighborhood sometime this week I'll be in your neighborhood sometime this week</div>
      </div>
    </div>
  </div>, {divider: true},
  <TextField
    id='floatingMultiline'
    label='Type a message...'
    // placeholder="Hello World"
    lineDirection='right'
    rows={4}
    className='md-cell md-cell--bottom'
  />
]

export default NavItems
