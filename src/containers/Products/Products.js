import React, { Component } from "react";
import HeaderImage from "../../components/Layout/HeaderImage";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductMenuList from "../../components/Product/ProductMenu/ProductMenusList/ProductMenusList";
import CartSideDrawer from "../../components/Product/CartSideDrawer/CartSideDrawer";
import CartToggle from "../../components/Product/CartToggle/CartToggle";
import CartItem from "../../components/Product/CartItem/CartItem";
import Spinner from "../../components/UI/Spinner/Spinner";

import axios from "../../axios";

class Products extends Component {
  state = {
    // this will be replaced by componentDidMount to fetch data
    products: null,
    totalProducts: null,
    cart: [], //
    count: 0,
    totalPrice: 0,
    loading: false,
    error: false,
    showNavigation: false
  };
  componentDidMount = () => {
    console.log(this.props);
    axios
      .get("/products.json")
      .then(response => {
        console.log(response);
        this.setState({ totalProducts: Object.values(response.data) });
        this.setState({ products: Object.values(response.data) });
      })
      .catch(error => this.setState({ error: true }));
  };

  addProductHandler = product => {
    // 更新購物車裡面的數量(同一品項新增一個也加一)
    const oldCount = this.state.count;
    const updateCount = oldCount + 1;

    // 更新購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = 1;
      updateCart.push(product);
    } else {
      const oldCount = updateCart[index].count;
      const updateCount = oldCount + 1;
      updateCart[index].count = updateCount;
    }

    // 更新總價
    const oldPrice = this.state.totalPrice;
    const priceAddition = product.price;
    const updatePrice = oldPrice + priceAddition;

    this.setState({
      cart: updateCart,
      count: updateCount,
      totalPrice: updatePrice
    });
  };
  orderSummaryToggledHandler = () => {
    this.setState(preState => {
      return {
        showOrderSummary: !preState.showOrderSummary,
        showNavigation: false
      };
    });
  };
  orderSummaryClosedHandler = () => {
    this.setState(() => {
      return { showOrderSummary: false };
    });
  };

  productListHandler = tag => {
    const totalProducts = [...this.state.totalProducts];
    if (tag === "所有甜點") {
      this.setState({ products: totalProducts });
    } else {
      const updateProducts = totalProducts.filter(
        product => product.tag === tag
      );
      this.setState({ products: updateProducts });
    }
  };
  // 利用query params傳購物車裡面的第一的商品到order頁面
  purchasingContinueHandler = () => {
    const queryParams = [];
    for (let p in this.state.cart[0]) {
      queryParams.push(
        encodeURIComponent(p) + "=" + encodeURIComponent(this.state.cart[0][p])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/order-summary",
      search: "?" + queryString
    });
  };

  render() {
    let products = this.state.error ? (
      <p>Products can't be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.state.products) {
      products = this.state.products.map(product => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            clicked={this.addProductHandler}
          />
        );
      });
    }

    const cart = this.state.cart.map((item, i) => {
      return <CartItem key={item.id + i} product={item} />;
    });
    return (
      <>
        <HeaderImage />
        <CartToggle
          toggle={this.orderSummaryToggledHandler}
          show
          count={this.state.count}
        />
        <CartSideDrawer
          show={this.state.showOrderSummary}
          closed={this.orderSummaryClosedHandler}
          totalPrice={this.state.totalPrice}
          continue={this.purchasingContinueHandler}
        >
          {cart}
        </CartSideDrawer>
        <div className="product">
          <div className="row">
            <div className="col-1-of-3 ">
              <ProductMenuList filter={this.productListHandler} />
            </div>
            <div className="col-2-of-3">{products}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
