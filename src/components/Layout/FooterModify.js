import React from "react";
import LogoLight from "../../assets/img/logo-light.svg";
import LogoType from "../../assets/img/logotype-lg-dark.svg";
import icLine from "../../assets/img/ic-line@.svg";
import icFacebook from "../../assets/img/ic-facebook.svg";
import FooterTitle from "../../assets/img/footer__title.svg";

const footerModify = () => {
  return (
    <>
      <div className="l-registered">
        <div className="col-container">
          <div className="col-row h-flex-lg-column h-pt-4 h-pb-4">
            <div className="l-registered__title h-flex h-align-items-center h-mb-lg-4">
              <img src={LogoLight} width="40" height="40" alt="logo" />
              <h3 className="h-inline">訂閱你我的甜蜜郵件</h3>
            </div>
            <form
              action="/"
              className="l-registered__form h-flex h-align-content-between"
            >
              <i className="fas fa-envelope l-registered__form__icon" />
              <input type="text" className="l-registered__form__text" />
              <button className="l-registered__form__submit h-ml-auto">
                <i className="fas fa-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="l-footer">
        <div className="col-container">
          <div className="col-row h-mb-4">
            <div className="l-footer__contact">
              <div className="l-footer__contact__logo h-mb-md-4">
                <img src={LogoType} width="171" height="26" alt="LOGO" />
              </div>
              <ul className="l-footer__contact__content">
                <li>
                  <a href="tel:+0712345678"> 07-1234-5678</a>
                </li>
                <li>
                  <a href="mailto:sweetaste@email.com">sweetaste@email.com</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com.tw/maps/place/Da%E2%80%99an+District,+Taipei+City/@25.0263064,121.5263363,14z/data=!3m1!4b1!4m5!3m4!1s0x3442aa2c1969f84d:0x6ea0b5cbf2d9955d!8m2!3d25.0261583!4d121.5427093"
                    target="_blank"
                  >
                    106 台北市大安區幸福路 59 號
                  </a>
                </li>
              </ul>
            </div>
            <div className="l-footer__title h-md-none">
              <img src={FooterTitle} witdt="59" height="218" alt="LOGO" />
            </div>
          </div>
          <div className="col-row h-align-items-end h-align-items-md-start h-flex-md-column">
            <ul className="l-footer__social h-flex h-mb-md-3">
              <li>
                {" "}
                <a href="#">
                  <img src={icLine} width="32" height="32" alt="IG" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <img src={icFacebook} width="32" height="32" alt="FB" />
                </a>
              </li>
            </ul>
            <div className="l-footer__copyright">
              &copy;2018 Sweetaste* All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footerModify;
