import React, { useEffect } from "react";
import "./MainNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBreakingNews } from "../../../redux/features/newsSlice";
import MainNewsCard from "./MainNewsCard/MainNewsCard";

function MainNews() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.breakingNews);

  useEffect(() => {
    dispatch(getBreakingNews({}));
  }, [dispatch]);

  console.log(newsData);

  return (
    <div className="mainNews">
      <h3 className="breaking">
        BREAKING NOW{" "}
        <img
          src="assets/images/pulse_news.gif"
          className="gif_pulse"
          alt="pulse_icon"
        />
      </h3>
      <section className="breakingNews_sec">
        {newsData.map((newsItem) => (
          <MainNewsCard key={newsItem.id} data={newsItem} />
        ))}
      </section>
    </div>
  );
}

export default MainNews;
