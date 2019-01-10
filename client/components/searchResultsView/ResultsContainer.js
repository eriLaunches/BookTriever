import React from 'react'
import {connect} from 'react-redux'
import SearchResults from './SearchResults'
import SortDropDown from './SortDropDown'
import {handleFilter, handleSort} from '../../utilities/sortFilterHelper'
import {resultStyles} from './material-styles'
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import FilterMenu from './FilterMenu'

//This component displays book results base on user search input

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBooks: [],
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
    localStorage.setItem('books', JSON.stringify(this.state.currentBooks))
  }

  componentDidUpdate(prevProps, prevState) {
    //Set state if there are changes to the redux store when user performs a new search in navbar
    if (prevProps.books !== prevState.allBooks) {
      this.setState({
        allBooks: this.props.books,
        currentBooks: this.props.books
      })
    }
  }

  //  Everytime user selects from a sort or filter, this method will be invoked, which in turns triggers handle filter and handle sort helper functions. This allows for sorting on top of a filtered population.
  async handleSortFilter(event, selection) {
    await this.setState({[event]: selection})
    let {sortBy, filterBy} = this.state
    let books = this.props.books
    let filteredBooks = await handleFilter(filterBy, books)
    let sortedFilteredBooks = await handleSort(sortBy, filteredBooks)
    this.setState({currentBooks: sortedFilteredBooks})
  }

  render() {
    const {classes} = this.props //for Material UI styling
    const {currentBooks} = this.state
    const handleSortFilter = this.handleSortFilter

    if (this.props.fetchStatus)
      //Conditional use to show loading spinner if fetching data is still in progress
      return (
        <div id="loader-container">
          <div className="loader" />
        </div>
      )
    else
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
  }
}

const mapStateToProps = state => ({
  books: state.books,
  fetchStatus: state.fetchStatus
})

const ConnectResultsContainer = connect(mapStateToProps)(ResultsContainer)

//withStyles use to attach Material UI styling to component
export default withStyles(resultStyles)(ConnectResultsContainer)
