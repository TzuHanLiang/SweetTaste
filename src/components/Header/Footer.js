import React from "react";

const footer = () => {
  return (
    <footer class="footer">
      <div class="footer__subscribe">
        <div className="row">
          <div className="col-1-of-2">
            <span className="footer__logo-box--1">
              <img
                src="./assets/img/logo-light.svg"
                width="40"
                height="40"
                alt="Logo"
                className="footer__logo--1"
              />
            </span>
            <span className="heading__primary-main">訂閱你我的甜蜜郵件</span>
          </div>
          <div className="col-1-of-2">
            <form action="#" className="footer__email-form">
              <i className="fas fa-envelope footer__email-icon--1" />
              <input type="text" className="footer__email-input-text" />
              <button className="footer__email-submit">
                <i className="fas fa-arrow-right footer__email-icon--2" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__contact-info">
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__logo-box--2">
              <img
                src="./assets/img/logotype-lg-dark.svg"
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
          <div class="col-1-of-2">
            <div className="footer__title-box">
              <img
                src="./assets/img/footer__title.svg"
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
              <img
                src="./assets/img/ic-line@.svg"
                alt="Instagram"
                width="32"
                height="32"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <img
                src="./assets/img/ic-facebook.svg"
                alt="Fackbook"
                width="32"
                height="32"
              />
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
