import React, { Component } from "react";
import HeaderImage from "../../components/Layout/HeaderImage";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";

class checkoutSuccess extends Component {
  componentDidMount() {
    this.props.initProducts();
  }

  render() {
    // const checkoutSuccess = () => {
    return (
      <div className="checkout__success">
        <HeaderImage img="https://bit.ly/2P7GhNd" />
        <div className="checkout__success__title">
          <ul className="checkout__success__progress h-flex h-justify-content-between h-flex-grow-1">
            <li>
              <i className="fas fa-check-circle" />
            </li>
            <li>
              <i className="fas fa-check-circle" />
            </li>
            <li>
              <i className="fas fa-check-circle" />
            </li>
          </ul>
          <h2 className="heading-primary--large-g">付款成功</h2>
          <ul className="checkout__success__btnGroup h-flex ">
            <li className="h-flex-grow-1">
              <NavLink
                className="btn btn--yellow-b heading-primary--medium"
                to="/"
              >
                繼續逛逛
              </NavLink>
            </li>
            <li className="h-flex-grow-1">
              <NavLink
                className="btn btn--yellow-b heading-primary--medium"
                to="/orders"
                exact
              >
                我的訂單
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initProducts: () => dispatch(actionCreator.initProducts())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(checkoutSuccess);
