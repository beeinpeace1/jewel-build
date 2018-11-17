import React from "react";
import { Route, withRouter } from "react-router-dom";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.pdt.img}/>
      </div>
    );
  }
}

export default withRouter(Product);

// ?