import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//This component returns a list of all book results matching the user's search criteria by book title

const SearchResults = props => {
  const books = props.books
  console.log('BOOKS in Search Results', books)
  return <div>Hi you're on Search Results</div>
  // return books.length ? (
  //   <div>
  //     <div>{books.length} results found</div>
  //     {books.map(book => (
  //       <div key={book.key}>
  //         {/* book object contains cover id which can be passed into URL to retrieve the image related to the book */}
  //         <img
  //           src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
  //           alt="book cover"
  //         />
  //         <Link to={{pathname: '/singleview', state: {book}}}>
  //           <p>
  //             {/* using title_suggest vs title becauseif we want to search not by title maybe there could be an issue? */}
  //             <strong>{book.title}</strong>
  //           </p>
  //         </Link>
  //         <p>
  //           by {book.author_name ? book.author_name : <i>Unknown Author</i>}
  //         </p>
  //         <p>
  //           {book.edition_count}{' '}
  //           {book.edition_count < 2 ? 'edition' : 'editions'} - first published
  //           in {book.first_publish_year}{' '}
  //         </p>
  //       </div>
  //     ))}
  //   </div>
  // ) : (
  //   <div>Sorry, no results match your search. Please try again.</div>
  // )
}

// const mapStateToProps = state => ({
//   books: state.books
// })

// const mapDispatchToProps = dispatch => ({
// })

export default SearchResults
