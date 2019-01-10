//Styling for Material UI elements

const styles = theme => ({
  mainFeaturedPost: {
    display: 'flex',
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5
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
    paddingTop: theme.spacing.unit * 5
  }
})

export default styles
