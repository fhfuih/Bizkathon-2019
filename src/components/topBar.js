import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

function topBar({ title }) {
  return (
    <AppBar color="secondary" position="static" style={{ boxShadow: '0 2px 6px 0 rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Typography color="primary" variant="h6" component="h1" align="center" style={{ fontWeight: 'bold', width: '100%' }}>{title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default topBar;
