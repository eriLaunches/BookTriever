// import {connect} from 'react-redux'
import React from 'react'
import NavSearchBar from './NavSearchBar'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SwitchThemeIcon from '@material-ui/icons/Highlight'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import imagesInventory from '../../utilities/images'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const NavBarContainer = props => {
  const {classes} = props //Use for targeting Material UI elements for styling

  //Don't show nav search bar if user is on the home page
  if (props.location.pathname === '/') return ''
  else
    return (
      <div className={classes.root}>
        {/* change color of nav here with the color prop */}
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <Tooltip title="Navigate to Home">
                <Link to="/">
                  <img
                    onClick={() => props.history.push('/')}
                    id="nav-logo"
                    src={imagesInventory.logo}
                    alt="Website logo"
                  />
                </Link>
              </Tooltip>
            </Typography>
            <NavSearchBar />

            <Tooltip title="Switch between light and dark mode">
              <IconButton color="inherit">
                <SwitchThemeIcon
                  onClick={props.switchThemeColor}
                  fontSize="small"
                />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    )
}

// const mapStateToProps = state => ({
//   books: state.books
// })

// const mapDispatchToProps = dispatch => ({
//   onFetchBooks: input => dispatch(fetchBooks(input))
// })

// const ConnectNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(
//   NavBarContainer
// )

export default withStyles(styles)(NavBarContainer)
