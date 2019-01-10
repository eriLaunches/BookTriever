import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class AlertDialog extends React.Component {
  state = {
    open: this.props.alert
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.handleAlert()
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>{'Invalid Search Entry'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a book title in the search field before continuing
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AlertDialog
