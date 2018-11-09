import React from "react";
import { Route, withRouter } from "react-router-dom";
import Landing from "./Landing/Landing";
import Products from "./Products/Products";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/products" component={Products} />
      </div>
    );
  }
}

export default withRouter(Layout);