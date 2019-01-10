//Styling for Material UI elements

const styles = theme => ({
  mainFeaturedPost: {
    display: 'flex',
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 4,
    width: '100%',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200, //use to adjust width of cards
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  image: {
    margin: 'auto',
    marginRight: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3
  }
})

export default styles
