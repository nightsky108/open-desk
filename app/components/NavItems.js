import React from 'react'
import { hashHistory } from 'react-router' //  For pushing links w/o Router

import FontIcon from 'react-md/lib/FontIcons'

//  Array is raw due to the unique nature of each element
const NavItems = [{
  primaryText: 'Dashboard',
  leftIcon: <FontIcon>home</FontIcon>,
  onClick: () => (hashHistory.push('/'))
}, {divider: true}, {
  primaryText: 'Contact', subheader: true
}, {divider: true}, {
  primaryText: 'RyKeller@UW.edu',
  secondaryText: 'Web Administrator',
  leftIcon: <a href='mailto:rykeller@uw.edu' alt=''><FontIcon>mail</FontIcon></a>,
  tileClassName: 'selectable'
}, {divider: true}]

export default NavItems
