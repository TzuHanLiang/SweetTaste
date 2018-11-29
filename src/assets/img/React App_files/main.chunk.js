(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n            transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n            transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n            transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n            transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  5% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  17% {\n    opacity: 1; }\n  30% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px);\n            transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px); }\n  100% {\n    opacity: 0; } }\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  5% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  17% {\n    opacity: 1; }\n  30% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px);\n            transform: rotate(0deg) scale(1.2) skew(0deg) translate(0px); }\n  100% {\n    opacity: 0; } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\n::-moz-selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\n::selection {\n  background-color: #3f5d45;\n  color: #fff; }\n\nbody {\n  font-family: PingFang TC, \"Helvetica Neue\", Times, sans-serif;\n  font-weight: 400;\n  /*font-size: 16px;*/\n  line-height: 1.7;\n  color: #3f5d45;\n  display: inline-block; }\n\n.heading-primary--large {\n  font-weight: 600;\n  font-size: 3.6rem;\n  color: #eaf0ed; }\n\n.heading-primary--medium {\n  font-weight: 600;\n  font-size: 2.4rem; }\n  .heading-primary--medium--lightest {\n    color: #eaf0ed; }\n  .heading-primary--medium--light--light {\n    color: #8da291;\n    font-weight: 300; }\n\n.heading-primary--sm {\n  font-size: 2rem;\n  font-weight: 600; }\n  .heading-primary--sm--light {\n    font-weight: 300; }\n\n.heading-primary--xs {\n  font-weight: 300;\n  font-size: 1.6rem; }\n  .heading-primary--xs--b {\n    font-weight: 600; }\n    .heading-primary--xs--b--lightest {\n      color: #eaf0ed; }\n    .heading-primary--xs--b--light {\n      color: #8da291; }\n  .heading-primary--xs--light {\n    color: #8da291; }\n\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #8da291, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 0.2rem;\n  transition: all 0.2s; }\n  @media only screen and (max-width: 56.25em) {\n    .heading-secondary {\n      font-size: 3rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  .heading-secondary:hover {\n    -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);\n            transform: skewY(2deg) skewX(15deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.paragraph {\n  font-size: 1.6rem; }\n  .paragraph:not(:last-child) {\n    margin-bottom: 3rem; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 5rem !important; } }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n.btn, .btn:link, .btn:visited {\n  text-decoration: none;\n  padding: 1.6rem;\n  transition: all 0.2s;\n  position: relative;\n  text-align: center;\n  display: block;\n  width: 100%;\n  border: none;\n  cursor: pointer; }\n\n.btn:active, .btn:focus {\n  background-color: #ccdbd4;\n  outline: none; }\n\n.btn--light {\n  background-color: #eaf0ed;\n  color: #3f5d45; }\n  .btn--light:hover {\n    background-color: #ccdbd4; }\n\n.btn--green {\n  background-color: #3f5d45;\n  color: #fff; }\n  .btn--green::after {\n    background-color: #3f5d45; }\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s; }\n\n.btn--animated {\n  -webkit-animation: moveInBottom 0.5s ease-out 0.75s;\n          animation: moveInBottom 0.5s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards; }\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #3f5d45;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid #3f5d45;\n  padding: 3px;\n  transition: all 0.2s; }\n\n.btn-text:hover {\n  background-color: #3f5d45;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px); }\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.product__card {\n  width: 30rem;\n  margin: 2rem;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  float: left; }\n  .product__card__img-box {\n    position: relative;\n    height: 31.5rem; }\n  .product__card__img {\n    height: 31.5rem;\n    width: 33rem;\n    position: relative;\n    background-size: cover;\n    background-position: center; }\n  .product__card__info {\n    padding: 1.4rem; }\n  .product__card__tag {\n    position: absolute;\n    top: 0;\n    left: 2rem;\n    color: #fff;\n    background-color: #3f5d45;\n    -webkit-writing-mode: vertical-lr;\n            writing-mode: vertical-lr;\n    padding: 2.56rem 1rem;\n    letter-spacing: 0.5rem;\n    font-size: 1.6rem; }\n\n.product__sideDrawer {\n  position: fixed;\n  width: 30rem;\n  max-width: 70%;\n  height: 100%;\n  right: 0;\n  top: 0;\n  z-index: 1502;\n  background-color: #fff;\n  padding: 3.2rem 1.6rem;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n  overflow: scroll; }\n  .product__sideDrawer--open {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; }\n  .product__sideDrawer--close {\n    -webkit-transform: translateX(30rem);\n            transform: translateX(30rem);\n    opacity: 0; }\n\n.product__aside {\n  margin: 2rem; }\n  .product__aside__title {\n    background: #3f5d45;\n    color: #fff;\n    text-align: center;\n    padding: 2rem; }\n\n.product__cart-item {\n  border-bottom: 1px solid grey;\n  position: relative;\n  margin-top: 2.5rem; }\n  .product__cart-item__img {\n    width: 15rem;\n    height: 15.75rem; }\n  .product__cart-item__price {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem; }\n\n.cart-toggle {\n  position: fixed;\n  top: 0rem;\n  right: 1rem;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n  z-index: 1503;\n  cursor: pointer;\n  transition: 0.3s all; }\n  .cart-toggle__icon {\n    color: #3f5d45;\n    display: block;\n    font-weight: bold;\n    line-height: 8rem;\n    height: 8rem;\n    padding-left: 4.8rem;\n    padding-right: 4.8rem;\n    padding-top: 1.5rem; }\n    .cart-toggle__icon:hover, .cart-toggle__icon:active {\n      background: #3f5d45;\n      color: #fff; }\n    .cart-toggle__icon i {\n      font-size: 2.4rem; }\n  .cart-toggle__title {\n    color: white;\n    background-color: red;\n    font-size: 1.4rem;\n    position: relative;\n    padding: 2px 6px;\n    top: -1.8rem;\n    right: 0.8rem;\n    border-radius: 50%; }\n\n.footer {\n  padding: 10rem 0; }\n  @media only screen and (max-width: 56.25em) {\n    .footer {\n      padding: 8rem 0; } }\n  .footer__subscribe {\n    background: #3f5d45;\n    margin-top: 3.75rem; }\n  .footer__register-title {\n    display: flex !important;\n    margin-bottom: 1.5rem !important;\n    align-items: center !important; }\n  .footer__logo-box--1 {\n    margin-right: 2rem;\n    width: 4rem;\n    height: auto; }\n    @media only screen and (max-width: 56.25em) {\n      .footer__logo-box--1 {\n        margin-bottom: 6rem; } }\n  .footer__logo--1 {\n    width: 4rem;\n    height: 4rem; }\n  .footer__register-form {\n    background: #eaf0ed;\n    height: 3.5rem;\n    position: relative;\n    flex-grow: 1; }\n  .footer__email-icon {\n    display: inline-block;\n    line-height: 1;\n    font-size: 2.4rem;\n    font-weight: 900;\n    position: absolute;\n    top: 1.6rem;\n    left: 1.6rem;\n    color: #3f5d45; }\n  .footer__email-text {\n    width: calc(100% - 64px);\n    margin: 0;\n    padding: 16px 20px 16px 64px;\n    line-height: 24px;\n    background-color: #eaf0ed;\n    border: 0;\n    border-radius: 0; }\n  .footer__arrow-icon {\n    margin: 0;\n    padding: 2rem 2.4rem 2rem;\n    color: #3f5d45;\n    font-size: 1.6rem;\n    border: none;\n    background-color: #ffe180; }\n\n.row {\n  max-width: 114rem;\n  margin: 0 auto; }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media only screen and (max-width: 56.25em) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media only screen and (max-width: 56.25em) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 6rem; }\n      @media only screen and (max-width: 56.25em) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media only screen and (max-width: 56.25em) {\n      .row [class^=\"col-\"] {\n        width: 100% !important; } }\n  .row .col-1-of-2 {\n    width: calc((100% - 6rem) / 2); }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 6rem) / 3); }\n  .row .col-2-of-3 {\n    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem); }\n  .row .col-1-of-4 {\n    width: calc((100% - 3 * 6rem) / 4); }\n  .row .col-2-of-4 {\n    width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem); }\n  .row .col-3-of-4 {\n    width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem); }\n\n.header-image {\n  max-width: 940px;\n  margin-right: auto;\n  margin-left: auto; }\n  .header-image__container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .header-image__img {\n    height: 49.6rem;\n    width: 100%;\n    background-position: center center;\n    background-size: cover; }\n\n@media (max-width: 767px) {\n  .header-image__container__img {\n    height: auto;\n    min-height: 17rem; } }\n\n.Navigation__header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  z-index: 1500;\n  display: flex;\n  flex-wrap: wrap;\n  height: 10rem; }\n\n.Navigation__nav {\n  position: absolute;\n  top: -1.5rem;\n  right: 15rem;\n  height: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__nav {\n      display: none; } }\n\n.Navigation__logo-box {\n  position: fixed;\n  top: 4rem;\n  left: 2.5rem;\n  width: 24rem;\n  display: block;\n  z-index: 10000; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__logo-box {\n      position: fixed;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%); } }\n\n.Navigation__list {\n  list-style: none;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 1rem 0;\n  width: 100%; }\n  @media only screen and (max-width: 56.25em) {\n    .Navigation__list {\n      flex-flow: column; } }\n\n.Navigation__item {\n  margin: 0;\n  display: flex;\n  height: 100%;\n  width: auto;\n  align-items: center; }\n\n.Navigation__link, .Navigation__link:link, .Navigation__link:visited {\n  transition: 0.3s all;\n  text-decoration: none;\n  transition: all 0.3s;\n  position: relative;\n  font-size: 2rem;\n  color: #3f5d45;\n  display: block;\n  font-weight: bold;\n  line-height: 8rem;\n  height: 8rem;\n  text-align: -webkit-match-parent;\n  padding: 2rem 1rem;\n  cursor: pointer; }\n  .Navigation__link:hover, .Navigation__link:active, .Navigation__link:link:hover, .Navigation__link:link:active, .Navigation__link:visited:hover, .Navigation__link:visited:active {\n    background: #3f5d45;\n    color: #fff; }\n\n@media only screen and (max-width: 56.25em) {\n  .Navigation__button {\n    background-color: #3f5d45;\n    height: 6rem;\n    width: 6rem;\n    position: fixed;\n    top: 2rem;\n    left: 2.5rem;\n    border-radius: 3px;\n    z-index: 1550;\n    text-align: center;\n    cursor: pointer; } }\n\n.Navigation__icon {\n  position: relative;\n  margin-top: 3rem;\n  z-index: 2; }\n  .Navigation__icon, .Navigation__icon::before, .Navigation__icon::after {\n    width: 3rem;\n    height: 2px;\n    background-color: #fff;\n    display: inline-block; }\n  .Navigation__icon::before, .Navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all 0.2s; }\n  .Navigation__icon::before {\n    top: -0.8rem; }\n  .Navigation__icon::after {\n    top: 0.8rem; }\n\n.Navigation__Drawer {\n  position: fixed;\n  width: 100%;\n  height: 40%;\n  right: 0;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n  padding: 4.5rem 1.6rem;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out; }\n  .Navigation__Drawer--open {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; }\n  .Navigation__Drawer--close {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UI/Backdrop/Backdrop.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Backdrop_Backdrop__L1D6e {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 1501;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", ""]);

// exports
exports.locals = {
	"Backdrop": "Backdrop_Backdrop__L1D6e"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/UI/Spinner/Spinner.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Spinner_Loader__1k5hq {\n  color: #3f5d45;\n  font-size: 20px;\n  margin: 100px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: Spinner_load4__18Sp4 1.3s infinite linear;\n  animation: Spinner_load4__18Sp4 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes Spinner_load4__18Sp4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes Spinner_load4__18Sp4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n", ""]);

// exports
exports.locals = {
	"Loader": "Spinner_Loader__1k5hq",
	"load4": "Spinner_load4__18Sp4"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hoc/Layout/Layout */ "./src/hoc/Layout/Layout.js");
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Products/Products */ "./src/containers/Products/Products.js");
/* harmony import */ var _containers_Order_Order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/Order/Order */ "./src/containers/Order/Order.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Header/Footer */ "./src/components/Header/Footer.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/App.js";








var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/products",
        component: _containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/order",
        component: _containers_Order_Order__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/img/footer__title.svg":
/*!******************************************!*\
  !*** ./src/assets/img/footer__title.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/footer__title.b435e6f7.svg";

/***/ }),

