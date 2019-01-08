import React from 'react'

import {Navbar} from './components'
import Main from './components/homePage/HomePage'
import Routes from './routes'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
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

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Routes />
      </MuiThemeProvider>
    </div>
  )
}
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       switchType: 'light'
//     }
//     this.handleSwitch = this.handleSwitch.bind(this)
//   }

//   handleSwitch() {
//     this.state.switchType === 'light'
//       ? this.setState({switchType: 'dark'})
//       : this.setState({switchType: 'light'})
//   }
//   render() {
//     const theme = createMuiTheme({
//       typography: {
//         useNextVariants: true
//       },
//       palette: {
//         type: this.state.switchType,
//         primary: {
//           light: '#7cf5ff',
//           main: '#3bc2ea',
//           dark: '#0091b8',
//           contrastText: '#000'
//         },
//         secondary: {
//           light: '#59a9cf',
//           main: '#1b7a9e',
//           dark: '#004e6f',
//           contrastText: '#ff'
//         }
//       }
//     })
//     return (
//       <div>
//         <MuiThemeProvider theme={theme}>
//           {/* <Navbar handleSwitch={this.handleSwitch} /> */}
//           <Routes />
//         </MuiThemeProvider>
//       </div>
//     )
//   }
// }

export default App
