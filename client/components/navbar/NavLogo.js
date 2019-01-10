import React from 'react'
import {Link} from 'react-router-dom'
import imagesInventory from '../../utilities/images'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const NavLogo = props => {
  return (
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
  )
}

export default NavLogo
