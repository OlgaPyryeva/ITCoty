import React, { useState } from "react";
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
  const [popup, setPopup] = useState(false);
  const [popupReg, setPopupReg] = useState(false);

  function toggle() {
    // setPopup(false);
    // setPopupReg(true);
    setPopupReg(!popupReg);
    setPopup(!popup);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar setPopup={setPopup} popup={popup} />
        {popup && (
          <Login
            setPopup={setPopup}
            popup={popup}
            setPopupReg={setPopupReg}
            popupReg={popupReg}
            toggle={toggle}
          />
        )}
        {popupReg && (
          <Registration
            setPopupReg={setPopupReg}
            popupReg={popupReg}
            toggle={toggle}
          />
        )}
        <Switch>
          <Route exact path="/" render={() => <Home popup={popup} />} />
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
