import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import EbooksIcon from '@material-ui/icons/Phonelink'
import BooksIcon from '@material-ui/icons/ViewColumn'

import {Typography} from '@material-ui/core'
import SortDropDown from './SortDropDown.js'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 86,
    marginLeft: 50
  }
}

class IconLabelTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes} = this.props

    return (
      <Tabs
        className={classes.root}
        value={this.state.value}
        onChange={this.handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab
          icon={<BooksIcon />}
          label="ALL BOOKS"
          onClick={() => this.props.handleSortFilter('filterBy', 'everything')}
        />
        <Tab
          icon={<EbooksIcon />}
          label="E-BOOKS"
          onClick={() => this.props.handleSortFilter('filterBy', 'ebooks')}
        />
        {/* <Tab icon={<PersonPinIcon />} label="Sort By" /> */}
      </Tabs>
    )
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IconLabelTabs)
