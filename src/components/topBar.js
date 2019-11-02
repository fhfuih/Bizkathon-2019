import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

function topBar({ title }) {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography color="primary" variant="h6" component="h1" align="center" style={{ fontWeight: 'bold', width: '100%' }}>{title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default topBar;