/***/ "./src/assets/img/ic-facebook.svg":
/*!****************************************!*\
  !*** ./src/assets/img/ic-facebook.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ic-facebook.3d7755ce.svg";

/***/ }),

/***/ "./src/assets/img/ic-line@.svg":
/*!*************************************!*\
  !*** ./src/assets/img/ic-line@.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ic-line@.b101abfd.svg";

/***/ }),

/***/ "./src/assets/img/logo-all-dark.svg":
/*!******************************************!*\
  !*** ./src/assets/img/logo-all-dark.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-all-dark.6734d368.svg";

/***/ }),

/***/ "./src/assets/img/logo-light.svg":
/*!***************************************!*\
  !*** ./src/assets/img/logo-light.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-light.c0a6f030.svg";

/***/ }),

/***/ "./src/assets/img/logotype-lg-dark.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/logotype-lg-dark.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logotype-lg-dark.d63fce88.svg";

/***/ }),

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://sweet-taste.firebaseio.com"
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/components/Header/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/logo-light.svg */ "./src/assets/img/logo-light.svg");
/* harmony import */ var _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/logotype-lg-dark.svg */ "./src/assets/img/logotype-lg-dark.svg");
/* harmony import */ var _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/ic-line@.svg */ "./src/assets/img/ic-line@.svg");
/* harmony import */ var _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/ic-facebook.svg */ "./src/assets/img/ic-facebook.svg");
/* harmony import */ var _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/footer__title.svg */ "./src/assets/img/footer__title.svg");
/* harmony import */ var _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Header/Footer.js";







