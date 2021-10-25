import React from "react";
import logo from "../../img/logo.svg";
import marker from "../../imgMobile/marker.png";
import remote from "../../imgMobile/remote.png";
import money from "../../imgMobile/money.png";
import point from "../../imgMobile/point.png";
import "./VacanciesCard.css";

export default function VacanciesCard() {
  return (<>
  <div className="vacanciesDesktop">
    <div className="vacanciesWrapperDesktop">
      <div className="vacanciesCardContainer">
        <div className="vacanciesCardLogo">
          <img src={logo} alt={logo} />
        </div>
        <div className="vacanciesCardText">
          <div className="vacanciesCardTitle">Wargaming</div>
          <div>Название вакансии </div>
          <div>Уровень сотрудника</div>
          <div className="vacanciesCardBottom">Minsk, BY</div>
        </div>
        <div className="vacanciesCardPrice">
          <div>$ 1100</div>
          <div className="vacanciesCardStatus">REMOTE</div>
          <div>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/*mobile version ------------- */}
    <div className="vacanciesMobile">
    <div className="vacanciesWrapperMobile">
      <div className="vacanciesCardContainer">
              <div className="vacanciesCardLogo">
                <img src={logo} alt={logo} />
              </div>
                <div className="vacanciesCardTitle">Wargaming</div>
                <div className="nameVacancies">Название вакансии</div>
                <div className="lavelWorker">Уровень сотрудника</div>
                 <div className="markerVacanciesMobile"><img src={marker} alt="{marker}" /></div>
                <div className="vacanciesCardBottom">
                <img src={point} alt="{point}" />Minsk, BY</div>
                <div className="vacanciesPrice">
                <img src={money} alt="{money}" />$ 1100</div>
                <div className="vacanciesCardStatus">
                <img src={remote} alt="{remote}" />REMOTE</div>
    </div>
    </div>
    </div>
    </>
  );
}
