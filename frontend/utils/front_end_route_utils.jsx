import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

const Auth = ({ loggedIn, path, component: Component }) => {
    console.log(Component)
  return (
    <Route
      path={path}
      render={(props) =>
        loggedIn ? <Redirect to='/home/dashboard'/> : <Component {...props} />
      }
    />
  );
};

const Protected = ({ loggedIn, path, component: Component }) => {
  return (
    <Route
      path={path}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));