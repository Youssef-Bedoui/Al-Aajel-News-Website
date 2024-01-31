import React, { useEffect } from "react";
import "./HomeNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { getHomeNews } from "../../../redux/features/newsSlice";
import NewsCard from "../../NewsCard/NewsCard";

function HomeNews() {
  const dispatch = useDispatch();
  const homeNews = useSelector((state) => state.news.homeNews);

  useEffect(() => {
    dispatch(getHomeNews({}));
  }, [dispatch]);

  return (
    <div className="homeNews">
      <h3 className="main_news_title">More NEWS around the world</h3>
      <div className="world_news">
        {homeNews.map((article) => (
          <NewsCard article={article} />
        ))}
      </div>
    </div>
  );
}

export default HomeNews;
