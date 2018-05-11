import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import Start from "./Start";
import Home from "./Home";
import ProfileSettings from "./ProfileSettings";
import SignOut from "./SignOut";
import Loading from "./Loading";

const Unauthenticated = () => (
  <h1>Unauthenticated</h1>
);

const AppAuthenticated = () => (
  <Subscribe to={[SessionContainer]}>
    {session => (
      <Fragment>
        { session.isSignedIn() && session.isOnboarded() && (
          <Switch>
            <Route exact path="/app/start" render={() => <Redirect to="/app" />} />
            <Route exact path="/app" component={Home} />
            <Route exact path="/app/profile" component={ProfileSettings} />
          </Switch>
        )}

        { session.isSignedIn() && !session.isOnboarded() && (
          <Switch>
            <Route exact path="/app/start" render={() => <Redirect to="/app/profile" />} />
            <Route exact path="/app" render={() => <Redirect to="/app/profile" />} />
            <Route exact path="/app/profile" component={ProfileSettings} />
          </Switch>
        )}

        { !session.isSignedIn() && session.state.ready && (
          <Switch>
            <Route exact path="/app/start" component={Start} />
            <Route exact path="/app" component={Unauthenticated} />
            <Route exact path="/app/profile" component={Unauthenticated} />
          </Switch>
        )}

        { !session.state.ready && <Loading /> }

        <Route exact path="/app/sign-out" component={SignOut} />
      </Fragment>
    )}
  </Subscribe>
);

export default AppAuthenticated;
