import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';
import PortfolioBase from '../components/portfolioBase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 15px',
    paddingBottom: 28,
    width: 300,
  },
}));

function Portfolio({ preset = 0, onRoute, detail, ...props }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3} {...props}>
      <PortfolioBase preset={preset} onRoute={onRoute} detail={detail} {...props} />
    </Paper>
  )
}

export default Portfolio;
