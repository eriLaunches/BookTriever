import React from 'react'
import {connect} from 'react-redux'
import {fetchBook} from '../../store/singleBook.js'
import Description from './Description'
import Header from './Header'
import {identifierHelper} from '../../utilities/identifierHelper'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styles from './material-styles.js'
import BookCover from './BookCover.js'

//This component displays the book details view

class BookContainer extends React.Component {
  componentDidMount() {
    /* Passing selected book object to helper function to identify id (isbn,oclc,lccn,olid) as input to request book description from Open Libr Books API. Making this add'l GET request because the response object from Open Libr Search API does not contain a book description property. */
    let identifier = identifierHelper(this.props.location.state.book)
    if (identifier) {
      this.props.onFetchBook(identifier)
    }
  }

  render() {
    //book prop contains the description from Book API
    //selectedBook prop contains add'l book details from Search API
    const {classes, book} = this.props
    const selectedBook = this.props.location.state.book

    if (this.props.fetchStatus)
      //Conditional use to show loading spinner if fetching data is still in progress
      return (
        <div id="loader-container">
          <div className="loader" />
        </div>
      )
    else
      return (
        <div className={classes.root}>
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={9}>
                <div className={classes.mainFeaturedPostContent}>
                  <Header selectedBook={selectedBook} />
                  <Description selectedBook={selectedBook} book={book} />
                </div>
              </Grid>
            </Grid>
            <BookCover selectedBook={selectedBook} />
          </Paper>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  books: state.books,
  book: state.book,
  fetchStatus: state.fetchStatus
})

const mapDispatchToProps = dispatch => ({
  onFetchBook: id => dispatch(fetchBook(id))
})

const ConnectBookContainer = connect(mapStateToProps, mapDispatchToProps)(
  BookContainer
)

//withStyles use to attach Material UI styling to component
export default withStyles(styles)(ConnectBookContainer)
