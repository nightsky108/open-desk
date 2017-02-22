import React from 'react'

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'

const Profile = ({ user = false, authenticate}) => (
  <div>
  {user ?
    <ListItem
      leftAvatar={<Avatar src='http://derfunknoid.com/logo.png' role='presentation' />}
      primaryText='Barren Skew'
      secondaryText={'Senior Graphics Coordinator\nGraphics Department'}
      threeLines
    />
  : <div onClick={authenticate}>Please Log in</div>}
</div>
)

export default Profile
