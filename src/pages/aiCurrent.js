import React from 'react';
// import {
//   makeStyles
// } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import {
  Link
} from '@reach/router';
import LargeTile from '../components/largeTile';
import Portfolio from '../components/portfolio';
import WhiteButton from '../components/whiteButton';

// const useStyles = makeStyles(theme => ({
  
// }));


function AICurrent({ onRoute }) {
  // const classes = useStyles();
  return (
    <>
      <div style={{ margin: "22px 15px 12px 15px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LargeTile lineOne="Investment Pocket" lineTwo="10,000.00 HKD"/>
          </Grid>
          <Grid item xs={6}>
            <LargeTile lineOne="Net Gain/Loss" lineTwo="0.00 HKD"/>
          </Grid>
        </Grid>
      </div>
      <Typography color="primary">Current Portfolio</Typography>
      <div style={{ margin: "12px 15px" }}>
        <Portfolio style={{ width: 'unset' }} />
      </div>
      <div style={{ margin: "12px 15px" }}>
        <WhiteButton fullWidth component={Link} to="/report" onClick={() => onRoute('Periodic Report')}>Periodic Report</WhiteButton>
      </div>
      <div style={{ margin: "12px 15px" }}>
        <WhiteButton fullWidth>Investment Record</WhiteButton>
      </div>
      <div style={{ margin: "12px 15px" }}>
        <WhiteButton fullWidth>Portfolio Selection</WhiteButton>
      </div>
      <div style={{ margin: "12px 15px" }}>
        <WhiteButton fullWidth>Loss Limitation</WhiteButton>
      </div>
      <div style={{height:56}}/>
    </>
  )
}

export default AICurrent;
