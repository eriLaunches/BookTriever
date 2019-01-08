import ReactDOM from 'react-dom'

//This document stores all the helper functions used throughout the application

// helper function to handle filtering
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

// helper function to handle sorting
export const handleSort = (sortBy, filteredBooks) => {
  //making a copy  of filteredBooks to prevent mutation
  let sortFilteredBooks = filteredBooks.slice()
  switch (sortBy) {
    case 'relevance':
      break
    case 'mostEditions':
      sortFilteredBooks.sort((a, b) => b.edition_count - a.edition_count)
      break
    case 'firstPublished':
      sortFilteredBooks.sort(
        (a, b) => a.first_publish_year - b.first_publish_year
      )
      break
    case 'mostRecent':
      sortFilteredBooks.sort(
        (a, b) => b.first_publish_year - a.first_publish_year
      )
      break
    default:
      break
  }
  return sortFilteredBooks
}
