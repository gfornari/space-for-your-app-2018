import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import themeFactory from './themeFactory';

const theme = themeFactory();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/mypath/:param" component={OtherComponet} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);