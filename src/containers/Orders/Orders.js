import React, { Component } from "react";
import HeaderImage from "../../components/Layout/HeaderImage";
import Order from "../../components/Order/Order";
import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    let orderlist = this.state.orders ? (
      this.state.orders.map(order => (
        <Order key={order.id} products={order.products} price={order.price} />
      ))
    ) : (
      <Spinner />
    );

    return (
      <div className="orders">
        <HeaderImage img="https://images.unsplash.com/photo-1506512534708-3737d46bffe1?ixlib=rb-0.3.5&s=362d8fbb24804959a225f13b2e972083&auto=format&fit=crop&w=1050&q=80" />
        {orderlist}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
