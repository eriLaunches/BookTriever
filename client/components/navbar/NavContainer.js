import React from 'react'
import NavSearchForm from './NavSearchForm'
import NavLogo from './NavLogo'
import NavThemeSwitch from './NavThemeSwitch'
import styles from './material-styles.js'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

//This component allows displays a navigation bar at the top of the web app, allowing users to search for books while not on the homepage

const NavContainer = props => {
  const {classes} = props //for Material UI styling

  //Conditional use to only display navbar for search results and book details view
  if (
    props.location.pathname === '/search' ||
    props.location.pathname === '/book'
  ) {
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <NavLogo />
            <NavSearchForm />
            <NavThemeSwitch switchThemeColor={props.switchThemeColor} />
          </Toolbar>
        </AppBar>
      </div>
    )
  } else return null
}

export default withStyles(styles)(NavContainer)
