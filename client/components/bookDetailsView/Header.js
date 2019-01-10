import React from 'react'
import Typography from '@material-ui/core/Typography'

const Header = props => {
  const {selectedBook} = props
  return (
    <div>
      <Typography component="h1" variant="h3" gutterBottom>
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
      </Typography>
    </div>
  )
}

export default Header
