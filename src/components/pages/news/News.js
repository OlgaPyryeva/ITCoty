import React from "react";
import NewsCard from "./NewsCard";
import "./News.css";
import arrowRightB from "../../img/arrowRightB.svg";

export default function News() {
  return (
    <div className="newsWrapper">
      <div className="newsContainer container">
        <div className="newsTitle">Последние новости</div>
        <div className="newsCard">
          <NewsCard />
        </div>
        <div className="allNews">
          <div>Все новости</div>
          <div>
            <img src={arrowRightB} alt="{arrowRightB}" />
          </div>
        </div>
        <div className="newsTitle">Популярные новости</div>
        <div className="newsCard">
          <NewsCard />
        </div>
        <div className="allNews">
          <div>Все новости</div>
          <div>
            <img src={arrowRightB} alt="{arrowRightB}" />
          </div>
        </div>
      </div>
    </div>
  );
}