var footer = function footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__register-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "footer__logo-box--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logo_light_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    className: "footer__logo--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u8A02\u95B1\u4F60\u6211\u7684\u751C\u871C\u90F5\u4EF6"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "#",
    className: "footer__register-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-envelope footer__email-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "footer__email-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "footer__email-submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-arrow-right footer__arrow-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__logo-box--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logotype_lg_dark_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: "171",
    height: "26",
    alt: "Logo",
    className: "footer__logo--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer__contact-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "footer__contact-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "03-5517212")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "footer__contact-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "sweetaste@email.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "footer__contact-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u65B0\u7AF9\u7E23\u7AF9\u5317\u5E02\u5E78\u798F\u8DEF\u4E8C\u6BB560\u865F")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__title-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_footer_title_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    witdt: "59",
    height: "218",
    alt: "title",
    className: "footer__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__social-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer__social-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer__social-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "footer__social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_ic_line_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Instagram",
    width: "32",
    height: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer__social-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "footer__social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_ic_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Fackbook",
    width: "32",
    height: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\xA92018 Sweetaste* All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/components/Header/HeaderImage.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderImage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Header/HeaderImage.js";


var headerImage = function headerImage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-image__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1512484457149-266d165a4eca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=786581a33fd6c9343735655439ce2e5a&auto=format&fit=crop&w=800&q=60",
    alt: "Header",
    className: "header-image__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (headerImage);

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/logo-all-dark.svg */ "./src/assets/img/logo-all-dark.svg");
/* harmony import */ var _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Logo/Logo.js";



