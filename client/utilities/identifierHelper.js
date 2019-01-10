/* Helper function to identify the id in the book object to pass id into Open Library Book API to fetch book description. This function first looks for if the object contains an isbn. If it does, it will take the first isbn in the array as the id and update the identifier object. Else if the object contains an oclc, then it will take the first oclc in the array as the id. And so on... If there are no ids matching the criteria, the function will return identifier as undefined */

export const identifierHelper = book => {
  let identifier = undefined
  if (book.isbn) {
    identifier = {
      id: book.isbn[0],
      type: 'isbn'
    }
  } else if (book.oclc) {
    identifier = {
      id: book.oclc[0],
      type: 'oclc'
    }
  } else if (book.lccn) {
    identifier = {id: book.lccn[0], type: 'lccn'}
  } else if (book.olid) {
    identifier = {id: book.olid[0], type: 'olid'}
  }
  return identifier
}
