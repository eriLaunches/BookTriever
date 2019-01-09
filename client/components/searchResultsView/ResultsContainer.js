import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {fetchBooks} from '../../store/books.js'
import SearchResults from './SearchResults'
import SortDropDown from './SortDropDown'
import {handleFilter, handleSort} from '../../utilities/sortFilterHelper'
import styles from './styleSearchResults'
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FilterMenu from './FilterMenu'

//This component serves as the parent container for the search results view

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBooks: [], //stores the current population of books
      currentBooks: [], // current state of books including after user filters and/or sorts population
      sortBy: 'relevance',
      filterBy: 'everything'
    }
    this.handleSortFilter = this.handleSortFilter.bind(this)
  }

  componentDidMount() {
    //set initial state of books to be the entire book population fetched from API
    this.setState({
      allBooks: this.props.books,
      currentBooks: this.props.books
    })
  }

  //Update state to trigger if there are changes to the redux store when user performs a new search in navbar
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.books !== prevState.allBooks) {
      this.setState({
        allBooks: this.props.books,
        currentBooks: this.props.books
      })
    }
  }
  //  Everytime selects from a sort or filter, this method will be invoked, which in turns triggers handle filter and handle sort helper functions. This allows for sorting on top of a filtered population.
  async handleSortFilter(event, selection) {
    await this.setState({[event]: selection})
    let {sortBy, filterBy} = this.state
    let books = this.props.books
    let filteredBooks = await handleFilter(filterBy, books)
    let sortedFilteredBooks = await handleSort(sortBy, filteredBooks)
    this.setState({currentBooks: sortedFilteredBooks})
  }

  render() {
    const {classes} = this.props //Use to targeting Material UI elements for styling
    const {currentBooks} = this.state
    const handleSortFilter = this.handleSortFilter

    return (
      <div>
        <CssBaseline />
        <div id="filter-sort-menu">
          <FilterMenu handleSortFilter={handleSortFilter} />
          <SortDropDown handleSortFilter={handleSortFilter} />
        </div>
        <div className={classes.layout}>
          <SearchResults books={currentBooks} />
        </div>
      </div>
    )
    // <div>
    //   <div>
    //     <div>
    //       <label>Sort by</label>
    //       <select name="sortBy" onChange={this.handleSortFilter}>
    //         <option value="relevance">Relevance</option>
    //         <option value="mostEditions"> Most Editions </option>
    //         <option value="firstPublished"> First Published </option>
    //         <option value="mostRecent"> Most Recent </option>
    //       </select>
    //       <label>Filter by</label>
    //       <select name="filterBy" onChange={this.handleSortFilter}>
    //         <option value="everything">Everything</option>
    //         <option value="ebooks"> Ebooks </option>
    //       </select>
    //     </div>
    //     <div>
    //       <SearchResults books={currentBooks} />
    //     </div>
    //   </div>
    // </div>
  }
}

const mapStateToProps = state => ({
  books: state.books
})

// const mapDispatchToProps = dispatch => ({
//   onFetchBooks: input => dispatch(fetchBooks(input))
// })

const ConnectResultsContainer = connect(mapStateToProps)(ResultsContainer)

export default withStyles(styles)(ConnectResultsContainer)
