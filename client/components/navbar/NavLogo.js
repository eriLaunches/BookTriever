import React from 'react'
import {Link} from 'react-router-dom'
import imagesInventory from '../../utilities/images'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import history from '../../history'

const NavLogo = () => {
  return (
    <Typography variant="h6" color="inherit">
      <Tooltip title="Navigate to Home" placement="right">
        <Link to="/">
          <img
            onClick={() => history.push('/')}
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
