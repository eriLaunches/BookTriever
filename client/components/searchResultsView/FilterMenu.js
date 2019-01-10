import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import EbooksIcon from '@material-ui/icons/Phonelink'
import BooksIcon from '@material-ui/icons/ViewColumn'
import Tooltip from '@material-ui/core/Tooltip'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 86,
    marginLeft: 70
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
        <Tooltip title="Click to view all books">
          <Tab
            icon={<BooksIcon />}
            label="ALL BOOKS"
            onClick={() =>
              this.props.handleSortFilter('filterBy', 'everything')
            }
          />
        </Tooltip>
        <Tooltip title="Click to view only e-books">
          <Tab
            icon={<EbooksIcon />}
            label="E-BOOKS"
            onClick={() => this.props.handleSortFilter('filterBy', 'ebooks')}
          />
        </Tooltip>
      </Tabs>
    )
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IconLabelTabs)
