import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  TrendingUp,
  Person,
  Home,
} from '@material-ui/icons';
import HomeIcon from '../icons/home';
import MeIcon from '../icons/me';
import AInvestmentIcon from '../icons/ainvestment';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    height: 84,
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.secondary.main
  }
}))

function BottNav({ value, onChange }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    if (newValue === 'Home' || newValue === 'AInvestment') {
      onChange(newValue);
    }
  };

  return (
    <BottomNavigation showLabels={true} value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="AInvestment" value="AInvestment" icon={<AInvestmentIcon />} />
      <BottomNavigationAction label="Me" value="Me" icon={<MeIcon />} />
    </BottomNavigation>
  );
}

export default BottNav;
