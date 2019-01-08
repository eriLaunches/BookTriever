import {connect} from 'react-redux'

//Material UI Styling
// import classNames from 'classnames'
// import {withStyles} from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import InvertColorsIcon from '@material-ui/icons/InvertColors'
// import Tooltip from '@material-ui/core/Tooltip'
// import Typography from '@material-ui/core/Typography'

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
                      src="https://i.ibb.co/bH4S9j3/booktrieverlogo2.png"
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

// class NavBarContainer extends React.ComponentNavBarContainer(props) {
//   const {classes} = props

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed" color="default">
//         <Toolbar>
//           <Typography variant="h6" color="inherit">
//             <img
//               id="nav-logo"
//               src="https://i.ibb.co/bH4S9j3/booktrieverlogo2.png"
//             />
//           </Typography>
//           <SearchBar />
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

// NavBarContainer.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(NavBarContainer)

// let colors = [
//   '#8bc34a',
//   '#cddc39',
//   '#009688',
//   '#BDE4A7',
//   '#D4AFCD',
//   '#5C80BC',
//   '#A7ACD9',
//   '#82AEB1',
//   '#E7E08B',
//   '#7E78D2'
// ]

// let randomColor = colors[Math.floor(Math.random() * colors.length)]

// // const logoOne = 'https://i.ibb.co/mS7jzXv/logo-1.png'

// const drawerWidth = 240

// const styles = theme => ({
//   root: {
//     display: 'flex'
//   },
//   appBar: {
//     // zIndex: theme.zIndex.drawer + 1,
//     // transition: theme.transitions.create(['width', 'margin'], {
//     //   easing: theme.transitions.easing.sharp,
//     //   duration: theme.transitions.duration.leavingScreen
//     // })
//   },
//   appBarShift: {
//     // marginLeft: drawerWidth,
//     // width: `calc(100% - ${drawerWidth}px)`,
//     // transition: theme.transitions.create(['width', 'margin'], {
//     //   easing: theme.transitions.easing.sharp,
//     //   duration: theme.transitions.duration.enteringScreen
//     // })
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36
//   },
//   menuButtonHidden: {
//     display: 'none'
//   },
//   title: {
//     flexGrow: 1
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     height: '100vh',
//     overflow: 'auto'
//   },
//   chartContainer: {
//     marginLeft: -22
//   },
//   tableContainer: {
//     height: 320
//   },
//   h5: {
//     marginBottom: theme.spacing.unit * 2
//   }
// })

// class NavBarContainer extends React.Component {
//   render() {
//     const {classes, user} = this.props
//     return (
//       <div className={classes.root}>
//         <AppBar position="fixed" className={classNames(classes.appBar)}>
//           <Toolbar className={classes.toolbar}>
//             <div className="logo-home">
//               <img
//                 id="nav-logo"
//                 src="https://i.ibb.co/bH4S9j3/booktrieverlogo2.png"
//               />
//             </div>
//             <div className="right-side">
//               <Tooltip title="Switch between light/dark mode">
//                 <IconButton color="inherit">
//                   <InvertColorsIcon
//                     onClick={this.props.handleSwitch}
//                     fontSize="small"
//                   />
//                 </IconButton>
//               </Tooltip>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     )
//   }
// }

// NavBarContainer.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   books: state.books
// })

// const ConnectNavContainer = connect(mapStateToProps)(NavBarContainer)
// export default withStyles(styles)(ConnectNavContainer)
