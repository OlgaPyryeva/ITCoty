import React from "react";
import logoITCoty from "../../../img/logoITCoty.svg";
import searchIcon from "../../../img/searchIcon.svg";
import loginIcon from "../../../img/loginIcon.svg";
import langIcon from "../../../img/langIcon.svg";
import burgerMenuMob from "../../../imgMobile/burgerMenuMob.png";
import avatarImgMob from "../../../imgMobile/avatarImgMob.png";
import searchImgMob from "../../../imgMobile/searchImgMob.png";
import switchBtn from "../../../imgMobile/switchBtn.png";
import { Link } from "react-router-dom";
import "./NavBar.css";



export default function NavBar(props) {
  const { setPopup, popup } = props;

  console.log("popup", popup);
  return (<>

       {/*mobile version ------------- */}

      {/* Header */}
      <div className="mobileGreyLine"></div>
      <div className="navBarHeaderMobile">
          <div className="navBurgerMobile">
            <img src={burgerMenuMob} alt="{burgerMenuMob}" />
          </div>

          <div class="navBarLogoMobile">
            <img src={logoITCoty} alt={"logoITCoty"} />
          </div>

          <div className="navRightMob">
              <div className="searchIconMob">
                <img src={searchIcon} alt={"searchIcon"} />
              </div>
              <div className="avatarImgMob">
                <img src={avatarImgMob} alt={"avatarImgMob"} />
              </div>
          </div>
      </div>

      {/* String Menu */}
      <nav className="navBarMenuMobile">
        <ul className="menuItemMobile">
          <li>
            <Link to="/vacancies">Вакансии</Link>
          </li>
          <li>
            <Link to="/traineeship">Стажировки</Link>
          </li>
          <li>
          <Link to="/traineeship">Избранное</Link>
          </li>
          <li>
          <Link to="/traineeship">Оповещения</Link>
          </li>
        </ul>
      </nav>

      {/* String search */}
      <div className="searchStrMobile">
        <form className="formSearchMobile" action="">
          <input className="inputSearchMobile" type="search" placeholder="Должность"></input>
          <button className="buttonSearchMobile" type="submit"><img src={searchImgMob} alt={"searchImgMob"} /></button>
        </form>
      </div>

       {/* Checkbox and resume */}
    <div className="checkBoxMobile">
      <div><p className="textNotificationMobile">Получать оповещения о новых вакансиях</p></div>
      <div className="toggleSwitchMobile">
      <img src={switchBtn} alt={"switchBtn"} /></div>
    </div>
    <div className="addResumeMobile"><a className="addResumeMobileLink" href="#">Добавить резюме</a></div>


      {/*desktop version  */}
    <header class="navBarHeader container">
      <div className="navBarLogo">
        <img src={logoITCoty} alt={"logoITCoty"} />
      </div>
      <nav className="navBarMenu">
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
    </>
  );
}
