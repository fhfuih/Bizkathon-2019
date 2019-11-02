import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: { main: 'rgb(54, 102, 142)' },
    secondary: { main: 'rgb(248, 248, 248)' },
  },
  overrides: {
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          backgroundColor: 'white',
          fill: 'rgb(54, 102, 142)',
        }
      }
    }
  }
});
