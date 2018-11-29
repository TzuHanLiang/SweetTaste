webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n            transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n            transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n            transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n            transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  5% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  17% {\n    opacity: 1; }\n  30% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px);\n            transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px); }\n  100% {\n    opacity: 0; } }\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  5% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  17% {\n    opacity: 1; }\n  30% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px);\n            transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px); }\n  100% {\n    opacity: 0; } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\n::-moz-selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\n::selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\nbody {\n  font-family: PingFang TC, \"Helvetica Neue\", Times, sans-serif;\n  font-weight: 400;\n  /*font-size: 16px;*/\n  line-height: 1.7;\n  color: #3f5d45;\n  display: inline-block; }\n\n.heading-primary--large {\n  font-weight: 600;\n  font-size: 3.6rem;\n  color: #eaf0ed; }\n\n.heading-primary--medium {\n  font-weight: 600;\n  font-size: 2.4rem; }\n  .heading-primary--medium--lightest {\n    color: #eaf0ed; }\n  .heading-primary--medium--light--light {\n    color: #8da291;\n    font-weight: 300; }\n\n.heading-primary--sm {\n  font-size: 2rem;\n  font-weight: 600; }\n  .heading-primary--sm--light {\n    font-weight: 300; }\n\n.heading-primary--xs {\n  font-weight: 300;\n  font-size: 1.6rem; }\n  .heading-primary--xs--b {\n    font-weight: 600; }\n    .heading-primary--xs--b--lightest {\n      color: #eaf0ed; }\n    .heading-primary--xs--b--light {\n      color: #8da291; }\n  .heading-primary--xs--light {\n    color: #8da291; }\n\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #8da291, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 0.2rem;\n  transition: all 0.2s; }\n  @media only screen and (max-width: 56.25em) {\n    .heading-secondary {\n      font-size: 3rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  .heading-secondary:hover {\n    -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);\n            transform: skewY(2deg) skewX(15deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.paragraph {\n  font-size: 1.6rem; }\n  .paragraph:not(:last-child) {\n    margin-bottom: 3rem; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 5rem !important; } }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n.btn, .btn:link, .btn:visited {\n  text-decoration: none;\n  padding: 1.6rem;\n  transition: all 0.2s;\n  position: relative;\n  text-align: center;\n  display: block;\n  width: 100%;\n  border: none;\n  cursor: pointer; }\n\n.btn:active, .btn:focus {\n  background-color: #ccdbd4;\n  outline: none; }\n\n.btn--light {\n  background-color: #eaf0ed;\n  color: #3f5d45; }\n  .btn--light:hover {\n    background-color: #ccdbd4; }\n\n.btn--green {\n  background-color: #3f5d45;\n  color: #fff; }\n  .btn--green::after {\n    background-color: #3f5d45; }\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s; }\n\n.btn--animated {\n  -webkit-animation: moveInBottom 0.5s ease-out 0.75s;\n          animation: moveInBottom 0.5s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards; }\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #3f5d45;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid #3f5d45;\n  padding: 3px;\n  transition: all 0.2s; }\n\n.btn-text:hover {\n  background-color: #3f5d45;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px); }\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.product {\n  width: 100%;\n  margin: 0 auto; }\n  .product__card {\n    width: 30rem;\n    margin: 2rem;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n    float: left; }\n    .product__card__img-box {\n      position: relative;\n      height: 31.5rem; }\n    .product__card__img {\n      height: 31.5rem;\n      width: 33rem;\n      position: relative;\n      background-size: cover;\n      background-position: center; }\n    .product__card__info {\n      padding: 1.4rem; }\n    .product__card__tag {\n      position: absolute;\n      top: 0;\n      left: 2rem;\n      color: #fff;\n      background-color: #3f5d45;\n      -webkit-writing-mode: vertical-lr;\n              writing-mode: vertical-lr;\n      padding: 2.56rem 1rem;\n      letter-spacing: 0.5rem;\n      font-size: 1.6rem; }\n  .product__sideDrawer {\n    position: fixed;\n    width: 30rem;\n    max-width: 70%;\n    height: 100%;\n    right: 0;\n    top: 0;\n    z-index: 1502;\n    background-color: #fff;\n    padding: 3.2rem 1.6rem;\n    box-sizing: border-box;\n    transition: all 0.3s ease-out;\n    overflow: scroll; }\n    .product__sideDrawer--open {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1; }\n    .product__sideDrawer--close {\n      -webkit-transform: translateX(30rem);\n              transform: translateX(30rem);\n      opacity: 0; }\n  .product__aside {\n    margin: 2rem; }\n    .product__aside__title {\n      background: #3f5d45;\n      color: #fff;\n      text-align: center;\n      padding: 2rem; }\n  .product__cart-item {\n    border-bottom: 1px solid grey;\n    position: relative;\n    margin-top: 2.5rem; }\n    .product__cart-item__img {\n      width: 15rem;\n      height: 15.75rem; }\n    .product__cart-item__price {\n      position: absolute;\n      bottom: 1rem;\n      right: 1rem; }\n\n.cart-toggle {\n  position: fixed;\n  top: 0rem;\n  right: 1rem;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n  z-index: 1503;\n  cursor: pointer;\n  transition: 0.3s all; }\n  .cart-toggle__icon {\n    color: #3f5d45;\n    display: block;\n    font-weight: bold;\n    line-height: 8rem;\n    height: 8rem;\n    padding-left: 4.8rem;\n    padding-right: 4.8rem;\n    padding-top: 1.5rem; }\n    .cart-toggle__icon:hover, .cart-toggle__icon:active {\n      background: #3f5d45;\n      color: #fff; }\n    .cart-toggle__icon i {\n      font-size: 2.4rem; }\n  .cart-toggle__title {\n    color: white;\n    background-color: red;\n    font-size: 1.4rem;\n    position: relative;\n    padding: 2px 6px;\n    top: -1.8rem;\n    right: 0.8rem;\n    border-radius: 50%; }\n\n.footer {\n  padding: 10rem 0; }\n  @media only screen and (max-width: 56.25em) {\n    .footer {\n      padding: 8rem 0; } }\n  .footer__subscribe {\n    background: #3f5d45;\n    margin-top: 3.75rem; }\n  .footer__register-title {\n    display: flex !important;\n    margin-bottom: 1.5rem !important;\n    align-items: center !important; }\n  .footer__logo-box--1 {\n    margin-right: 2rem;\n    width: 4rem;\n    height: auto; }\n    @media only screen and (max-width: 56.25em) {\n      .footer__logo-box--1 {\n        margin-bottom: 6rem; } }\n  .footer__logo--1 {\n    width: 4rem;\n    height: 4rem; }\n  .footer__register-form {\n    background: #eaf0ed;\n    height: 3.5rem;\n    position: relative;\n    flex-grow: 1; }\n  .footer__email-icon {\n    display: inline-block;\n    line-height: 1;\n    font-size: 2.4rem;\n    font-weight: 900;\n    position: absolute;\n    top: 1.6rem;\n    left: 1.6rem;\n    color: #3f5d45; }\n  .footer__email-text {\n    width: calc(100% - 64px);\n    margin: 0;\n    padding: 16px 20px 16px 64px;\n    line-height: 24px;\n    background-color: #eaf0ed;\n    border: 0;\n    border-radius: 0; }\n  .footer__arrow-icon {\n    margin: 0;\n    padding: 2rem 2.4rem 2rem;\n    color: #3f5d45;\n    font-size: 1.6rem;\n    border: none;\n    background-color: #ffe180; }\n\n.row {\n  max-width: 114rem;\n  margin: 0 auto; }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media only screen and (max-width: 56.25em) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media only screen and (max-width: 56.25em) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 6rem; }\n      @media only screen and (max-width: 56.25em) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media only screen and (max-width: 56.25em) {\n      .row [class^=\"col-\"] {\n        width: 100% !important; } }\n  .row .col-1-of-2 {\n    width: calc((100% - 6rem) / 2); }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 6rem) / 3); }\n  .row .col-2-of-3 {\n    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem); }\n  .row .col-1-of-4 {\n    width: calc((100% - 3 * 6rem) / 4); }\n  .row .col-2-of-4 {\n    width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem); }\n  .row .col-3-of-4 {\n    width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem); }\n\n.header-image {\n  max-width: 940px;\n  margin-right: auto;\n  margin-left: auto; }\n  .header-image__container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .header-image__img {\n    height: 49.6rem;\n    width: 100%;\n    background-position: center center;\n    background-size: cover; }\n\n@media (max-width: 767px) {\n  .header-image__container__img {\n    height: auto;\n    min-height: 17rem; } }\n\n.Navigation__header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  z-index: 1500;\n  display: flex;\n  flex-wrap: wrap;\n  height: 10rem; }\n\n.Navigation__nav {\n  position: absolute;\n  top: -1.5rem;\n  right: 15rem;\n  height: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__nav {\n      display: none; } }\n\n.Navigation__logo-box {\n  position: fixed;\n  top: 4rem;\n  left: 2.5rem;\n  width: 24rem;\n  display: block;\n  z-index: 10000; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__logo-box {\n      position: fixed;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%); } }\n\n.Navigation__list {\n  list-style: none;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 1rem 0;\n  width: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__list {\n      flex-flow: column; } }\n\n.Navigation__item {\n  margin: 0;\n  display: flex;\n  height: 100%;\n  width: auto;\n  align-items: center; }\n\n.Navigation__link, .Navigation__link:link, .Navigation__link:visited {\n  transition: 0.3s all;\n  text-decoration: none;\n  transition: all 0.3s;\n  position: relative;\n  font-size: 2rem;\n  color: #3f5d45;\n  display: block;\n  font-weight: bold;\n  line-height: 8rem;\n  height: 8rem;\n  text-align: -webkit-match-parent;\n  padding: 2rem 1rem;\n  cursor: pointer; }\n  .Navigation__link:hover, .Navigation__link:active, .Navigation__link:link:hover, .Navigation__link:link:active, .Navigation__link:visited:hover, .Navigation__link:visited:active {\n    background: #3f5d45;\n    color: #fff; }\n\n@media only screen and (max-width: 56.25em) {\n  .Navigation__button {\n    background-color: #3f5d45;\n    height: 6rem;\n    width: 6rem;\n    position: fixed;\n    top: 2rem;\n    left: 2.5rem;\n    border-radius: 3px;\n    z-index: 1550;\n    text-align: center;\n    cursor: pointer; } }\n\n.Navigation__icon {\n  position: relative;\n  margin-top: 3rem;\n  z-index: 2; }\n  .Navigation__icon, .Navigation__icon::before, .Navigation__icon::after {\n    width: 3rem;\n    height: 2px;\n    background-color: #fff;\n    display: inline-block; }\n  .Navigation__icon::before, .Navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all 0.2s; }\n  .Navigation__icon::before {\n    top: -0.8rem; }\n  .Navigation__icon::after {\n    top: 0.8rem; }\n\n.Navigation__Drawer {\n  position: fixed;\n  width: 100%;\n  height: 40%;\n  right: 0;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n  padding: 4.5rem 1.6rem;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out; }\n  .Navigation__Drawer--open {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; }\n  .Navigation__Drawer--close {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=main.0d01334f524ade9416d6.hot-update.js.map