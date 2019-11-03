import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Paper,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  largeTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    padding: "11px 16px 9px 16px"
  },
  largeTileLineOne: {
    fontSize: 14,
  },
  largeTileLineTwo: {
    fontSize: 20,
  },
  largeTileLineThree: {
    alignSelf: "flex-end",
    fontSize: 12,
  },
}));

function LargeTile({ lineOne, lineTwo, ...props }) {
  const classes = useStyles();
  return (
    <Paper className={classes.largeTile} elevation={3} {...props}>
      <Typography color="primary" className={classes.largeTileLineOne}>{lineOne}</Typography>
      <Typography className={classes.largeTileLineTwo}>{lineTwo}</Typography>
      <Typography color="primary" className={classes.largeTileLineThree}>&gt; more</Typography>
    </Paper>
  )
}

export default LargeTile;
