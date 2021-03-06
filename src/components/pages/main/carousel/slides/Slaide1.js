import React from "react";
import "./Slaide.css";
import imgOne from "../../../../img/imgOne.svg";

export default function Slaide1() {
  return (
    <div className="slaiderWrapper">
      <div className="backgroundWrapper">
        <div className="background"></div>
        <div className="backgroundTwo"></div>
      </div>
      <div className="slaiderContainer">
        <div className="slaiderText">
          <div className="slaiderTitle">
            <div>
              Удобный поиск стажировок <br /> и вакансий в IT
            </div>
          </div>
          <div className="slaiderSubtitle">
            Краткий текст с описанием преимуществ ресурса, предложение, от
            которого невозможно отказаться{" "}
          </div>
          <div className="slaiderBtn">
            <button>Подробнее</button>
          </div>
        </div>

        <div className="slaiderImg">
          <img src={imgOne} alt="img one" />
        </div>
      </div>
    </div>
  );
}
