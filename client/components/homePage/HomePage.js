import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchBooks} from '../../store/books.js'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import history from '../../history'

//This component serves as the homepage view -- what the user first sees when entering the site

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    history.push('/search')
  }

  render() {
    return (
      <div className="home-container">
        <div id="home-logo-container">
          <img
            id="home-logo"
            src="https://i.ibb.co/bH4S9j3/booktrieverlogo2.png"
            alt="Website Logo"
          />
        </div>
        <div>
          <form onSubmit={this.handleSubmit} className="search-container">
            <label htmlFor="home-searchbar" />
            <input
              id="home-searchbar"
              name="searchValue"
              type="text"
              placeholder="Please enter a book title..."
              onChange={this.handleChange}
            />
            <Button
              id="home-search-btn"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Search
              <SearchIcon id="home-search-icon" />
            </Button>
          </form>
        </div>
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

const ConnectHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default ConnectHomePage
