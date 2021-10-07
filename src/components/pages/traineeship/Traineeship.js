import React from "react";
import TraineeCard from "./TraineeCard";
import "./Traineeship.css";

export default function Traineeship() {
  return (
    <div className="traineeContainer">
      <div className="traineeBody">
        <div className="traineeTitle">Стажировки</div>
        <div className="traineeCard">
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
          <TraineeCard />
        </div>
      </div>
    </div>
  );
}
