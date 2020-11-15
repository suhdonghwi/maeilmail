import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import firebase from "firebase";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const HideIfLogin = ({ children }: any) => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }

  return children;
};

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default function Root() {
  const history = useHistory();
  const [user, setUser] = useState<firebase.User | null>(null);
  const authenticated = user !== null;

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        history.push("/");
      } else {
        history.push("/login");
      }
    });
  }, [history]);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          component={Home}
          authenticated={authenticated}
        />
        <PrivateRoute
          path="/profile"
          exact
          component={Profile}
          authenticated={authenticated}
        />
        <Route path="/login" exact component={Login} />
        <Redirect path="*" to="/login" />
      </Switch>
      <HideIfLogin>
        <NavBar />
      </HideIfLogin>
    </BrowserRouter>
  );
}
