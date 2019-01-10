import React from 'react'
import {connect} from 'react-redux'
import {fetchBook} from '../../store/singleBook.js'
import Description from './Description'
import Header from './Header'
import {identifierHelper} from '../../utilities/identifierHelper'

import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import imagesInventory from '../../utilities/images'
import styles from './material-styles.js'

//This component displays the book details view

class SingleView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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

    return (
      <div className={classes.root}>
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={9}>
              <div className={classes.mainFeaturedPostContent}>
                {/* <Typography component="h1" variant="h3" gutterBottom>
                  {selectedBook.title}
                </Typography>
                <Typography variant="h5" paragraph color="textSecondary">
                  By{' '}
                  {selectedBook.author_name ? (
                    <i>{selectedBook.author_name}</i>
                  ) : (
                    <i>Unknown Author</i>
                  )}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {selectedBook.edition_count}{' '}
                  {selectedBook.edition_count < 2 ? 'edition' : 'editions'}
                </Typography> */}
                <Header selectedBook={selectedBook} />
                <Description selectedBook={selectedBook} book={book} />
              </div>
            </Grid>
          </Grid>
          <ButtonBase className={classes.image} disabled>
            <img
              className={classes.img}
              alt="complex"
              src={
                selectedBook.cover_i
                  ? `http://covers.openlibrary.org/b/id/${
                      selectedBook.cover_i
                    }-L.jpg`
                  : imagesInventory.noCoverImg
              }
            />
          </ButtonBase>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
  book: state.book
})

const mapDispatchToProps = dispatch => ({
  onFetchBook: id => dispatch(fetchBook(id))
})

const ConnectSingleView = connect(mapStateToProps, mapDispatchToProps)(
  SingleView
)
//Used to attach Material UI styles
export default withStyles(styles)(ConnectSingleView)
