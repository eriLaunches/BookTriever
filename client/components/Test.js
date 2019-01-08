import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = theme => ({
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

const sections = ['All Books', 'Ebooks']

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
]

function Blog(props) {
  const {classes} = props

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Tabs indicatorColor="primary" textColor="primary">
          <Tab label="All Books" />
          <Tab label="Ebooks" />
        </Tabs>
        {/* Search Results -- listing of books found */}
        <Grid container className={classes.resultsContainer}>
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6} className={classes.grid}>
              <Card className={classes.card}>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                </Hidden>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* End sub featured posts */}
      </div>
    </React.Fragment>
  )
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Blog)
