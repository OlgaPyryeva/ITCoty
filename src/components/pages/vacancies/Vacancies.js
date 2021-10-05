import React from "react";
import "../vacancies/Vacancies.css";
import VacanciesCard from "../vacancies/VacanciesCard";

export default function Vacancies() {
  return (
    <div className="container">
      <div className="vacanciesTitle">Вакансии</div>
      <VacanciesCard />
    </div>
  );
}