var logo = function logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Navigation__logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    className: "Navigation__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_logo_all_dark_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./src/components/Navigation/NavDrawer/NavDrawer.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/NavDrawer/NavDrawer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationList/NavigationList */ "./src/components/Navigation/NavigationList/NavigationList.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Navigation/NavDrawer/NavDrawer.js";



var navDrawer = function navDrawer(props) {
  var show = props.show,
      closed = props.closed;
  var attachedClasses = ["Navigation__Drawer", "Navigation__Drawer--close"];

  if (show) {
    attachedClasses = ["Navigation__Drawer", "Navigation__Drawer--open"];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: attachedClasses.join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (navDrawer);

/***/ }),

/***/ "./src/components/Navigation/NavToggle/NavToggle.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/NavToggle/NavToggle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Navigation/NavToggle/NavToggle.js";


var navToggle = function navToggle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation__toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation__button",
    onClick: props.toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Navigation__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (navToggle);

/***/ }),

/***/ "./src/components/Navigation/Navbar/Navbar.js":
/*!****************************************************!*\
  !*** ./src/components/Navigation/Navbar/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationList/NavigationList */ "./src/components/Navigation/NavigationList/NavigationList.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Navigation/Navbar/Navbar.js";



var NavigationNavbar = function NavigationNavbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Navigation__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "Navigation__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationList_NavigationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationNavbar);

