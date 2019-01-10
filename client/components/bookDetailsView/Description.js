import React from 'react'
import Typography from '@material-ui/core/Typography'
import {descriptionHelper} from '../../utilities/descriptionHelper'

const Description = props => {
  const {selectedBook, book} = props
  let description = descriptionHelper(selectedBook, book)
  let {
    subtitle,
    firstSentence,
    person,
    subject,
    place,
    bookDescription
  } = description

  console.log('Description', description)
  return (
    <div>
      <Typography variant="subtitle1" paragraph>
        <strong>Subtitle:</strong> {subtitle ? subtitle : <i>N/A</i>}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        <strong>Opening Sentence: </strong>{' '}
        {firstSentence ? <i>"{firstSentence}"</i> : <i>N/A</i>}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        <strong>Description:</strong>{' '}
        {bookDescription ? bookDescription : <i>N/A</i>}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        <strong>Relevant Topics:</strong> {subject ? subject : <i>N/A</i>}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        <strong>Main Character(s):</strong> {person ? person : <i>N/A</i>}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        <strong>Setting(s):</strong> {place ? place : <i>N/A</i>}
      </Typography>
    </div>
  )
}

export default Description
