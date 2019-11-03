import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Paper,
  Icon
} from '@material-ui/core';
import {
  NavigateNext,
  NavigateBefore,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  main: {
    width: '80%',
    padding: '10px 15px',
    margin: '0 7.5px',
    flex: 1,
    display: 'flex',
    direction: 'column'
  }
}));

function MockCarousel({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.left}>
        <Icon color="primary"><NavigateNext/></Icon>
      </Paper>
      <Paper className={classes.main}>
        {children}
      </Paper>
      <Paper className={classes.right}>
      <Icon color="primary"><NavigateBefore/></Icon>
      </Paper>
    </div>
  )
}

export default MockCarousel;
