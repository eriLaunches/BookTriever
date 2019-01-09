import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    marginTop: 96,
    marginLeft: theme.spacing.unit * 20
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})

class NativeSelects extends React.Component {
  state = {
    sortBy: ''
  }

  handleChange(event) {
    this.props.handleSortFilter('sortBy', event.target.value)
    this.setState({sortBy: event.target.value})
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Tooltip title="Click to sort by options">
          <FormControl className={classes.formControl}>
            <InputLabel shrink>Sort By</InputLabel>
            <NativeSelect
              value={this.state.sortBy}
              onChange={e => this.handleChange(e)}
            >
              {/* Potential to store all these sort by options in a separate object and map through */}
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

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NativeSelects)
