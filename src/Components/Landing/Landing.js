import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Background from "./../../assets/images/landing/background.jpg";
import Logo from "./../../assets/images/landing/logo.png";

class Landing extends React.Component {
  render() {
    return (
      <div
        id="landing-page"
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          width: "100%"
        }}
      >
        <img src={Logo} alt="img" id="landing-page-logo" />
        <div id="next-btn">
          <Link to="/products">></Link>
        </div>
      </div>
    );
  }
}

export default Landing;
