import React from 'react'
import {connect} from 'react-redux'
import HomeLogo from './HomeLogo'
import SearchForm from './SearchForm'

//This component displays the homepage view -- what the user first sees on the site. After the user inputs a search value, a GET request is sent to Open Libr Search API. Upon response, user will be navigated to the search results view.

const HomePage = props => {
  if (props.fetchStatus)
    //Conditional use to show loading spinner if fetching data is still in progress
    return (
      <div id="loader-container">
        <div className="loader" />
      </div>
    )
  else {
    return (
      <div className="home-container">
        <HomeLogo />
        <SearchForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetchStatus: state.fetchStatus
})

export default connect(mapStateToProps)(HomePage)
