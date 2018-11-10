import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Landing.css";
import Background from "./../../assets/images/landing/background.jpg";
import Logo from "./../../assets/images/landing/logo.png";

class Landing extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.history.push("/products");
    }, 4000);
  }
  
  render() {
    return (
      <div
        id="landing-page"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <img src={Logo} alt="img" id="landing-page-logo" />
      </div>
    );
  }
}

export default withRouter(Landing);
