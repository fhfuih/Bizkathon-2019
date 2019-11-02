import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
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
  search: {
    padding: 15,
    backgroundColor: "#d8d8d8",
    borderRadius: 0,
  },
  searchInner: {
    backgroundColor: "white",
    borderRadius: 15,
    display: 'flex'
  },
  input: {
    flex: 1
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

function TextHighlight({ children }) {
  return (
    <Typography variant="inherit" color="primary">{children}</Typography>
  )
}

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "22px 14px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.largeTile}>
              <Typography color="primary" className={classes.largeTileLineOne}>Current Assets</Typography>
              <Typography className={classes.largeTileLineTwo}>13,000.00 HKD</Typography>
              <Typography color="primary" className={classes.largeTileLineThree}>&gt; more</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.largeTile}>
              <Typography color="primary"  className={classes.largeTileLineOne}>Current Debts</Typography>
              <Typography className={classes.largeTileLineTwo}>0.00 HKD</Typography>
              <Typography color="primary"  className={classes.largeTileLineThree}>&gt; more</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div style={{ padding: "15px 30px" }}>
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
      </div>
      <Divider />
      <div style={{ padding: "15px 30px" }}>
        <Typography color="primary" component="div" align="left" gutterBottom>Transaction Records</Typography>
        <div style={{ padding: "0 15px" }}>
          <List dense>
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
            <Divider light />
            <Typography color="primary" className={classes.largeTileLineThree} style={{ marginTop: 6 }} align="right">&gt; more</Typography>
          </List>
        </div>
      </div>
    </>
  )
}

export default Home;
