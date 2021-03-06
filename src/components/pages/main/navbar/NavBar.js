import React from "react";
import logoITCoty from "../../../img/logoITCoty.svg";
import searchIcon from "../../../img/searchIcon.svg";
import loginIcon from "../../../img/loginIcon.svg";
import langIcon from "../../../img/langIcon.svg";
import x from "../../../img/x.svg";
import burgerMenu from "../../../img/burgerMenu.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../reducers/userReducer";

export default function NavBar(props) {
  const { setPopup, popup } = props;
  const { setPopupMenu, popupMenu } = props;
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  console.log("popup", popup);
  return (
    <header class="navBarHeader container">
      <div class="dropdown">
        <div class="burgerMenu">
          <img src={burgerMenu} alt="burger menu icon" />
        </div>
        <div class="dropdown-content">
          <ul>
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
        </div>
      </div>

      <div class="navBarLogo">
        <img src={logoITCoty} alt={"logoITCoty"} />
      </div>
      <nav className="navBarMenu">
        <ul className="navBarMenuList">
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
          <li className="lang">
            <div>RU</div>
            <div>
              <img src={langIcon} alt={"langIcon"} />
            </div>
          </li>
        </ul>
      </nav>
      {!isAuth && (
        <div className="loginIcon">
          <img
            src={loginIcon}
            alt={"loginIcon"}
            onClick={() => setPopup(!popup)}
          />
        </div>
      )}
      {isAuth && (
        <div className="loginIcon">
          <img src={x} alt={"выход"} onClick={() => dispatch(logout())} />
        </div>
      )}
    </header>
  );
}
