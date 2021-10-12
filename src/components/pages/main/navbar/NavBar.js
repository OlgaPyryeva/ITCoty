import React from "react";
import logoITCoty from "../../../img/logoITCoty.svg";
import searchIcon from "../../../img/searchIcon.svg";
import loginIcon from "../../../img/loginIcon.svg";
import langIcon from "../../../img/langIcon.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  const { setPopup, popup } = props;

  console.log("popup", popup);
  return (
    <header class="header">
      <div class="logo">
        <img src={logoITCoty} alt={"logoITCoty"} />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <img src={searchIcon} alt={"searchIcon"} />
          </li>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/business">Бизнесу</Link>
          </li>
          <li>
            <Link to="/events">События</Link>
          </li>
          <li>
            <Link to="/vacancies">Вакансии</Link>
          </li>
          <li>
            <Link to="/traineeship">Стажировки</Link>
          </li>
          <li>
            <span>RU</span>
            <img src={langIcon} alt={"langIcon"} />
          </li>
          <li>
            {/* <Link to="/login"> */}
            <img
              src={loginIcon}
              alt={"loginIcon"}
              onClick={() => setPopup(!popup)}
            />
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
