import React from 'react'
import Routes from './routes'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

// Applied Material UI theme to App component so that theme can trickle down to other components

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      themeColor: 'light'
    }
    this.switchThemeColor = this.switchThemeColor.bind(this)
  }

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
          <Routes switchThemeColor={this.switchThemeColor} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
