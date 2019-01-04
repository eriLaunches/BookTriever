import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'


const SingleView = (props) => {
  console.log('HIT SINGLE VIEW', props)
  const selectedBook = props.location.state.book
  return (
    <div>
      <img src={`http://covers.openlibrary.org/b/id/${selectedBook.cover_i}-S.jpg`} alt='book cover'/>
     <p><strong>{selectedBook.title_suggest}</strong></p>
     <p>by {selectedBook.author_name ? selectedBook.author_name : <i>Unknown Author</i> }</p>
     <p>{selectedBook.edition_count} {selectedBook.edition_count < 2 ?  'edition' : 'editions'} </p>
    </div>
  )
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
})

export default SingleView


