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

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    // margin: theme.spacing.unit,
    marginLeft: 100,
    minWidth: 120
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2
  }
})

class SortByDropDown extends React.Component {
  state = {
    age: ''
  }

  componentDidMount() {
    this.setState({})
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {classes} = this.props

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">sort by</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{name: 'age', id: 'age-simple'}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}

SortByDropDown.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SortByDropDown)
