import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderImage from "../../components/Layout/HeaderImage";
import Order from "../../components/Order/Order";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionCreator from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orderlist = <Spinner />;

    if (!this.props.loading)
      orderlist = this.props.orders.map(order => (
        <Order key={order.id} products={order.products} price={order.price} />
      ));

    return (
      <div className="orders">
        <HeaderImage img="https://images.unsplash.com/photo-1506512534708-3737d46bffe1?ixlib=rb-0.3.5&s=362d8fbb24804959a225f13b2e972083&auto=format&fit=crop&w=1050&q=80" />
        {orderlist}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actionCreator.fetchOrders())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
