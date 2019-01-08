import React from 'react'

//This function is used to for Material UI styling for the search results view

export default theme => ({
  layout: {
    marginTop: theme.spacing.unit * 10,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    display: 'flex',
    marginTop: 15
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
})
