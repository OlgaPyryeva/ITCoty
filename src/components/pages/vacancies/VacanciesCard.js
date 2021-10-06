import React from "react";
import vacancieCard from "../vacancies/img/vacancieCard.svg";

export default function VacanciesCard() {
  return (
    <div className="vacanciesWrapper">
      <div className="vacanciesCardContainer">
        {/* <div className="vacanciesCardLogo">
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
        </div> */}

        {/*временно вместо карточек вакансий вставлю картинки*/}
        <div className="vacanciesCard">
          <img src={vacancieCard} alt="{vacancieCard}" />
        </div>
        <div className="vacanciesCard">
          <img src={vacancieCard} alt="{vacancieCard}" />
        </div>
        <div className="vacanciesCard">
          <img src={vacancieCard} alt="{vacancieCard}" />
        </div>
        <div className="vacanciesCard">
          <img src={vacancieCard} alt="{vacancieCard}" />
          <div className="vacanciesCard">
            <img src={vacancieCard} alt="{vacancieCard}" />
          </div>
          <div className="vacanciesCard">
            <img src={vacancieCard} alt="{vacancieCard}" />
          </div>
          <div className="vacanciesCard">
            <img src={vacancieCard} alt="{vacancieCard}" />
          </div>
          <div className="vacanciesCard">
            <img src={vacancieCard} alt="{vacancieCard}" />
          </div>
          {/*временно картинки*/}
        </div>
      </div>
    </div>
  );
}
