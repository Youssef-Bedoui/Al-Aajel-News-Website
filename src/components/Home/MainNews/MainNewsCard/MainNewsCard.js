import React from "react";
import "./MainNewsCard.scss";

function MainNewsCard({ data }) {
  return (
    <div className="newsCard">
      <div className="news_container">
        {data.urlToImage ? (
          <img
            src={data.urlToImage}
            alt="news"
            className="breaking_news_image"
          />
        ) : (
          <img
            src="assets/images/main_logo_english.png"
            alt="news"
            className="breaking_news_image"
          />
        )}
        <a className="news_title" href={data.url}>
          {data.title}
        </a>
        <div className="source">
          <p>{data.source.name}</p>
        </div>
      </div>
    </div>
  );
}

export default MainNewsCard;
