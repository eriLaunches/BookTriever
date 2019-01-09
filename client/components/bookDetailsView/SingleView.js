import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchBook} from '../../store/singleBook.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

//This component renders the detailed view for a SINGLE book selected by the user

// class SingleView extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   componentDidMount() {
//     //searching for single book by ISBN, the first one in the array. Perhaps in future, search by other ones too
//     const isbn = this.props.location.state.book.isbn[0]
//     this.props.onFetchBook(isbn)
//   }

//   render() {
//     const selectedBook = this.props.location.state.book
//     console.log('SingleView props', selectedBook)
//     // console.log('singleView book', selectedBook)
//     //need to refactor this....not sure why description isn't picked up initially
//     let description = !this.props.book.details
//       ? 'No description currently exists for this book'
//       : this.props.book.details.description

//     if (description === undefined)
//       description = 'No description currently exists for this book'
//     return (
//       <div>
//         <img
//           src={`http://covers.openlibrary.org/b/id/${
//             selectedBook.cover_i
//           }-L.jpg`}
//           alt="book cover"
//         />
//         <p>
//           <strong>{selectedBook.title}</strong>
//         </p>
//         <p>
//           by{' '}
//           {selectedBook.author_name ? (
//             selectedBook.author_name
//           ) : (
//             <i>Unknown Author</i>
//           )}
//         </p>
//         <p>
//           {selectedBook.edition_count}{' '}
//           {selectedBook.edition_count < 2 ? 'edition' : 'editions'}{' '}
//         </p>
//         <p>Description: {description}</p>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   books: state.books,
//   book: state.book
// })

// const mapDispatchToProps = dispatch => ({
//   onFetchBook: input => dispatch(fetchBook(input))
// })

// const ConnectSingleView = connect(mapStateToProps, mapDispatchToProps)(
//   SingleView
// )
// export default ConnectSingleView

import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import {FormHelperText} from '@material-ui/core'
import imagesInventory from '../../utilities/images'

const styles = theme => ({
  mainFeaturedPost: {
    display: 'flex',
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  image: {
    margin: 'auto',
    // display: 'block',
    marginRight: theme.spacing.unit * 10,
    paddingTop: 50,
    paddingBottom: 50
    // height: 300
    // maxWidth: '100%',
    // maxHeight: '100%'
  }
})

class SingleView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    //searching for single book by ISBN, the first one in the array. Perhaps in future, search by other ones too
    const isbn = this.props.location.state.book.isbn[0]
    this.props.onFetchBook(isbn)
  }

  render() {
    const {classes} = this.props

    const selectedBook = this.props.location.state.book
    console.log('SingleView props', selectedBook)
    // console.log('singleView book', selectedBook)
    //need to refactor this....not sure why description isn't picked up initially
    let description = !this.props.book.details
      ? 'No description currently exists for this book'
      : this.props.book.details.description

    if (description === undefined)
      description = 'No description currently exists for this book'
    return (
      <div className={classes.root}>
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" gutterBottom>
                  {selectedBook.title}
                </Typography>

                <Typography variant="h5" paragraph>
                  By{' '}
                  {selectedBook.author_name ? (
                    selectedBook.author_name
                  ) : (
                    <i>Unknown Author</i>
                  )}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {selectedBook.edition_count}{' '}
                  {selectedBook.edition_count < 2 ? 'edition' : 'editions'}
                </Typography>
              </div>
            </Grid>
          </Grid>
          <ButtonBase className={classes.image}>
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
  onFetchBook: input => dispatch(fetchBook(input))
})

const ConnectSingleView = connect(mapStateToProps, mapDispatchToProps)(
  SingleView
)
export default withStyles(styles)(ConnectSingleView)
