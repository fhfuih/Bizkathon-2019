import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import Pie from '../components/pie';
import PortfolioDetail from '../components/portfolioDetail';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pieCaption: {
    position: 'absolute', 
    top: 88
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

const IntRates = [ "5.896%", "5.417%", "6.102%" ]

function Portfolio({ preset = 0, onRoute, detail, confirm = true, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" variant="caption" component="div">Risk-Free Interest Interest Rate: <b>2.000%</b></Typography>
      <Pie preset={preset} />
      <div className={classes.pieCaption}>
        <Typography className={classes.captionLineOne}>Interest Rate</Typography>
        <Typography className={classes.captionLineTwo}>{IntRates[preset]}</Typography>
      </div>
      { detail && <PortfolioDetail preset={preset} onRoute={onRoute} confirm={confirm} /> }
    </div>
  )
}

export default Portfolio;
