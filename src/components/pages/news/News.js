import React from "react";
import NewsCard from "./NewsCard";
import "./News.css";

export default function News() {
  return (
    <div className="newsWrapper">
      <div className="newsContainer container">
        <div className="newsTitle">Последние новости</div>
        <div className="newsCard">
          <NewsCard />
        </div>
        <div className="newsTitle">Популярные новости</div>
        <div className="newsCard">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
