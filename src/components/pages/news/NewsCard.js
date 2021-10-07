import React from "react";
import news from "./img/news.svg";
import "./NewsCard.css";

export default function NewsCard() {
  return (
    <div className="newsWrapper">
      <div className="newsCardContainer">
        {/*временно вместо карточек новостей вставлю картинки*/}
        <div className="newsCard">
          <img src={news} alt="{news}" />
        </div>
        <div className="newsCard">
          <img src={news} alt="{news}" />
        </div>
        <div className="newsCard">
          <img src={news} alt="{news}" />
        </div>
        {/*временно картинки*/}
      </div>
    </div>
  );
}
