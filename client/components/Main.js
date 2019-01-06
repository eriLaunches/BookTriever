import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {fetchBooks} from '../store/books.js'
import SearchResults from './SearchResults'
import SortResults from './SortResults'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      cleanBooks: [], //allbooks on our redux store that hasn't been sorted/filtered
      books: [], //stores current state of books including user filter & sort
      hasSearched: false,
      sortBy: 'relevance',
      filterBy: 'everything'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSortFilter = this.handleSortFilter.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleChange(event) {
    //set state with the user search input
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.onFetchBooks(this.state.inputName)
    this.setState({
      cleanBooks: this.props.books,
      books: [...this.props.books],
      hasSearched: true
    })
  }

  async handleSortFilter(event) {
    await this.setState({[event.target.name]: event.target.value})
    let currentBooks = await this.handleSort()
    currentBooks = await this.handleFilter(currentBooks)
    this.setState({books: currentBooks})
  }

  handleSort() {
    let selection = this.state.sortBy
    const allBooks = this.state.cleanBooks //all books on our redux store that hasn't been altered. //Issue with cleanBooks getting altered after filtering for more than 1 round
    let currentBooks = this.state.books //pass in current state of books for sorting
    console.log('Handlesort state', this.state)
    console.log('Handlesort props', this.props.books)

    switch (selection) {
      case 'relevance':
        currentBooks = allBooks //not the most efficient way to get relevance
        break
      case 'mostEditions':
        currentBooks.sort((a, b) => b.edition_count - a.edition_count)
        break
      case 'firstPublished':
        currentBooks.sort((a, b) => a.first_publish_year - b.first_publish_year)
        break
      case 'mostRecent':
        currentBooks.sort((a, b) => b.first_publish_year - a.first_publish_year)
        break
      default:
        break
    }
    console.log('later Handlesort proprs', this.props)
    console.log('later Handlesort state', this.state)

    return currentBooks
  }

  handleFilter(currentBooks) {
    const allBooks = this.props.books
    let selection = this.state.filterBy
    switch (selection) {
      case 'everything':
        //currentBooks = allBooks
        break
      case 'ebooks':
        currentBooks = currentBooks.filter(book => book.ebook_count_i > 0)
        break
      default:
        break
    }

    return currentBooks
  }

  render() {
    const {books, hasSearched} = this.state
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="inputName">
                <small>Search for a book</small>
              </label>
              <input
                name="inputName"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        {hasSearched ? (
          <div>
            <div>
              <label>Sort by</label>
              <select name="sortBy" onChange={this.handleSortFilter}>
                <option value="relevance">Relevance</option>
                <option value="mostEditions"> Most Editions </option>
                <option value="firstPublished"> First Published </option>
                <option value="mostRecent"> Most Recent </option>
              </select>
              <label>Filter by</label>
              <select name="filterBy" onChange={this.handleSortFilter}>
                <option value="everything">Everything</option>
                <option value="ebooks"> Ebooks </option>
              </select>
            </div>
            <div>
              <SearchResults books={books} />
            </div>
          </div>
        ) : null}
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

const ConnectMain = connect(mapStateToProps, mapDispatchToProps)(Main)
export default ConnectMain
