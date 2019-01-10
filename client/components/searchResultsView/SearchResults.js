import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import imagesInventory from '../../utilities/images'
import styles from './styleSearchResults'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import ButtonBase from '@material-ui/core/ButtonBase'

//This component returns a list of all book results matching the user's search criteria by book title

const SearchResults = props => {
  const books = props.books
  const {classes} = props //Style with Material UI
  return books.length ? (
    <div>
      <Typography> {books.length} results found </Typography>
      <div />
      <Grid container className={classes.resultsContainer}>
        {books.map(book => (
          <Grid
            item
            key={book.key}
            xs="auto"
            md="auto"
            className={classes.grid}
          >
            {' '}
            <Link
              to={{pathname: '/book', state: {book}}}
              style={{textDecoration: 'none'}}
            >
              <Card className={classes.card}>
                {/* Passing in cover id to retreive image cover from API url */}
                <CardMedia
                  className={classes.cardMedia}
                  image={
                    book.cover_i
                      ? `http://covers.openlibrary.org/b/id/${
                          book.cover_i
                        }-M.jpg`
                      : imagesInventory.noCoverImg
                  }
                  title="Book Cover"
                />
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {book.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      by{' '}
                      {book.author_name ? (
                        book.author_name
                      ) : (
                        <i>Unknown Author</i>
                      )}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {book.edition_count}
                      {book.edition_count < 2 ? ' edition' : ' editions'}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      First published in {book.first_publish_year}{' '}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div> //       {/* book object contains cover id which can be passed into URL to retrieve the image related to the book */} //     <div key={book.key}> //   {books.map(book => ( //   <div>{books.length} results found</div> // <div>
  ) : (
    //       <img
    //         src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
    //         alt="book cover"
    //       />
    //       <Link to={{pathname: '/singleview', state: {book}}}>
    //         <p>
    //           {/* using title_suggest vs title becauseif we want to search not by title maybe there could be an issue? */}
    //           <strong>{book.title}</strong>
    //         </p>
    //       </Link>
    //       <p>
    //         by {book.author_name ? book.author_name : <i>Unknown Author</i>}
    //       </p>
    //       <p>
    //         {book.edition_count}{' '}
    //         {book.edition_count < 2 ? 'edition' : 'editions'} - first published
    //         in {book.first_publish_year}{' '}
    //       </p>
    //     </div>
    //   ))}
    // </div>
    <Typography>Sorry, no results matched your search.</Typography>
  )
}

export default withStyles(styles)(SearchResults)
