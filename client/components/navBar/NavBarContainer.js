import {connect} from 'react-redux'
import React from 'react'
import SearchBar from './SearchBar.js'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SwitchThemeIcon from '@material-ui/icons/Highlight'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {fetchBooks} from '../../store/books.js'
import imagesInventory from '../../images'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.forceUpdate()
  }

  handleChange(event) {
    //set state for user search value
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.onFetchBooks(this.state.searchValue)
    this.props.history.push('/search')
  }

  render() {
    const {classes} = this.props //Use for targeting Material UI elements for styling
    if (this.props.location.pathname === '/') return ''
    else
      return (
        <div className={classes.root}>
          {/* change color of nav here with the color prop */}
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                <Tooltip title="Navigate to Home">
                  <Link to="/">
                    <img
                      onClick={() => this.props.history.push('/')}
                      id="nav-logo"
                      src={imagesInventory.logo}
                      alt="Website logo"
                    />
                  </Link>
                </Tooltip>
              </Typography>
              <SearchBar
                handleSubmit={this.handleChange}
                handleChange={this.handleChange}
              />

              <Tooltip title="Switch between light and dark mode">
                <IconButton color="inherit">
                  <SwitchThemeIcon
                    onClick={this.props.switchThemeColor}
                    fontSize="small"
                  />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  onFetchBooks: input => dispatch(fetchBooks(input))
})

const ConnectNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  NavBarContainer
)

export default withStyles(styles)(ConnectNavBarContainer)
