import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: null, //totalProducts
  productsList: null, //products show on the page
  error: false,
  cart: [],
  count: 0,
  totalPrice: 0,
  shippingFee: 200
};

const addProduct = (state, action) => {
  return {
    ...state,
    products: [...state["products"]].map(product => {
      return { ...product };
    }),
    cart: [...state["cart"]].find(product => product.id === action.product.id)
      ? [...state["cart"]].map(product => {
          return {
            ...product,
            count:
              product.id === action.product.id
                ? product.count + 1
                : product.count
          };
        })
      : [...state["cart"]].concat({ ...action.product, count: 1 }),
    count: state["count"] + 1,
    totalPrice: state["totalPrice"] + action.product["price"]
  };
};

const removeProduct = (state, action) => {
  return {
    ...state,
    products: [...state["products"]].map(product => {
      return { ...product };
    }),
    cart: [...state["cart"]].map(product => {
      return {
        ...product,
        count:
          product.id === action.product.id ? product.count - 1 : product.count
      };
    }),
    count: state["count"] - 1,
    totalPrice: state["totalPrice"] - action.product["price"]
  };
};
const deleteProduct = (state, action) => {
  const updateState = {
    ...state,
    products: [...state["products"]].map(product => {
      return { ...product };
    }),
    cart: [...state["cart"]].map(product => {
      return { ...product };
    })
  };
  let updateCart = updateState["cart"];
  const productIndex = updateCart.findIndex(
    product => product.id === action.product.id
  );
  updateCart.splice(productIndex, 1);
  updateState.cart = updateCart;
  updateState.count = updateCart.reduce((acc, item) => (acc += item.count), 0);
  updateState.totalPrice = updateCart.reduce(
    (acc, item) => (acc += item.price),
    0
  );
  return updateState;
};
const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products,
    productsList: action.products,
    error: false,
    cart: [],
    count: 0,
    totalPrice: 0
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return addProduct(state, action);
    case actionTypes.REMOVE_PRODUCT:
      return removeProduct(state, action);
    case actionTypes.DELETE_PRODUCT:
      return deleteProduct(state, action);
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
