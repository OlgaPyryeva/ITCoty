import React from "react";
import "../vacancies/Vacancies.css";
import VacanciesCard from "../vacancies/VacanciesCard";

export default function Vacancies() {
  return (
    <div className="vacanciesWrapper">
      <div className="vacanciesContainer">
        <div className="vacanciesTitle">Вакансии</div>
        <div className="vacanciesCard">
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
        </div>
      </div>
    </div>
  );
}
