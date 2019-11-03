import React from 'react';
import {
  Typography,
} from '@material-ui/core';

export default function({ children }) {
  return (
    <Typography variant="inherit" color="primary">{children}</Typography>
  )
}
