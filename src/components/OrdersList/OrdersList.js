import React, { Component } from "react";
import Order from "../Order";

// using map function in here

class OrdersList extends Component {
  render() {
    return <Order product={this.props} />;
  }
}

export default OrdersList;
