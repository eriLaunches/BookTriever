import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {fetchBooks} from '../../store/books.js'
import history from '../../history'
import {setStatus} from '../../store/fetchStatus'

class SearchResults extends React.Component {
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
    this.props.onSetStatus(true)
    await this.props.onFetchBooks(this.state.searchValue)
    this.props.onSetStatus(false)
    if (history.location !== '/search') {
      history.push('/search')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="nav-search-container">
          <label htmlFor="nav-searchbar" />
          <input
            id="nav-searchbar"
            name="searchValue"
            type="text"
            placeholder="Search for more books..."
            onChange={this.handleChange}
          />
          <SearchIcon id="nav-search-icon" type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  onFetchBooks: input => dispatch(fetchBooks(input)),
  onSetStatus: status => dispatch(setStatus(status))
})

const ConnectSearchResults = connect(mapStateToProps, mapDispatchToProps)(
  SearchResults
)

export default ConnectSearchResults
