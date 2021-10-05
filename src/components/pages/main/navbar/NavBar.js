import React from "react";
import logo from "../navbar/img/logo.svg";
import searchIcon from "../navbar/img/searchIcon.svg";
import loginIcon from "../navbar/img/loginIcon.svg";
import langIcon from "../navbar/img/langIcon.svg";
import Search from "../Search";
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
            <Link to="/login">
              <img src={loginIcon} alt={"loginIcon"} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
