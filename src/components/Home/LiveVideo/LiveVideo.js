import React, { useEffect } from "react";
import "./LiveVideo.scss";
import { CiStreamOn } from "react-icons/ci";

function LiveVideo() {
  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        height: "360",
        width: "640",
        videoId: "gCNeDWCI0vo", // Replace with your video ID
        playerVars: {
          autoplay: 1, // Auto-play (1 means true)
          mute: 1, // Mute (1 means true)
        },
      });
    };
  }, []);

  return (
    <div className="liveVideo">
      <h3 className="video_title">
        <CiStreamOn className="live_icon" />
        Live news from Al jazeera English channel
      </h3>
      <div id="youtube-player"></div>
    </div>
  );
}

export default LiveVideo;
