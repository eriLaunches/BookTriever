//Helper function that picks out the relevant book details (i.e. subject, place, description) in the book object, stores details in a description object, and returns description object for component to use.

export const addSeparator = arr => {
  return arr.join(' | ')
}

export const descriptionHelper = (sBook, bBook) => {
  console.log('description helper', bBook)
  let description = {}
  if (sBook.subtitle) {
    description.subtitle = sBook.subtitle
  }
  if (sBook.first_sentence) {
    description.firstSentence = sBook.first_sentence[0]
  }
  if (bBook && bBook !== {}) {
    description.bookDescription = bBook.description
  }
  if (sBook.subject) {
    sBook.subject.length > 1
      ? (description.subject = addSeparator(sBook.subject))
      : (description.subject = sBook.subject)
  }
  if (sBook.person) {
    sBook.person.length > 1
      ? (description.person = addSeparator(sBook.person))
      : (description.person = sBook.person)
  }
  if (sBook.place) {
    sBook.place.length > 1
      ? (description.place = addSeparator(sBook.place))
      : (description.place = sBook.place)
  }

  return description
}
