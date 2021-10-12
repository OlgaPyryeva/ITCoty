import React from "react";
import logo from "../../img/logo.svg";
import "./TraineeCard.css";

export default function TraineeCard() {
  return (
    <div className="traineeCardWrapper">
      <div className="traineeCardContainer">
        <div className="traineeCardLogo">
          <img src={logo} alt={logo} />
        </div>
        <div className="traineeCardText">
          <div className="traineeCardTitle">Wargaming</div>
          <div>Название стажировки </div>
          <div>Уровень сотрудника</div>
          <div className="traineeCardBottom">Minsk, BY</div>
        </div>
        <div className="traineeCardPrice">
          <div>вы платите $ 10</div>
          <div className="traineeCardStatus">online offline</div>
          <div className="traineeCardBtn">
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
