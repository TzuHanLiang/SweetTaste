import React from "react";
import LogoLight from "../../assets/img/logo-light.svg";
import LogoType from "../../assets/img/logotype-lg-dark.svg";
import icLine from "../../assets/img/ic-line@.svg";
import icFacebook from "../../assets/img/ic-facebook.svg";
import FooterTitle from "../../assets/img/footer__title.svg";
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__subscribe">
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__register-title">
              <span className="footer__logo-box--1">
                <img src={LogoLight} alt="Logo" className="footer__logo--1" />
              </span>
              <span className="heading-primary--main">訂閱你我的甜蜜郵件</span>
            </div>
          </div>
          <div className="col-1-of-2">
            <form action="#" className="footer__register-form">
              <i className="fas fa-envelope footer__email-icon" />
              <input type="text" className="footer__email-text" />
              <button className="footer__email-submit">
                <i className="fas fa-arrow-right footer__arrow-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__contact-info">
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__logo-box--2">
              <img
                src={LogoType}
                width="171"
                height="26"
                alt="Logo"
                className="footer__logo--2"
              />
            </div>
            <ul className="footer__contact-list">
              <li>
                <a href="#" className="footer__contact-link">
                  03-5517212
                </a>
              </li>
              <li>
                <a href="#" className="footer__contact-link">
                  sweetaste@email.com
                </a>
              </li>
              <li>
                <a href="#" className="footer__contact-link">
                  新竹縣竹北市幸福路二段60號
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <div className="footer__title-box">
              <img
                src={FooterTitle}
                witdt="59"
                height="218"
                alt="title"
                className="footer__title"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__social-info">
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <img src={icLine} alt="Instagram" width="32" height="32" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <img src={icFacebook} alt="Fackbook" width="32" height="32" />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          &copy;2018 Sweetaste* All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default footer;
