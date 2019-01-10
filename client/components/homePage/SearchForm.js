import React from 'react'
import {connect} from 'react-redux'
import {fetchBooks} from '../../store/books.js'
import {setStatus} from '../../store/fetchStatus'
import history from '../../history'
import Alert from './Alert'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      alert: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    //If user doesn't put a search value, trigger alert message
    if (this.state.searchValue === '') {
      this.setState({alert: true})
    } else {
      //Pass request to redux thunk and set the fetchData state accordingly to show loading spinner while data is being fetched
      this.props.onSetStatus(true)
      await this.props.onFetchBooks(this.state.searchValue)
      this.props.onSetStatus(false)

      history.push('/search')
    }
  }

  handleAlert() {
    //Updates alert to false once user closes notification. Handles form validation for when user submits a blank search value
    this.setState({alert: false})
  }

  render() {
    let {alert} = this.state
    return (
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
        {alert ? (
          <Alert alert={this.state.alert} handleAlert={this.handleAlert} />
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
  fetchStatus: state.fetchStatus
})

const mapDispatchToProps = dispatch => ({
  onFetchBooks: input => dispatch(fetchBooks(input)),
  onSetStatus: status => dispatch(setStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
