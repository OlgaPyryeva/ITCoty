import React from "react";
import logo from "../vacancies/img/logo.svg";

export default function VacanciesCard() {
  return (
    <div className="wrapper">
      <div className="vacanciesCardContainer">
        <div className="vacanciesCardLogo">
          <img src={logo} alt={logo} />
        </div>
        <div className="vacanciesCardLeft">
          <div>Wargaming</div>
          <div>Название вакансии </div>
          <div>Уровень сотрудника</div>
          <div>Minsk, BY</div>
        </div>
        <div className="vacanciesCardRight">
          <div>$ 1100</div>
          <div>REMOTE</div>
          <div>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
