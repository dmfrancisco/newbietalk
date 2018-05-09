import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Landing from "./Landing";
import Loading from "./Loading";

const AvatarHelpModal = Loadable({
  loader: () => import("./modals/AvatarHelpModal"),
  loading: Loading,
  delay: 0,
});

const PronounHelpModal = Loadable({
  loader: () => import("./modals/PronounHelpModal"),
  loading: Loading,
  delay: 0,
});

const LanguagesHelpModal = Loadable({
  loader: () => import("./modals/LanguagesHelpModal"),
  loading: Loading,
  delay: 0,
});

const FlagHelpModal = Loadable({
  loader: () => import("./modals/FlagHelpModal"),
  loading: Loading,
  delay: 0,
});

const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading,
  delay: 0,
});

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/sign-up" component={NotFound} />
      <Route exact path="/sign-in" component={NotFound} />
      <Route path="/app" component={NotFound} />

      <Route path="/" component={Landing} />
      <Route path="/help/avatar" component={AvatarHelpModal} />
      <Route path="/help/pronoun" component={PronounHelpModal} />
      <Route path="/help/languages" component={LanguagesHelpModal} />
      <Route path="/help/flag" component={FlagHelpModal} />
    </Fragment>
  </Router>
);

export default App;
