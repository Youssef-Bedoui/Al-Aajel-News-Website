import React from "react";
import "./NewsCard.scss";

function NewsCard({ article }) {
  const publishedAt = new Date(article.publishedAt).toLocaleDateString();
  console.log(article, "aticle");
  return (
    <a
      href={article.url}
      className="news_article"
      target="_blank"
      rel="noreferrer"
      alt={article.title}
      title={article.title}
    >
      <div className="article_image">
        {article.urlToImage ? (
          <img src={article.urlToImage} alt="Source Logo" />
        ) : (
          <img src="assets/images/main_logo_english.png" alt="Article" />
        )}
      </div>
      <div className="article_info">
        <div className="source_info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="source_name">{article.source.name}</span>
          </div>
          <div>
            <span className="source_name">{article.author}</span>
          </div>
        </div>
        <div className="article_title">
          <h3>{article.title}</h3>
        </div>
        <div className="published_info">
          <p className="published_label">Published at :</p>
          <span className="published_date">{publishedAt}</span>
        </div>
      </div>
    </a>
  );
}

export default NewsCard;
