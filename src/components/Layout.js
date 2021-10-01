import React from "react";
import Login from "./login/Login";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./registration/Registration";
import Policy from "./docs/Policy";
import Rules from "./docs/Rules";

export default function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/policy" render={() => <Policy />} />
        <Route path="/rules" render={() => <Rules />} />
      </Switch>
    </BrowserRouter>
  );
}
