import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import {
  BugReport
} from '@material-ui/icons';
import report1 from './report1.jpg';
import report2 from './report2.jpg';
import PortfolioBase from '../components/portfolioBase';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "18px 11pt 12px 11px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
    textShadow: '0 2px 6px rgba(0,0,0,0.5)'
  },
  red: {
    color: 'rgb(207,72,19)',
    fontWeight: 'bold',
    textShadow: '0 2px 6px rgba(0,0,0,0.5)'
  },
  side: {
    color: 'white',
    alignSelf: 'flex-end',
    fontSize: 12,
    textShadow: '0 2px 6px rgba(0,0,0,0.5)'
  },
  dialogTitle: {
    color: 'rgb(207,72,19)',
    textAlign: 'center'
  }
}));


function AIReport() {
  const classes = useStyles();
  const [dialogOpen, setDialog] = React.useState(false);
  return (
    <>
      <div style={{ margin: "22px 15px 12px 15px" }}>
        <Paper elevation={3} style={{ padding: '10px 15px' }}>
          <Typography color="primary" component="div" align="left" gutterBottom>Periodic Report</Typography>
          <PortfolioBase detail confirm={false} style={{ width: 'unset' }} />
        </Paper>
      </div>
      <div style={{ margin: "12px 15px" }}>
        <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url("${report1}")`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Typography className={classes.white}>Profit Generated</Typography>
          <Typography className={classes.red}>+120.00 HKD</Typography>
          <Typography className={classes.side}>From 30-08-2019 Till Now</Typography>
        </Paper>
      </div>
      <div style={{ margin: "12px 15px" }}>
        <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url("${report2}")`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Typography className={classes.white}>Profit Prediction</Typography>
          <Typography className={classes.red}>+200.00 HKD</Typography>
          <Typography className={classes.side}>At 15-09-2019</Typography>
        </Paper>
      </div>
      <IconButton size="small" onClick={() => setDialog(true)} style={{ position: 'fixed', top: 12, right: 12 }}>
        <BugReport />
      </IconButton>
      <div style={{height:56}}/>
      <Dialog
        aria-labelledby="simple-dialog-title"
        aria-describedby="alert-dialog-description"
        open={dialogOpen}
        onClose={() => setDialog(false)}
      >
        <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>Loss Attention</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your loss has exceeded your loss limitation. AInvestment has been automatically cancelled.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ flexDirection: 'column' }}>
          <Button variant="contained" color="primary" onClick={() => setDialog(false)}>Got it</Button>
          <Button size="small" color="primary" style={{ marginTop: 5 }}>Access Online Consultants</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AIReport;
