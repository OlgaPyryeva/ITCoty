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
import NavBar from "./pages/main/navbar/NavBar";
import Home from "./pages/main/Home";
import Business from "./pages/Business";
import Events from "./pages/Events";
import Vacancies from "./pages/Vacancies";
import Traineeship from "./pages/Traineeship";

export default function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Registration />} />
        <Route path="/policy" render={() => <Policy />} />
        <Route path="/rules" render={() => <Rules />} />
        <Route path="/business" render={() => <Business />} />
        <Route path="/events" render={() => <Events />} />
        <Route path="/vacancies" render={() => <Vacancies />} />
        <Route path="/traineeship" render={() => <Traineeship />} />
      </Switch>
    </BrowserRouter>
  );
}
