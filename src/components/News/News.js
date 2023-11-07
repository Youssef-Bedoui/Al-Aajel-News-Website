import React, { useEffect } from "react";
import "./News.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByCategory } from "../../redux/features/newsSlice";
import NewsCard from "../NewsCard/NewsCard";

function News({ category }) {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.news);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    dispatch(getNewsByCategory({ category }));
  }, [category, dispatch]);

  return (
    <div className="newsByCategory">
      {!newsData ? (
        <div className="loading_container">
          <h3 className="loading">Loading...</h3>
        </div>
      ) : (
        newsData.map((newsItem) => (
          <NewsCard key={newsItem.id} article={newsItem} />
        ))
      )}
    </div>
  );
}

export default News;