/***/ }),

/***/ "./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js":
/*!***********************************************************************************!*\
  !*** ./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js";


var navigationItem = function navigationItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "Navigation__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.link,
    className: props.active ? "Navigation__link--active Navigation__link" : "Navigation__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItem);

/***/ }),

/***/ "./src/components/Navigation/NavigationList/NavigationList.js":
/*!********************************************************************!*\
  !*** ./src/components/Navigation/NavigationList/NavigationList.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./src/components/Navigation/NavigationList/NavigationItem/NavigationItem.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Navigation/NavigationList/NavigationList.js";



var navigationItems = function navigationItems(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "Navigation__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/",
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u9996\u9801"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u751C\u9EDE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u767B\u5165/\u8A3B\u518A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItems);

/***/ }),

/***/ "./src/components/Product/CartItem/CartItem.js":
/*!*****************************************************!*\
  !*** ./src/components/Product/CartItem/CartItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Product/CartItem/CartItem.js";


var cartItem = function cartItem(props) {
  var product = props.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item__img-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: product.img,
    alt: "Item",
    className: "product__cart-item__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1-of-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading-primary--sm heading-primary--sm--light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading-primary--xs ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u8CFC\u8CB7\u6578\u91CF: ", product.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__cart-item__price heading-primary--sm ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "NT$ ", product.price * product.count))));
};

/* harmony default export */ __webpack_exports__["default"] = (cartItem);

/***/ }),

/***/ "./src/components/Product/CartSideDrawer/CartSideDrawer.js":
/*!*****************************************************************!*\
  !*** ./src/components/Product/CartSideDrawer/CartSideDrawer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Product/CartSideDrawer/CartSideDrawer.js";



var cartSideDrawer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(cartSideDrawer, _Component);

  function cartSideDrawer() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, cartSideDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(cartSideDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return nextProps.show !== _this.props.show || nextProps.children !== _this.props.children;
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(cartSideDrawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          closed = _this$props.closed,
          children = _this$props.children;
      var attachedClasses = ["product__sideDrawer", "product__sideDrawer--close"];

      if (show) {
        attachedClasses = ["product__sideDrawer", "product__sideDrawer--open"];
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
        show: show,
        clicked: closed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: attachedClasses.join(" "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        onClick: closed,
        className: "heading-primary--medium",
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u8CFC\u7269\u8ECA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, children)));
    }
  }]);

  return cartSideDrawer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (cartSideDrawer);

/***/ }),

/***/ "./src/components/Product/CartToggle/CartToggle.js":
/*!*********************************************************!*\
  !*** ./src/components/Product/CartToggle/CartToggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Product/CartToggle/CartToggle.js";


var cartToggle = function cartToggle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-toggle",
    onClick: props.toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-toggle__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cart-toggle__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.count)));
};

/* harmony default export */ __webpack_exports__["default"] = (cartToggle); // https://yanoon.com.tw/shop/products.html

/***/ }),

