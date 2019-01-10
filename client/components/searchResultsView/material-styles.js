//For styling of Material UI elements for the search results view
export const resultStyles = theme => ({
  root: {},
  layout: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100, //use to adjust width of cards
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
  cardMedia: {
    width: 160
  }
})

export const filterStyles = {
  root: {
    flexGrow: 1,
    marginTop: 86,
    marginLeft: 70
  }
}

export const sortStyles = theme => ({
  root: {
    display: 'flex',
    marginTop: 96,
    marginLeft: theme.spacing.unit * 20
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})
