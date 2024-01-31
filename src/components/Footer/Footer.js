import React from "react";
import "./Footer.scss";
const footer_logo = require("../../images/logo_icon_red.png");

function Footer() {
  return (
    <div id="footer">
      <img src={footer_logo} className="footer_logo" alt="Al Aajel" />
      <div>
        <p>All Rights reserved for Al Aajel News Website &copy;-2023</p>
        <p>Coded & designed by Youssef Bedoui | powered by newsapi</p>
      </div>
    </div>
  );
}

export default Footer;
