import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import MainBar from '../components/MainBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  presentationContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default
  }
});

class Home extends Component {
  constructor() {
    super();

    this.state = {
      fetchedData: ''
    }
  }

  async componentDidMount() {
    const fetch = await fetch(`${API_URL}/myuri`);
    const res = await res.json();

    this.setState({ fetchedData: res });
  }

  render() {
    const { classes } = this.props;
    const { fetchedData } = this.state;

    return (
      <Fragment>
        <MainBar />
        <Grid container className={classes.presentationContainer}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              Our title
            </Typography>
          </Grid>
        </Grid>
        <Footer divider/>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);