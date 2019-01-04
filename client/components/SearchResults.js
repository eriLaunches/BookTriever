import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'


const SearchResults = (props) => {
  const books = props.books
  let keyId = 0
  console.log(books)
  return (
    <div>
      {
        books.map(book =>
          <div key={book.key}>
            {/* book object contains cover id which can be passed into URL to retrieve the image related to the book */}
            <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} />
            <p><strong>{book.title_suggest}</strong></p>
            <p>by {book.author_name ? book.author_name : <i>Unknown Author</i> }</p>
            <p>{book.edition_count} {book.edition_count < 2 ?  'edition' : 'editions'} - first published in {book.first_publish_year} </p>
          </div>
        )
      }
    </div>
  )
}

// const mapStateToProps = state => ({
//   books: state.books
// })

// const mapDispatchToProps = dispatch => ({
// })

export default SearchResults


