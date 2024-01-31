import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
const logo = require("../../images/main_logo_english.png");

function Navbar() {
  return (
    <nav id="navbar">
      <NavLink className="menuNavNavLinkItem logo" to="/">
        <img
          className="logo_img"
          src={logo}
          alt="logo"
          title="Al Aajel HomePage"
        />
      </NavLink>
      <div className="menu">
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/latestNews"
        >
          Breaking News
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/business"
        >
          BUSINESS
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/entertainment"
        >
          ENTERTAINMENT
        </NavLink>
        <NavLink activeClassName="active" className="menuLinkItem" to="/health">
          HEALTH
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/science"
        >
          SCIENCE
        </NavLink>
        <NavLink activeClassName="active" className="menuLinkItem" to="/sports">
          SPORTS
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/technology"
        >
          TECHNOLOGY
        </NavLink>
      </div>

      <div className="liveChannels">
        <NavLink to="/liveNews">
          <LiveTvIcon className="live_icon" activeClassName="active" />
          LIVE NEWS
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
