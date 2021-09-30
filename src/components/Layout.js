import React from "react";
import Login from "./login/Login";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./registration/Registration";

export default function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/registration" render={() => <Registration />} />
      </Switch>
    </BrowserRouter>
  );
}
