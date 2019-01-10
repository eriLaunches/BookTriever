import React from 'react'
import {Link} from 'react-router-dom'
import imagesInventory from '../../utilities/images'
import {resultStyles} from './material-styles'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const SearchResults = props => {
  const books = props.books
  const {classes} = props //for Material UI styling

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
                <CardMedia
                  className={classes.cardMedia}
                  image={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${
                          book.cover_i
                        }-M.jpg`
                      : imagesInventory.noCoverImg
                  }
                  title="Book Cover"
                />
                <div>
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
    </div>
  ) : (
    <Typography>Sorry, no results matched your search.</Typography>
  )
}

export default withStyles(resultStyles)(SearchResults)
