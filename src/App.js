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

const PronounHelpModal = Loadable({
  loader: () => import('./modals/PronounHelpModal'),
  loading: Loading,
  delay: 0,
});

const LanguagesHelpModal = Loadable({
  loader: () => import('./modals/LanguagesHelpModal'),
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
          <Route path="/help/pronoun" component={PronounHelpModal} />
          <Route path="/help/languages" component={LanguagesHelpModal} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
