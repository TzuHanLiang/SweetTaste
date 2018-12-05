import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const purchaseProductsSuccess = (id, order) => {
  return {
    type: actionTypes.PURCHASE_PRODUCTS_SUCCESS,
    orderId: id,
    orderData: order
  };
};

export const purchaseProductsFail = error => {
  return {
    type: actionTypes.PURCHASE_PRODUCTS_FAIL,
    error: error
  };
};

export const purchaseProductsStart = () => {
  return {
    type: actionTypes.PURCHASE_PRODUCTS_START
  };
};

export const purchaseProducts = order => {
  return dispatch => {
    dispatch(purchaseProductsStart());
    axios
      .post("/orders.json", order)
      .then(res => {
        dispatch(purchaseProductsSuccess(res.data.name, order));
      })
      .catch(error => {
        dispatch(purchaseProductsFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
