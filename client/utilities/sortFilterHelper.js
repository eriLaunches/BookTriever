import ReactDOM from 'react-dom'

// Helper function to handle filtering
export const handleFilter = (filterBy, books) => {
  let filteredBooks = books
  switch (filterBy) {
    case 'everything':
      filteredBooks = books
      break
    case 'ebooks':
      filteredBooks = books.filter(book => book.ebook_count_i > 0)
      break
    default:
      break
  }
  return filteredBooks
}

// Helper function to handle sorting
export const handleSort = (sortBy, filteredBooks) => {
  //making a copy  of filteredBooks to prevent mutation
  let sortFilteredBooks = filteredBooks.slice()
  switch (sortBy) {
    case 'relevance':
      break
    case 'most editions':
      sortFilteredBooks.sort((a, b) => b.edition_count - a.edition_count)
      break
    case 'first published':
      sortFilteredBooks.sort(
        (a, b) => a.first_publish_year - b.first_publish_year
      )
      break
    case 'most recent':
      sortFilteredBooks.sort(
        (a, b) => b.first_publish_year - a.first_publish_year
      )
      break
    default:
      break
  }
  return sortFilteredBooks
}
