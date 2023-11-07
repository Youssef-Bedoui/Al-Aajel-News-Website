import React, { useEffect, useState } from "react";
import "./LiveNews.scss";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import liveChennelsData from "./liveChannelsData.json";
import { CiStreamOn } from "react-icons/ci";

function LiveChannels() {
  const [channelsData, setChannelsData] = useState(liveChennelsData);
  const [players, setPlayers] = useState({}); // Store YouTube players
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube players when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      // After the API script is ready, you can initialize the players
      initializePlayers();
    };
  }, []);

  useEffect(() => {
    // Reinitialize the YouTube players whenever channelsData changes
    if (window.YT && typeof window.YT.Player === "function") {
      // Check if YT.Player is defined before initializing
      initializePlayers();
    }
  }, [channelsData]);

  const initializePlayers = () => {
    const newPlayers = {};
    channelsData.forEach((video) => {
      const player = new window.YT.Player(video.id, {
        videoId: video.videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
        },
      });
      newPlayers[video.id] = player;
    });
    setPlayers(newPlayers);
  };

  const filterChannels = (category) => {
    const filteredChannels = liveChennelsData.filter((channel) => {
      return channel.category === category;
    });
    setChannelsData(filteredChannels);
    setActiveCategory(category);

    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const resetFilter = () => {
    setChannelsData(liveChennelsData);
    setActiveCategory("All");
  };

  return (
    <div id="liveChennels">
      <h2>
        Live News Channels... To be always connected to the world
        <LiveTvIcon className="tv_icon" />
      </h2>
      <ul className="category_filter">
        <li
          onClick={resetFilter}
          className={activeCategory === "All" ? "active" : ""}
        >
          All
        </li>
        <li
          onClick={() => filterChannels("Arabic")}
          className={activeCategory === "Arabic" ? "active" : ""}
        >
          Arabic
        </li>
        <li
          onClick={() => filterChannels("English")}
          className={activeCategory === "English" ? "active" : ""}
        >
          English
        </li>
        <li
          onClick={() => filterChannels("French")}
          className={activeCategory === "French" ? "active" : ""}
        >
          French
        </li>
      </ul>
      <div className="newsList">
        <div className="container">
          {channelsData.map((video) => (
            <div key={video.id} className="video_player">
              <h3 className="video_title">
                <CiStreamOn className="live_icon" />
                {video.name}
              </h3>
              <div id={video.id}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveChannels;
