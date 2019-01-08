import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {fetchBooks} from '../../store/books.js'
import SearchResults from './SearchResults'
import {handleFilter, handleSort} from '../../utils'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

//This component serves as the parent container for the search results view

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBooks: [], //stores current state of books including after user filters and/or sorts population
      sortBy: 'relevance',
      filterBy: 'everything'
    }
    this.handleSortFilter = this.handleSortFilter.bind(this)
  }

  componentDidMount() {
    //set initial state of books to be the entire book population fetched from API
    this.setState({currentBooks: [...this.props.books]})
  }

  //  Everytime selects from a sort or filter, this method will be invoked, which in turns triggers handle filter and handle sort. This allows for sorting on a filtered population.
  async handleSortFilter(event) {
    await this.setState({[event.target.name]: event.target.value})
    let {sortBy, filterBy} = this.state
    let books = this.props.books
    let filteredBooks = await handleFilter(filterBy, books)
    let sortedFilteredBooks = await handleSort(sortBy, filteredBooks)
    this.setState({currentBooks: sortedFilteredBooks})
  }

  render() {
    const {currentBooks} = this.state
    console.log('PROP BOOKS in RESULTS CONTAINER', this.props)
    return (
      <div>
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
            <SearchResults books={currentBooks} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

// const mapDispatchToProps = dispatch => ({
//   onFetchBooks: input => dispatch(fetchBooks(input))
// })

const ConnectResultsContainer = connect(mapStateToProps)(ResultsContainer)

export default ConnectResultsContainer
