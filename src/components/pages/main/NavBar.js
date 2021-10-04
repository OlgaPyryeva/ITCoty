import React from "react";
import logo from "./logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header class="header">
      <div class="logo">
        <img src={logo} alt={"logo"} />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Search />
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
        </ul>
      </nav>
      <div className="lang">
        <li>
          <button>RU</button>
        </li>
      </div>
      <div className="userIdentification">
        <Link to="/login">
          <span class="material-icons">perm_identity</span>
        </Link>
      </div>
    </header>
  );
}
