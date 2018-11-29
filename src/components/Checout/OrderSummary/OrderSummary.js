import React from "react";

const orderSummary = props => {
  return (
    <div class="p-checkout__orderDetail">
      <div class="p-checkout__orderDetail__order">
        <div class="p-checkout__orderDetail__section">
          <h2 class="p-checkout__orderDetail__section__title h-py-3">
            訂單摘要
          </h2>
          <ul class="p-checkout__orderDetail__section__detail">
            <li class="p-checkout__orderDetail__section__detail__subTotal h-flex h-justify-content-between">
              <span>小計 </span>
              <span>NT$ 2,700</span>
            </li>
            <li class="p-checkout__orderDetail__section__detail__freight h-flex h-justify-content-between">
              <span>運費</span>
              <span>NT$ 300</span>
            </li>
            <li class="p-checkout__orderDetail__section__detail__totalPrice h-flex h-justify-content-between">
              <span>總計</span>
              <span>NT$ 3,000</span>
            </li>
          </ul>
        </div>
        <div class="p-checkout__orderDetail__section">
          <h2 class="p-checkout__orderDetail__section__title h-py-3">
            購物清單
          </h2>
          <ul class="p-checkout__orderDetail__section__productList">
            <li class="h-m-3 h-flex">
              <div
                style={{
                  height: "110px",
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=db0c8e5539456faeca0e49c79e2ccb16&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60")'
                }}
                class="p-checkout__orderDetail__section__productList__img"
              />
              <div class="p-checkout__orderDetail__section__productList__name h-pl-3 h-pb-2 h-pt-2 h-flex h-flex-column">
                <h3 className="heading-primary--xs">焦糖馬卡龍（2）</h3>
                <span className="heading-primary--sm">NT$ 900</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orderSummary;
