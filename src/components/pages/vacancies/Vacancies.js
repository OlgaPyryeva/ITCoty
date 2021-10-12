import React from "react";
import "../vacancies/Vacancies.css";
import VacanciesCard from "../vacancies/VacanciesCard";
import arrowRight from "../../img/arrowRight.svg";

export default function Vacancies() {
  return (
    <div className="vacanciesWrapper">
      <div className="vacanciesContainer container">
        <div className="vacanciesTitle">Вакансии</div>
        <div className="vacanciesCard">
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
        </div>
        <div className="allVacancies">
          <div>
            <button>Все вакансии</button>
          </div>
          <div>
            <img src={arrowRight} alt="{arrowRight}" />
          </div>
        </div>
      </div>
    </div>
  );
}
