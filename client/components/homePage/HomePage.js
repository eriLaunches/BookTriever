import React from 'react'
import {connect} from 'react-redux'
import {fetchBooks} from '../../store/books.js'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import history from '../../history'
import imagesInventory from '../../utilities/images'

//This component serves as the homepage view -- what the user first sees when entering the site. After the user inputs a search value, a get request will be send to the Open Library API. Upon receipt of data and update to the redux store, user will be navigated to the search results view.
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      fetchData: false
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
    //Pass request to redux thunk  and set the fetchData state accordingly for loading spinner
    this.setState({fetchData: true})
    await this.props.onFetchBooks(this.state.searchValue)
    await this.setState({fetchData: false})
    history.push('/search')
  }

  render() {
    if (this.state.fetchData)
      return (
        <div id="loader-container">
          <div className="loader" />
        </div>
      )
    else {
      return (
        <div className="home-container">
          <div id="home-logo-container">
            <img id="home-logo" src={imagesInventory.logo} alt="Website logo" />
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
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  onFetchBooks: input => dispatch(fetchBooks(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
