import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {fetchBooks} from '../../store/books.js'
import SearchResults from '../searchResultsView/SearchResults'
import {handleFilter, handleSort} from '../../utils'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

//This component serves as the parent container that houses all the sub-components of the web application

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      currentBooks: [], //stores current state of books including after user filters and/or sorts population
      hasSearched: false,
      sortBy: 'relevance',
      filterBy: 'everything'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSortFilter = this.handleSortFilter.bind(this)
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
      //set initial state of books to be the entire book population fetched from API
      currentBooks: [...this.props.books],
      hasSearched: true
    })
    this.props.history.push('/search')
  }

  /*In order for the sort and filter feature to work simultaneously (i.e. sort only ebooks), everytime a user selects a sort or a filter, both sort and filter state selections will occur using the handleSort and handleFilter methods.*/
  async handleSortFilter(event) {
    await this.setState({[event.target.name]: event.target.value})
    let {sortBy, filterBy} = this.state
    let books = this.props.books
    let filteredBooks = await handleFilter(filterBy, books)
    let sortedFilteredBooks = await handleSort(sortBy, filteredBooks)
    this.setState({currentBooks: sortedFilteredBooks})
  }

  render() {
    const {currentBooks, hasSearched} = this.state
    console.log('PROPS IN HOMEPAGE :', this.props)
    return (
      <div>
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
              <SearchResults books={currentBooks} />
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

// const mapDispatchToProps = dispatch => ({
//   onFetchBooks: input => dispatch(fetchBooks(input))
// })

const ConnectResultsContainer = connect(mapStateToProps)(ResultsContainer)

export default ConnectResultsContainer
