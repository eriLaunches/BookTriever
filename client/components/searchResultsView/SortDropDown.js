import React from 'react'
import {sortStyles} from './material-styles'
import {withStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Tooltip from '@material-ui/core/Tooltip'
import MenuItem from '@material-ui/core/MenuItem'

class NativeSelects extends React.Component {
  state = {
    sortBy: ''
  }

  handleChange(event) {
    this.props.handleSortFilter('sortBy', event.target.value)
    this.setState({sortBy: event.target.value})
  }

  render() {
    const {classes} = this.props //for Material Ui styling
    return (
      <div className={classes.root}>
        <Tooltip title="Select from dropdown to sort" placement="right">
          <FormControl className={classes.formControl}>
            <InputLabel shrink>Sort By</InputLabel>
            <Select
              value={this.state.sortBy}
              onChange={e => this.handleChange(e)}
            >
              {/* Potential to store options in a separate object and map through for scalability */}
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="most editions">Most Editions</MenuItem>
              <MenuItem value="first published">First Published</MenuItem>
              <MenuItem value="most recent">Most Recent</MenuItem>
            </Select>
          </FormControl>
        </Tooltip>
      </div>
    )
  }
}

export default withStyles(sortStyles)(NativeSelects)
