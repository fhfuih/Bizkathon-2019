import React from 'react';
import {
  MuiThemeProvider
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles'

import theme from './theme';
import Router from './router';
import TopBar from './components/topBar';
import BottomNavigation from './components/bottomNavigation';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    maxWidth: 600,
    maxHeight: 850,
  }
});

function App() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('Home');

  const handlePageChange = newTitle => setTitle(newTitle);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar title={title} />
        <Router />
        <BottomNavigation value={title} onChange={handlePageChange} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
