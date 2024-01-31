import React from "react";
import "./MainNewsCard.scss";
const logo = require("../../../../images/main_logo_english.png");

function MainNewsCard({ data }) {
  return (
    <>
      {data.title !== "[Removed]" && (
        <div className="newsCard">
          <div className="news_container">
            {data.urlToImage ? (
              <img
                src={data.urlToImage}
                alt="news"
                className="breaking_news_image"
              />
            ) : (
              <img src={logo} alt="news" className="breaking_news_image" />
            )}
            <a className="news_title" href={data.url}>
              {data.title}
            </a>
            <div className="source">
              <p>{data.source.name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainNewsCard;