/***/ "./src/components/Product/ProductCard/ProductCard.js":
/*!***********************************************************!*\
  !*** ./src/components/Product/ProductCard/ProductCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Product/ProductCard/ProductCard.js";



var productCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(productCard, _Component);

  function productCard() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, productCard);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(productCard).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(productCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          clicked = _this$props.clicked;
      var tag = product.tag ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__tag ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, product.tag) : null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__img-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: product.img,
        alt: "Item",
        className: "product__card__img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), tag), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-1-of-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__title heading-primary--sm heading-primary--sm--light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, product.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-1-of-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "product__card__price heading-primary--sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "NT$ ", product.price)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn--light heading-primary--medium",
        onClick: function onClick() {
          return clicked(product);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u52A0\u5230\u8CFC\u7269\u8ECA"));
    }
  }]);

  return productCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

productCard.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (productCard);

/***/ }),

/***/ "./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js":
/*!*********************************************************************************!*\
  !*** ./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js";


var productMenusList = function productMenusList(props) {
  var filters = ["所有甜點", "本日精選", "人氣精選", "新品上市"];
  var menus = filters.map(function (filter, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: i,
      onClick: function onClick() {
        return props.filter(filter);
      },
      className: "btn btn--light heading-primary--medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, filter);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__aside ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product__aside__title heading-primary--medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u751C\u9EDE\u985E\u5225"), menus);
};

/* harmony default export */ __webpack_exports__["default"] = (productMenusList); // eslint-disable-next-line no-lone-blocks

{
  /* <div className="product__aside">
        <div className="product__aside__title">甜點類別</div>
        <ul className="product__aside__list">
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              所有甜點
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              本日精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              人氣精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              新品上市
            </a>
          </li>
        </ul>
      </div> */
}

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.js":
/*!************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.module.css */ "./src/components/UI/Backdrop/Backdrop.module.css");
/* harmony import */ var _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/UI/Backdrop/Backdrop.js";



var backdrop = function backdrop(props) {
  return props.show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Backdrop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Backdrop,
    onClick: props.clicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.module.css":
/*!********************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Backdrop.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Backdrop/Backdrop.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/UI/Spinner/Spinner.js":
/*!**********************************************!*\
  !*** ./src/components/UI/Spinner/Spinner.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.module.css */ "./src/components/UI/Spinner/Spinner.module.css");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/components/UI/Spinner/Spinner.js";



var spinner = function spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Loader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Loading...");
};

/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./src/components/UI/Spinner/Spinner.module.css":
/*!******************************************************!*\
  !*** ./src/components/UI/Spinner/Spinner.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Spinner.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/UI/Spinner/Spinner.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Order/Order.js":
/*!***************************************!*\
  !*** ./src/containers/Order/Order.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/containers/Order/Order.js";


var Order =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Order, _Component);

  function Order() {
    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Order);

    return Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Order).apply(this, arguments));
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Order, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-2-of-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Order__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\u60A8\u7684\u8CFC\u7269\u8ECA"))));
    }
  }]);

  return Order;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/containers/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/containers/Products/Products.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header_HeaderImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/HeaderImage */ "./src/components/Header/HeaderImage.js");
/* harmony import */ var _components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Product/ProductCard/ProductCard */ "./src/components/Product/ProductCard/ProductCard.js");
/* harmony import */ var _components_Product_ProductMenu_ProductMenusList_ProductMenusList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Product/ProductMenu/ProductMenusList/ProductMenusList */ "./src/components/Product/ProductMenu/ProductMenusList/ProductMenusList.js");
/* harmony import */ var _components_Product_CartSideDrawer_CartSideDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Product/CartSideDrawer/CartSideDrawer */ "./src/components/Product/CartSideDrawer/CartSideDrawer.js");
/* harmony import */ var _components_Product_CartToggle_CartToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Product/CartToggle/CartToggle */ "./src/components/Product/CartToggle/CartToggle.js");
/* harmony import */ var _components_Product_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Product/CartItem/CartItem */ "./src/components/Product/CartItem/CartItem.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");






var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/containers/Products/Products.js";










