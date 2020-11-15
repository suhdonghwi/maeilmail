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
import Loading from "../pages/Loading";
import Calendar from "../pages/Calendar";

const HideIfLogin = ({ children }: any) => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }

  return children;
};

const PrivateRoute = ({ component: Component, user, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default function Root() {
  const history = useHistory();
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, [history]);

  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Home} user={user} />
        <PrivateRoute path="/profile" exact component={Profile} user={user} />
        <PrivateRoute path="/calendar" exact component={Calendar} user={user} />
        <Route path="/login" exact component={Login} />
        <Redirect path="*" to="/login" />
      </Switch>
      <HideIfLogin>
        <NavBar />
      </HideIfLogin>
    </BrowserRouter>
  );
}
