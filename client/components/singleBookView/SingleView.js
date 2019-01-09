import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchBook} from '../../store/singleBook.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

//This component renders the detailed view for a SINGLE book selected by the user

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
    const selectedBook = this.props.location.state.book
    console.log('singleView book', selectedBook)
    //need to refactor this....not sure why description isn't picked up initially
    let description = !this.props.book.details
      ? 'No description currently exists for this book'
      : this.props.book.details.description

    if (description === undefined)
      description = 'No description currently exists for this book'
    return (
      <div>
        <img
          src={`http://covers.openlibrary.org/b/id/${
            selectedBook.cover_i
          }-L.jpg`}
          alt="book cover"
        />
        <p>
          <strong>{selectedBook.title}</strong>
        </p>
        <p>
          by{' '}
          {selectedBook.author_name ? (
            selectedBook.author_name
          ) : (
            <i>Unknown Author</i>
          )}
        </p>
        <p>
          {selectedBook.edition_count}{' '}
          {selectedBook.edition_count < 2 ? 'edition' : 'editions'}{' '}
        </p>
        {/* <p>Description: {description}</p> */}
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
export default ConnectSingleView
