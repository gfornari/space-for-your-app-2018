import { createMuiTheme } from '@material-ui/core/styles';

const themeFactory = () => {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      mycolor: '#9b0014'
    }
  });
}

export default themeFactory;