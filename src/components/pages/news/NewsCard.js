import React from "react";
import news1 from "../../img/news1.svg";
import "./NewsCard.css";

export default function NewsCard() {
  return (
    <div className="newsWrapper">
      <div className="newsCardContainer">
        <div className="newsCard">
          <div className="newsCardImg">
            <img src={news1} alt="news1" className="newsImg" />
          </div>
          <div className="newsCardTitle">
            Заголовок новости и еще один заголовок новости
          </div>
          <div className="newsCardSubtitle">
            Текст статьи текст статьи текст статьи текст статьи текст статьи
            текст статьи... Читать далее
          </div>
          <div className="newsCardData">21 сентября 2021</div>
        </div>
      </div>
    </div>
  );
}
