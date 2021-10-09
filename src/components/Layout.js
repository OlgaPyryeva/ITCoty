import React, {useState} from "react";
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
import Business from "./pages/business/Business";
import Events from "./pages/events/Events";
import News from "./pages/news/News";
import Vacancies from "./pages/vacancies/Vacancies";
import Traineeship from "../components/pages/traineeship/Traineeship";

export default function Layout() {

  const [popup, setPopup] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <NavBar  setPopup={setPopup} popup={popup}/>
        <Switch>
          <Route exact path="/" render={() => <Home  popup={popup}/>} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Registration />} />
          <Route path="/policy" render={() => <Policy />} />
          <Route path="/rules" render={() => <Rules />} />
          <Route path="/business" render={() => <Business />} />
          <Route path="/events" render={() => <Events />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/vacancies" render={() => <Vacancies />} />
          <Route path="/traineeship" render={() => <Traineeship />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
