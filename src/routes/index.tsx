import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Login from "../pages/Login";

const HideIfLogin = ({ children }: any) => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }

  return children;
};

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect path="*" to="/login" />
      </Switch>
      <HideIfLogin>
        <NavBar />
      </HideIfLogin>
    </BrowserRouter>
  );
}
