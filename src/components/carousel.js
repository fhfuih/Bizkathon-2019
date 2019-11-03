import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 7,
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory',
  },
  li: {
    flex: 1,
    scrollSnapAlign: 'center',
    display: 'inline-block',
    margin: '0 7.5px',
  }
}));

function Carousel({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        children.map((elem, i) => (
          <li key={i} className={classes.li}>
            {elem}
          </li>
        ))
      }
    </div>
  )
}

export default Carousel;
