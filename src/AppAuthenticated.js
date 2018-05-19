import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Subscribe } from "unstated";
import Loadable from "react-loadable";
import SessionContainer from "./containers/SessionContainer";
import Start from "./Start";
import Home from "./Home";
import ProfileSettings from "./ProfileSettings";
import SignOut from "./SignOut";
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

const Chat = Loadable({
  loader: () => import("./Chat"),
  loading: Loading,
  delay: 0,
});

const Unauthenticated = () => <h1>Unauthenticated</h1>;

const AppAuthenticated = () => (
  <Subscribe to={[SessionContainer]}>
    {session => {
      if (!session.state.ready) {
        return <Loading />;
      }

      if (!session.isSignedIn()) {
        return (
          <Switch>
            <Route exact path="/app/start" component={Start} />
            <Route component={Unauthenticated} />
          </Switch>
        );
      }

      return (
        <Fragment>
          {session.isOnboarded() && (
            <Switch>
              <Route exact path="/app/start" render={() => <Redirect to="/app" />} />
              <Route exact path="/app" component={Home} />
            </Switch>
          )}

          {!session.isOnboarded() && (
            <Switch>
              <Route exact path="/app/start" render={() => <Redirect to="/app/profile" />} />
              <Route exact path="/app" render={() => <Redirect to="/app/profile" />} />
            </Switch>
          )}

          <Route path="/app/profile" component={ProfileSettings} />
          <Route exact path="/app/profile/help/avatar" component={AvatarHelpModal} />
          <Route exact path="/app/profile/help/pronoun" component={PronounHelpModal} />
          <Route exact path="/app/profile/help/languages" component={LanguagesHelpModal} />
          <Route path="/app/chat/:uid" component={Chat} />

          <Route exact path="/app/sign-out" component={SignOut} />
        </Fragment>
      );
    }}
  </Subscribe>
);

export default AppAuthenticated;
