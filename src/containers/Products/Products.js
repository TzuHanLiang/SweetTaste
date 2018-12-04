import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsType from "../../store/actions";
import HeaderImage from "../../components/Layout/HeaderImage";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductMenuList from "../../components/Product/ProductMenu/ProductMenusList/ProductMenusList";
import CartSideDrawer from "../../components/Product/CartSideDrawer/CartSideDrawer";
import CartToggle from "../../components/Product/CartToggle/CartToggle";
import CartItem from "../../components/Product/CartItem/CartItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import axios from "../../axios";

class Products extends Component {
  state = {
    products: null, // this is a ui state, used to store current list of products to present on the screen.
    // totalProducts: null,
    loading: false,
    showOrderSummary: false,
    showNavigation: false
  };
  componentWillMount() {
    // axios
    //   .get("/products.json")
    //   .then(res => {
    //     const fetchedProducts = [];
    //     for (let key in res.data) {
    //       fetchedProducts.push({
    //         ...res.data[key],
    //         productNo: key
    //       });
    //       // fetchedProducts.map(p => console.log(p));
    //     }
    //     this.setState({
    //       totalProducts: fetchedProducts,
    //       products: fetchedProducts
    //     });
    //   })
    //   .catch(error => this.setState({ error: true }));
  }

  orderSummaryToggledHandler = () => {
    this.setState(preState => {
      return {
        showOrderSummary: !preState.showOrderSummary,
        showNavigation: false //這是之前cartsidedrawer放在layout的那一層寫的,希望cartsidedrawer打開時,navigationbar就會關起來
      };
    });
  };

  orderSummaryClosedHandler = () => {
    this.setState(() => {
      return { showOrderSummary: false };
    });
  };

  productListHandler = tag => {
    const totalProducts = [...this.props.pds];
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
    // const queryParams = [];
    // for (let p in this.state.cart[0]) {
    //   queryParams.push(
    //     encodeURIComponent(p) + "=" + encodeURIComponent(this.state.cart[0][p])
    //   );
    // }
    // queryParams.push("totalPrice=" + this.state.totalPrice);
    // const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout"
      // search: "?" + queryString
    });
  };

  render() {
    let products = this.state.error ? (
      <p>Products can't be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.props.pds) {
      products = this.props.pds.map(product => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            clicked={this.props.addToCart}
          />
        );
      });
    }

    const cart = this.props.cart.map((item, i) => {
      return <CartItem key={item.id + i} product={item} />;
    });
    return (
      <>
        <HeaderImage img="https://bit.ly/2Qodh3Z" />
        <CartToggle
          toggle={this.orderSummaryToggledHandler}
          show
          count={this.props.count}
        />
        <CartSideDrawer
          show={this.state.showOrderSummary}
          closed={this.orderSummaryClosedHandler}
          totalPrice={this.props.totalPrice}
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

// NOTE: mapStateToProps holds a function which receives the state automatically and which returns a javascript object where we define which property should hold which slice of the state.
const mapStateToProps = state => {
  return {
    pds: state.products,
    cart: state.cart,
    count: state.count,
    totalPrice: state.totalPrice
  };
};
// NOTE: mapDispatchToProps receives a function or holds a function which receives the dispatch function as an argument and then also the returns object with props function mappings
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product =>
      dispatch({ type: actionsType.ADD_PRODUCT, product: product })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Products, axios));
