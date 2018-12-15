import React, { Component } from "react";
// import HeaderSlider from "../../components/Layout/HeaderSlider";
import pancakePic from "../../assets/img/pancake.jpeg";
import popsicle from "../../assets/img/popsicle.jpeg";
// import lemonPie from "../../assets/img/lemonpie.jpeg";
// import donuts from "../../assets/img/donuts.jpeg";
import macaron from "../../assets/img/macaron.jpeg";
import poundCake from "../../assets/img/poundCake.jpeg";
import quote1 from "../../assets/img/lg-為什麼選擇了做甜點.svg";
import quoteS1 from "../../assets/img/sm-橫式-為什麼選擇了做甜點.svg";
import quote2 from "../../assets/img/lg-為什麼一定要吃甜點.svg";
import quoteS2 from "../../assets/img/sm-橫式-為什麼一定要吃甜點.svg";
import quote3 from "../../assets/img/lg-想吃甜點是不需要理由的.svg";
import quoteS3 from "../../assets/img/sm-橫式-想吃甜點是不需要理由的.svg";
import ProductCard from "../../components/Product/ProductCard/ProductCard";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
import { NavLink } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    //因為這一頁與products page 都會使用, 只需要initializes 一次就好了
    if (!this.props.pds) {
      this.props.initProducts();
    }
  }

  render() {
    const menuList = [
      { img: pancakePic, title: "本日精選", a: "h-hero__list__block-today" },
      { img: macaron, title: "人氣推薦", a: "h-hero__list__block-popular" },
      { img: popsicle, title: "新品上市", a: "h-hero__list__block-today" }
    ];
    let products = null;

    if (this.props.pds) {
      products = this.props.pds.slice(0, 3).map(product => (
        <div className="col-1-of-3" key={product.id}>
          <ProductCard product={product} clicked={this.props.addToCart} />
        </div>
      ));
    }
    return (
      <div className="h-hero col-container">
        <div className="col-row">
          <div
            style={{
              backgroundImage: `url(${poundCake})`
            }}
            className="h-hero__bg"
          />
        </div>
        <div className="col-row h-hero__list justify-content-center">
          <ul className="h-flex">
            {menuList.map((menuItem, i) => (
              <li key={i} className="h-hero__list__block">
                <NavLink
                  to={{
                    pathname: "/products",
                    search: `?tag=${menuItem.title}`
                  }}
                  className={menuItem.a}
                >
                  <div
                    style={{
                      backgroundImage: `url(${menuItem.img})`
                    }}
                    className="h-hero__list__block__img"
                  />
                  <div className="h-hero__list__block__bg" />
                  <div className="h-hero__list__block__word">
                    {menuItem.title}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-story">
          <div className="p-story__section-mobile h-lg-block h-mt-lg-5 h-mb-lg-5">
            <img src={quoteS1} alt="為什麼選擇了做甜點" />
          </div>
          <div className="p-story__section">
            <div className="col-container">
              <div className="col-row">
                <div className="p-story__section__img">
                  <div
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=2712a33fe9b13532f0682ac4e1e749b8&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80")`
                    }}
                    className="p-story__section__img__pic"
                  />
                </div>
                <div className="p-story__section__content h-flex h-justify-content-end">
                  <div className="p-story__section__content__p">
                    <p>
                      青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                    <p>
                      是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                  </div>
                </div>
                <div className="p-story__section__title">
                  <img
                    src={quote1}
                    alt="為什麼選擇了做甜點"
                    style={{ width: "89px", height: "307px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-story__section-mobile h-none h-lg-block h-mt-lg-5 h-mb-lg-5">
            <img src={quoteS2} alt="為什麼一定要吃甜點" />
          </div>
          <div className="p-story__section p-story__section-need h-mb-lg-5">
            <div className="col-container">
              <div className="col-row">
                <div className="p-story__section__content h-flex h-justify-content-end">
                  <div className="p-story__section__content__p">
                    <p>
                      青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                    <p>
                      是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                  </div>
                </div>
                <div className="p-story__section__title">
                  <img
                    src={quote2}
                    alt="為什麼一定要吃甜點"
                    style={{ width: "89px", height: "307px" }}
                  />
                </div>
                <div className="p-story__section__img">
                  <div
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ce7267675921fc7e41b5610f49750a40&amp;auto=format&amp;fit=crop&amp;w=685&amp;q=80")`
                    }}
                    className="p-story__section__img__pic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-flex h-justify-content-center p-story__section__whyNeed__desktopTitle">
            <img
              src={quote3}
              style={{ width: "89px", height: "327px" }}
              alt="想吃甜點是不需要理由的"
            />
          </div>
          <div className="p-story__section-mobile h-lg-block h-mt-lg-5 h-mb-lg-5">
            <img src={quoteS3} alt="想吃甜點是不需要理由的" />
          </div>
          <div className="row">{products}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pds: state.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProducts: () => dispatch(actionCreator.initProducts()),
    addToCart: product => dispatch(actionCreator.addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Home, axios));
