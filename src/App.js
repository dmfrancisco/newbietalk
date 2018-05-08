import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from 'react-loadable';
import Landing from './Landing';
import Loading from './Loading';

const AvatarHelpModal = Loadable({
  loader: () => import('./modals/AvatarHelpModal'),
  loading: Loading,
  delay: 0,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component={Landing} />
          <Route path="/help/avatar" component={AvatarHelpModal} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
