import React, { Component } from 'react'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import Sidebar from './Sidebar'

// import Firebase from 'firebase'
// import ReactFireMixin from 'reactfire'
// import reactMixin from 'react-mixin'

class UI extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      toolbarTitle: <span>Open Industry | <em>service manager</em></span>,
      users: []
    }
  }

  render () {
    return (
      <div>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <NavigationDrawer
          navItems={Sidebar}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
          toolbarTitle={this.state.toolbarTitle}
          drawerTitle={<span className='md-text--theme-primary'>Messaging</span>}
        >
          {this.props.children}
        </NavigationDrawer>
      </div>
    )
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
