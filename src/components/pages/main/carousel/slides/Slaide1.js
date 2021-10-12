import React from "react";
import "./Slaide.css";

export default function Slaide1() {
  return (
    <div className="slaiderWrapper">
      <div className="slaiderContainer">
        <div className="slaiderText">
          <div className="slaiderTitle">
            <h1>Удобный поиск стажировок и вакансий в IT</h1>
          </div>
          <div className="slaiderSubtitle">
            Краткий текст с описанием преимуществ ресурса, предложение, от
            которого невозможно отказаться{" "}
          </div>
          <div className="slaiderBtn">
            <button>Подробнее</button>
          </div>
        </div>
        <div className="backgroundWrapper">
          <div className="background"></div>
          <div className="backgroundTwo"></div>
        </div>
      </div>
    </div>
  );
}
