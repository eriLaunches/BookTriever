import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/homePage/HomePage'
import ResultsContainer from './components/searchResultsView/ResultsContainer'
import NavBarContainer from './components/navBar/NavBarContainer'
import Test from './components/Test'
import SingleView from './components/bookDetailsView/SingleView'

const Routes = props => {
  return (
    <div>
      <NavBarContainer {...props} />
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/search" component={ResultsContainer} />
        <Route path="/test" component={Test} />
        <Route path="/book" component={SingleView} />
        {/* Displays our Home component as a fallback */}
        <Route component={HomePage} />
      </Switch>
    </div>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
