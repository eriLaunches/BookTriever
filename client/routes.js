import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import HomeContainer from './components/homePage/HomeContainer'
import ResultsContainer from './components/searchResultsView/ResultsContainer'
import NavbarContainer from './components/navbar/NavContainer'
import BookContainer from './components/bookDetailsView/BookContainer'

const Routes = props => {
  return (
    <div>
      <NavbarContainer {...props} />
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomeContainer} />
        <Route path="/search" component={ResultsContainer} />
        <Route path="/book" component={BookContainer} />

        {/* Displays our Home component as a fallback */}
        <Route component={HomeContainer} />
      </Switch>
    </div>
  )
}

// `withRouter` wrapper ensures that updates are not blocked when the url changes
export default withRouter(Routes)
