import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {withStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import {styles} from './TestStyle'

function SearchAppBar(props) {
  const {classes: muClasses} = props
  console.log(props)
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={muClasses.menuButton}
            color="inherit"
            aria-label="Open drawer"
          />
          <Typography
            className={muClasses.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            BookTriever
          </Typography>
          {
            <div class="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i class="fa fa-search" />
                </button>
              </form>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchAppBar)
