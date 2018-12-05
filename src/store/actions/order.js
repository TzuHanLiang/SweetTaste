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

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
