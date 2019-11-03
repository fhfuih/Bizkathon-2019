import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    textAlign: 'left',
    textTransform: 'unset'
  },
}));

function WhiteButton({ children, ...props }) {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}>{children}</Button>
  )
}

export default WhiteButton;
