import React from "react";
import TraineeCard from "./TraineeCard";
import "./Traineeship.css";
import arrowRightB from "../../img/arrowRightB.svg";

export default function Traineeship() {
  return (
    <div className="traineeWrapper">
      <div className="traineeContainer container">
        <div className="traineeTitle">Стажировки</div>
        <div className="traineeCard">
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
        </div>
        <div className="allTrainee">
          <div>Все стажировки</div>
          <div>
            <img src={arrowRightB} alt="{arrowRightB}" />
          </div>
        </div>
      </div>
    </div>
  );
}
