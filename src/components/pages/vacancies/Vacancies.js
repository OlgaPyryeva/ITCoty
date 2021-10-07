import React from "react";
import "../vacancies/Vacancies.css";
import VacanciesCard from "../vacancies/VacanciesCard";

export default function Vacancies() {
  return (
    <div className="vacanciesContainer">
      <div className="vacanciesBody">
        <div className="vacanciesTitle">Вакансии</div>
        <div className="vacanciesCard">
          <VacanciesCard />
        </div>
      </div>
    </div>
  );
}
