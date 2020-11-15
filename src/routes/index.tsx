import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
