import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Carousel from '../components/carousel';
import CreditCard from '../components/creditCard';
import LargeTile from '../components/largeTile';
import TextHighlight from '../components/highlight';
import ScanIcon from '../icons/scan';
import PayIcon from '../icons/pay';
import TransferIcon from '../icons/transfer';
import RepayIcon from '../icons/repay';
import ReceiveIcon from '../icons/receive';
import ExchangeIcon from '../icons/exchange';
import MoreIcon from '../icons/more';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'left',
    padding: '0 12px',
    flexGrow: 1,
  },
  divider: {
    marginBottom: 15,
  },
  section: {
    margin: '0 15px 15px 15px',
  },
  largeTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    padding: "11px 16px 9px 16px"
  },
  largeTileLineOne: {
    fontSize: "14pt",
  },
  largeTileLineTwo: {
    fontSize: "20px",
  },
  largeTileLineThree: {
    alignSelf: "flex-end",
    fontSize: 12,
  },
  smallTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 0px',
  },
  smallTileIcon: {
    width: 35,
    height: 40,
    padding: 'auto'
  },
  smallTileCaption: {
    fontSize: 12,
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "15px 0 10px 0" }}>
        <Carousel>
            <CreditCard cardNumber="5101 1068 **** ****" validDates="09/17 - 09/22" name="ZHANG Sheng" background="0" />
            <CreditCard cardNumber="5101 1068 **** ****" validDates="09/17 - 09/22" name="ZHANG Sheng" background="1" />
            <CreditCard cardNumber="5101 1068 **** ****" validDates="09/17 - 09/22" name="ZHANG Sheng" background="2" />
        </Carousel>
        <Typography color="primary" align="right" variant="caption" component="div" style={{ marginRight: 15 }}>Edit my cards</Typography>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.section}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LargeTile lineOne="Current Assets" lineTwo="13,000.00 HKD"/>
          </Grid>
          <Grid item xs={6}>
            <LargeTile lineOne="Current Debts" lineTwo="0.00 HKD"/>
          </Grid>
        </Grid>
      </div>
      <div className={classes.section}>
        <Paper elevation={3} style={{ padding: '8px 0' }}>
          <Grid container spacing={0}>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <ScanIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Scan</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <PayIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Pay</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <TransferIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Transfer</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <RepayIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Repay</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <ReceiveIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Receive</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <ExchangeIcon />
              </div>
              <Typography className={classes.smallTileCaption}>Exchange Rate</Typography>
            </Grid>
            <Grid item xs={3} className={classes.smallTile}>
              <div className={classes.smallTileIcon}>
                <MoreIcon />
              </div>
              <Typography className={classes.smallTileCaption}>More</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Divider  className={classes.divider}/>
      <div className={classes.section}>
        <Paper elevation={3} style={{ padding: '10px 15px' }}>
          <Typography color="primary" component="div" align="left">Transaction Records</Typography>
          <div style={{ padding: "0 15px" }}>
            <List dense disablePadding>
              <ListItem>
                <ListItemText secondary="19:00:03 01-10-2019"><TextHighlight>•</TextHighlight> Receive <TextHighlight>5,000.00 HKD</TextHighlight> from ZHANG.</ListItemText>
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText secondary="19:00:03 01-10-2019"><TextHighlight>•</TextHighlight> Transfer <TextHighlight>5,000.00 HKD</TextHighlight> to MU.</ListItemText>
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText secondary="19:00:03 01-10-2019"><TextHighlight>•</TextHighlight> Pay <TextHighlight>200.00 HKD</TextHighlight> to MU.</ListItemText>
              </ListItem>
            </List>
            <Typography color="primary" align="right" variant="caption" component="div">&gt; more</Typography>
          </div>
        </Paper>
      </div>
      <div style={{height:56}}/>
    </>
  )
}

export default Home;
