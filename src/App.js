import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Landing from "./Landing";
import Flash from "./Flash";
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

const Welcome = Loadable({
  loader: () => import("./Welcome"),
  loading: Loading,
  delay: 0,
});

const AppAuthenticated = Loadable({
  loader: () => import("./AppAuthenticated"),
  loading: Loading,
  delay: 0,
});

const App = () => (
  <Router>
    <Fragment>
      <Route path="/" component={Flash} />

      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/app" component={AppAuthenticated} />

        <Route path="/">
          <Fragment>
            <Route path="/" component={Landing} />

            <Route exact path="/help/avatar" component={AvatarHelpModal} />
            <Route exact path="/help/pronoun" component={PronounHelpModal} />
            <Route
              exact
              path="/help/languages"
              component={LanguagesHelpModal}
            />
            <Route exact path="/help/flag" component={FlagHelpModal} />

            <Route exact path="/languages" component={NotFound} />
            <Route exact path="/code-of-conduct" component={NotFound} />
            <Route exact path="/thanks" component={NotFound} />
            <Route exact path="/privacy" component={NotFound} />
            <Route exact path="/terms" component={NotFound} />
          </Fragment>
        </Route>
      </Switch>
    </Fragment>
  </Router>
);

export default App;
