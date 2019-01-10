import React from 'react'
import {sortStyles} from './material-styles'
import {withStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Tooltip from '@material-ui/core/Tooltip'
import purple from '@material-ui/core/colors/purple'

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
        <Tooltip title="Select from dropdown to sort">
          <FormControl className={classes.formControl}>
            <InputLabel shrink>Sort By</InputLabel>
            <NativeSelect
              value={this.state.sortBy}
              onChange={e => this.handleChange(e)}
            >
              {/* Potential to store options in a separate object and map through for scalability */}
              <option value="relevance">Relevance</option>
              <option value="most editions">Most Editions</option>
              <option value="first published">First Published</option>
              <option value="most recent">Most Recent</option>
            </NativeSelect>
          </FormControl>
        </Tooltip>
      </div>
    )
  }
}

export default withStyles(sortStyles)(NativeSelects)
