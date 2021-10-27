import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user";

export default function Layout() {
  const [popup, setPopup] = useState(false);
  const [popupReg, setPopupReg] = useState(false);
  const [popupPolicy, setPopupPolicy] = useState(false);
  const [popupRules, setPopupRules] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  function toggle() {
    setPopupReg(!popupReg);
    setPopup(!popup);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar setPopup={setPopup} popup={popup} />
        {popup && !isAuth && (
          <Login
            setPopup={setPopup}
            popup={popup}
            setPopupReg={setPopupReg}
            popupReg={popupReg}
            toggle={toggle}
          />
        )}

        {popupReg && !isAuth && (
          <Registration
            setPopupReg={setPopupReg}
            popupReg={popupReg}
            toggle={toggle}
            popupPolicy={popupPolicy}
            setPopupPolicy={setPopupPolicy}
            popupRules={popupRules}
            setPopupRules={setPopupRules}
          />
        )}
        {popupPolicy && (
          <Policy popupPolicy={popupPolicy} setPopupPolicy={setPopupPolicy} />
        )}
        {popupRules && (
          <Rules popupRules={popupRules} setPopupRules={setPopupRules} />
        )}
        <Switch>
          <Route exact path="/" render={() => <Home popup={popup} />} />

          {/* <Route path="/rules" render={() => <Rules />} /> */}
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
