import React from 'react'

import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'

// photoURL | displayName | email
// threeLines
const Profile = ({ user = false, auth, unauth }) => (
  <div>
    {user ? <ListItem onClick={unauth}
      leftAvatar={
        <Avatar src={user.photoURL} role='presentation' />
      }
      threeLines
      primaryText={user.displayName}
      secondaryText={
        <span>{`${user.email}\n`}<em>Click to logout</em></span>
      }
    />
    : <ListItem onClick={auth}
      threeLines
      primaryText={<b>Click to Login</b>}
      secondaryText={<em>Authentication by Google</em>}
    />
    }
  </div>
)

export default Profile
