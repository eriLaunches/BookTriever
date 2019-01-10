import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import imagesInventory from '../../utilities/images'
import styles from './material-styles.js'
import {withStyles} from '@material-ui/core/styles'

const BookCover = props => {
  const {selectedBook, classes} = props
  return (
    <div>
      <ButtonBase className={classes.image} disabled>
        <img
          className={classes.image}
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
    </div>
  )
}

export default withStyles(styles)(BookCover)
