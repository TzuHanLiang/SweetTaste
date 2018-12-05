import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product: product
  };
};

export const removeProduct = product => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    product: product
  };
};

export const deleteProduct = product => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    product: product
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};

export const fetchedProductsFailed = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED
  };
};

// by using redux-thunk
export const initProducts = () => {
  return dispatch => {
    axios
      .get("/products.json")
      .then(res => {
        const fetchedProducts = [];
        for (let key in res.data) {
          fetchedProducts.push({
            ...res.data[key],
            productNo: key
          });
        }
        dispatch(setProducts(fetchedProducts));
      })
      .catch(error => dispatch(fetchedProductsFailed()));
  };
};

export const handleProductsList = tag => {
  return {
    type: actionTypes.HANDLE_PRODUCTS_LIST,
    tag: tag
  };
};