var Products =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      // this will be replaced by componentDidMount to fetch data
      products: null,
      totalProducts: null,
      cart: [],
      //
      count: 0,
      totalPrice: 0,
      loading: false,
      error: false,
      showNavigation: false
    };

    _this.componentDidMount = function () {
      _axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/products.json").then(function (response) {
        console.log(response);

        _this.setState({
          totalProducts: Object.values(response.data)
        });

        _this.setState({
          products: Object.values(response.data)
        });
      }).catch(function (error) {
        return _this.setState({
          error: true
        });
      });
    };

    _this.addProductHandler = function (product) {
      // 更新購物車裡面的數量(同一品項新增一個也加一)
      var oldCount = _this.state.count;
      var updateCount = oldCount + 1; // 更新購物車裡面的物品

      var updateCart = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.cart);

      var index = updateCart.findIndex(function (item) {
        return item.id === product.id;
      });

      if (index === -1) {
        product.count = 1;
        updateCart.push(product);
      } else {
        var _oldCount = updateCart[index].count;

        var _updateCount = _oldCount + 1;

        updateCart[index].count = _updateCount;
      } // 更新總價


      var oldPrice = _this.state.totalPrice;
      var priceAddition = product.price;
      var updatePrice = oldPrice + priceAddition;

      _this.setState({
        cart: updateCart,
        count: updateCount,
        totalPrice: updatePrice
      });
    };

    _this.orderSummaryToggledHandler = function () {
      _this.setState(function (preState) {
        return {
          showOrderSummary: !preState.showOrderSummary,
          showNavigation: false
        };
      });
    };

    _this.orderSummaryClosedHandler = function () {
      _this.setState(function () {
        return {
          showOrderSummary: false
        };
      });
    };

    _this.productListHandler = function (tag) {
      var totalProducts = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.totalProducts);

      if (tag === "所有甜點") {
        _this.setState({
          products: totalProducts
        });
      } else {
        var updateProducts = totalProducts.filter(function (product) {
          return product.tag === tag;
        });

        _this.setState({
          products: updateProducts
        });
      }
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Products, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.state.error ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Products can't be loaded") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      });

      if (this.state.products) {
        products = this.state.products.map(function (product) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: product.id,
            product: product,
            clicked: _this2.addProductHandler,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          });
        });
      }

      var cart = this.state.cart.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: item.id + i,
          product: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header_HeaderImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartToggle_CartToggle__WEBPACK_IMPORTED_MODULE_11__["default"], {
        toggle: this.orderSummaryToggledHandler,
        show: true,
        count: this.state.count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_CartSideDrawer_CartSideDrawer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        show: this.state.showOrderSummary,
        closed: this.orderSummaryClosedHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, cart, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          margin: "2.5rem 0"
        },
        className: "heading-primary--medium ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\u7E3D\u8A08: NT$ ", this.state.totalPrice), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn--light heading-primary--medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\b\u6AA2\u8996\u8CFC\u7269\u8ECA"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-1-of-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Product_ProductMenu_ProductMenusList_ProductMenusList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        filter: this.productListHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-2-of-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, products))));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navigation/Navbar/Navbar */ "./src/components/Navigation/Navbar/Navbar.js");
/* harmony import */ var _components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navigation/NavDrawer/NavDrawer */ "./src/components/Navigation/NavDrawer/NavDrawer.js");
/* harmony import */ var _components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Navigation/NavToggle/NavToggle */ "./src/components/Navigation/NavToggle/NavToggle.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/hoc/Layout/Layout.js";






var layout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(layout, _Component);

  function layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(layout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showNavigation: false,
      showOrderSummary: false // 用來控制cartSideDrawer的開關

    };

    _this.navigationClosedHandler = function () {
      _this.setState({
        showNavigation: false
      });
    };

    _this.navigationToggledHandler = function () {
      _this.setState(function (preState) {
        return {
          showNavigation: !preState.showNavigation,
          showOrderSummary: false
        };
      });
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Sweets_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        toggle: this.navigationToggledHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        show: this.state.showNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        show: this.state.showNavigation,
        closed: this.navigationClosedHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        style: {
          marginTop: "7.2rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/index.js";






var app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(app, document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Sweets/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map