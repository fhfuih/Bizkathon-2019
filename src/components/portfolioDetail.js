import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import {
  Link
} from '@reach/router';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: '20px 15px',
    paddingBottom: 28,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pieCaption: {
    position: 'absolute', 
    top: 108
  },
  captionLineOne: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.52,
  },
  captionLineTwo: {
    fontSize: 20,
    letterSpacing: 0.79,
    color: 'rgb(207,72,19)'
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  red: {
    color: 'rgb(207,72,19)'
  }
}));

function PortfolioDetail({ preset = 0, confirm, onRoute }) {
  const classes = useStyles();
  
  const handleRoute = () => {
    onRoute('Current');
  };

  return (
    <>
      <Divider light />
      <div>
        <Typography gutterBottom><b>Element Info</b></Typography>
        <Typography color="primary" gutterBottom><b>Emerging Market Corporate Bond</b></Typography>
        <div className={classes.detail}>
          <Typography variant="body2">Type: <span className={classes.red}>Fixed Income</span></Typography>
          <Typography variant="body2">Return: <span className={classes.red}>6%</span></Typography>
          <Typography variant="body2">Volatility: <span className={classes.red}>8.25%</span></Typography>
          <Typography variant="body2">Allocation: <span className={classes.red}>6.03%</span></Typography>
        </div>
        {
          confirm && 
            <Button variant="contained" color="primary" component={Link} to="/current" onClick={handleRoute}>Confirm</Button>
        }
      </div>
    </>
  )
}

export default PortfolioDetail;
