import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import SwitchThemeIcon from '@material-ui/icons/Highlight'
import IconButton from '@material-ui/core/IconButton'

const NavThemeSwitch = props => {
  return (
    <Tooltip title="Switch between light and dark mode" placement="right">
      <IconButton color="inherit" onClick={props.switchThemeColor}>
        <SwitchThemeIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}

export default NavThemeSwitch
