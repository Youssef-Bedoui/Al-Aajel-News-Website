import React from "react";
import "./Home.scss";
import LiveVideo from "./LiveVideo/LiveVideo";
import MainNews from "./MainNews/MainNews";
import HomeNews from "./HomeNews/HomeNews";

function Home() {
  return (
    <div id="Home">
      <div className="top_news">
      <MainNews />
      <LiveVideo />
      </div>
      <HomeNews />
    </div>
  );
}

export default Home;
