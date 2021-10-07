import React from "react";
import traineeCard from "./img/traineeCard.svg";

export default function TraineeCard() {
  return (
    <div className="traineeWrapper">
      <div className="traineeCardContainer">
        {/* <div className="traineeCardLogo">
      <img src={logo} alt={logo} />
    </div>
    <div className="traineeCardLeft">
      <div>Wargaming</div>
      <div>Название стажировки </div>
      <div>Уровень сотрудника</div>
      <div>Minsk, BY</div>
    </div>
    <div className="traineeCardRight">
      <div>вы платите $ 10</div>
      <div>online offline</div>
      <div>
        <button>Подробнее</button>
      </div>
    </div> */}

        {/*временно вместо карточек вакансий вставлю картинки*/}

        <div className="traineeCard">
          <img src={traineeCard} alt="{traineeCard}" />
        </div>
        {/*временно картинки*/}
      </div>
    </div>
  );
}
