import React from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import news from "../../img/news.svg";

export default function NewsCard() {
  return (
    <div className="newsWrapper">
      <div className="newsCardContainer">
        <div className="newsCard">
          <div className="newsCardImg">
            <img src={news} alt="news" className="newsImg" />
          </div>
          <div className="newsCardTitle">
            Заголовок новости и еще один заголовок новости
          </div>
          <div className="newsCardSubtitle">
            Текст статьи текст статьи текст статьи текст статьи текст статьи
            текст статьи... <Link to="/news">Читать далее </Link>
          </div>
          <div className="newsCardData">21 сентября 2021</div>
        </div>
      </div>
    </div>
  );
}
