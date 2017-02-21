import React from 'react'
// import 'font-awesome/scss/font-awesome.scss'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavItems from '../components/NavItems'

module.exports = React.createClass({
  getInitialState: function () {
    return {
      toolbarTitle: <span>Open Industry | <em>service manager</em></span>
    }
  },

  render () {
    return (
      <div>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <NavigationDrawer
          navItems={NavItems}
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
})
