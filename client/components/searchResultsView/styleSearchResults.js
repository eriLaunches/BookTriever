//For styling of Material UI elements for the search results view

export default theme => ({
  root: {},
  layout: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100, //adjust width of cards
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  resultsContainer: {
    flexDirection: 'column'
  },
  card: {
    display: 'flex',
    marginTop: 10
  },
  cardDetails: {
    // flex: 1
  },
  cardMedia: {
    width: 160
    //adjust thumbnail size
  }
})
