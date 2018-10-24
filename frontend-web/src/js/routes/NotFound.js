import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MainBar from '../components/MainBar';

const styles = theme => ({
  presentationContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100%',
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default
  },
  content: {
    maxWidth: '22em'
  },
  button: {
    margin: theme.spacing.unit * 2
  }
});

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      style: {}
    }
  }

  componentDidMount() {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({
      style: {
        height: viewportHeight - ReactDOM.findDOMNode(this).offsetHeight
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { style } = this.state;

    return (
      <Fragment>
        <MainBar />
        <Grid container className={classes.presentationContainer} style={style}>
          <Grid item>
            <Typography variant="h1" gutterBottom>
              404
            </Typography>
            <Typography variant="h5" className={classes.content} component="p" gutterBottom>
              Oops... seems like this page doesn't exist yet.
            </Typography>
            <Button variant="outlined" size="large" color="primary" href="/" className={classes.button}>
              Back to the homepage
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(NotFound);