import React from "react";
import { Route, withRouter } from "react-router-dom";
import Logo from './../../assets/images/gold_ring_daimond.png'

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={Logo}/>
      </div>
    );
  }
}

export default withRouter(Product);

// ?