import React, { Component } from 'react'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

//  Initialize Firebase with re(act)-firebase
import Rebase from 're-base'
var base = Rebase.createClass({
  apiKey: 'AIzaSyBfCVgE634iJa2xEuKckrA4uuUukrIc8PU',
  authDomain: 'darrendrew-eaf10.firebaseapp.com',
  databaseURL: 'https://darrendrew-eaf10.firebaseio.com',
  storageBucket: 'darrendrew-eaf10.appspot.com'
})

class UI extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      cases: [],
      chat: [],
      user: false
    }
    this.authenticate = this.authenticate.bind(this)
  }

  componentWillMount () {
    base.syncState(`cases`, {
      context: this,
      state: 'cases',
      asArray: true
    })
    base.syncState(`chat`, {
      context: this,
      state: 'chat'
      // asArray: true
    })
  }

  authenticate () {
    let authHandler = (error, user) => error ? console.log('Error:', error) : console.log('User Obj:', user)
    base.authWithOAuthPopup('google', authHandler)
  }

  render () {
    return (
      <div>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <NavigationDrawer
          navItems={[<Sidebar {...this.authenticate} />]}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
          toolbarTitle={<span>Open Industry | <em>service manager</em></span>}
          drawerTitle={<span className='md-text--theme-primary'>Messaging</span>}
        >
          <Dashboard />
        </NavigationDrawer>
      </div>
    )
  }

  componentDidMount () {
    // let authHandler = function (error, user) {
    //   if (error) console.log('Error:', error)
    //   console.log('User Obj:', user)
    // }
    this.authenticate()
  }
}

export default UI

// module.exports = React.createClass({
//   getInitialState: function () {
//     return {
//
//     }
//   },
//
// })
