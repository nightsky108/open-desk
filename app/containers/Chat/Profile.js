import React from 'react'

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'

//photoURL | displayName | email
// threeLines

const Profile = ({ user = false, authenticate}) => (
  <div>
  {user ?
    <ListItem
      leftAvatar={<Avatar src={user.photoURL} role='presentation' />}
      primaryText={user.displayName}
      secondaryText={user.email}
    />
  : <div onClick={authenticate}>Please Log in</div>}
</div>
)

export default Profile
