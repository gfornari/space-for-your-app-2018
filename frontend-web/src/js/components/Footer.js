import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing.unit * 6
  },
  madeWith: {
    marginTop: theme.spacing.unit * 4
  },
  madeWithLink: {
    textDecoration: 'none',
    '&:link': { color: 'inherit' },
    '&:visited': { color: 'inherit' },
    '&:hover': { color: 'inherit' },
    '&:active': { color: 'inherit' }
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Divider />
        <footer className={classes.footer}>
          <Typography variant="h6" align="left" gutterBottom>
            Quick info
          </Typography>
          <Typography variant="body1" align="left" color="textSecondary" component="p">
            Just some quick info.
          </Typography>
          <Typography variant="caption" align="center" color="textSecondary" component="p" className={classes.madeWith}>
            Made with <FontAwesomeIcon icon={faHeart} /> by our awesome team
          </Typography>
        </footer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Footer);