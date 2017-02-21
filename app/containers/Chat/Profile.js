import React from 'react'

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'

const Profile = () => (
  <ListItem
    leftAvatar={<Avatar src='http://derfunknoid.com/logo.png' role='presentation' />}
    primaryText='Barren Skew'
    secondaryText={'Senior Graphics Coordinator\nGraphics Department'}
    threeLines
  />
)

export default Profile
