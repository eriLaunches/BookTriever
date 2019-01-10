import React from 'react'
import {filterStyles} from './material-styles'
import {withStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import EbooksIcon from '@material-ui/icons/Phonelink'
import BooksIcon from '@material-ui/icons/ViewColumn'
import Tooltip from '@material-ui/core/Tooltip'

class IconLabelTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes} = this.props //for Material UI styling

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

export default withStyles(filterStyles)(IconLabelTabs)
