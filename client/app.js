import React from 'react'
import {Navbar} from './components'
import NavBarContainer from './components/navBar/NavBarContainer'
import Routes from './routes'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import history from './history'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      themeColor: 'light'
    }
    this.switchThemeColor = this.switchThemeColor.bind(this)
  }

  //Adding Material UI theme
  switchThemeColor() {
    this.state.themeColor === 'light'
      ? this.setState({themeColor: 'dark'})
      : this.setState({themeColor: 'light'})
  }

  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true
      },
      palette: {
        type: this.state.themeColor,
        primary: {
          light: '#ffffff',
          main: '#eceff1',
          dark: '#babdbe',
          contrastText: '#000000'
        },
        secondary: {
          light: '#5d9dff',
          main: '#006fcf',
          dark: '#00459d',
          contrastText: '#ffffff'
        }
      }
    })
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {/* <Navbar /> */}
          {/* <NavBarContainer /> */}
          <Routes switchThemeColor={this.switchThemeColor} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
