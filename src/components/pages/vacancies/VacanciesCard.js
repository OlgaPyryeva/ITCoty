import React from "react";
import logo from "../../img/logo.svg";
import "./VacanciesCard.css";

export default function VacanciesCard() {
  return (
    <div className="vacanciesWrapper">
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
  );
}
