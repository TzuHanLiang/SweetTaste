import * as actionTypes from "./actions";

const initialState = {
  products: [
    {
      id: "2Dwoxd7",
      img: "https://bit.ly/2Dwoxd7",
      price: 350,
      tag: "新品上市",
      title: "檸檬派"
    },
    {
      id: "2QvsT63",
      img: "https://bit.ly/2QvsT63",
      price: 150,
      tag: "本日精選",
      title: "草莓優格碗"
    },
    {
      id: "2NcDVuB",
      img: "https://bit.ly/2NcDVuB",
      price: 110,
      tag: "本日精選",
      title: "蘋果派"
    },
    {
      id: "2xPn7Eq",
      img: "https://bit.ly/2xPn7Eq",
      price: 220,
      tag: "人氣精選",
      title: "舒芙蕾鬆餅"
    },
    {
      id: "2zL5jN7",
      img: "https://bit.ly/2zL5jN7",
      price: 130,
      tag: "人氣精選",
      title: "草莓奶酪"
    },
    {
      id: "2zzAQS4",
      img: "https://bit.ly/2zzAQS4",
      price: 110,
      tag: "本日精選",
      title: "希臘米布丁"
    },
    {
      id: "2zKOP7w",
      img: "https://bit.ly/2QbVsVR",
      price: 180,
      tag: "人氣精選",
      title: "莓果奶酪"
    }
  ],
  cart: [],
  count: 0,
  totalPrice: 0
};

const reducer = (state = initialState, action) => {
  const updateState = {
    ...state,
    products: [...state["products"]].map(product => {
      return { ...product };
    }),
    cart: [...state["cart"]].map(product => {
      return { ...product };
    })
  };
  let updataCart = updateState["cart"];
  let productIndex = null;

  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      //兩種update state的寫法
      return {
        ...state,
        products: [...state["products"]].map(product => {
          return { ...product };
        }),
        cart: [...state["cart"]].find(
          product => product.id === action.product.id
        )
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
    //另一種update state的寫法
    // productIndex = updataCart.findIndex(
    //   product => product.id === action.product.id
    // );
    // if (productIndex === -1) {
    //   updataCart = updataCart.concat({ ...action.product, count: 1 });
    // } else {
    //   updataCart[productIndex].count += 1;
    // }
    // updateState.cart = updataCart;
    // updateState.count += 1;
    // updateState.totalPrice += action.product.price;
    // return updateState;
    case actionTypes.REMOVE_PRODUCT:
      productIndex = updataCart.findIndex(
        product => product.id === action.product.id
      );
      updataCart[productIndex].count -= 1;
      updateState.cart = updataCart;
      updateState.count -= 1;
      updateState.totalPrice -= action.product.price;
      return updateState;

    case actionTypes.DELETE_PRODUCT:
      productIndex = updataCart.findIndex(
        product => product.id === action.product.id
      );
      updataCart = updataCart.splice(productIndex, 1);
      updateState.cart = updataCart;
      updateState.count = updataCart.reduce(
        (acc, item) => (acc += item.count),
        0
      );
      updateState.totalPrice = updataCart.reduce(
        (acc, item) => (acc += item.price),
        0
      );
      return updateState;
    default:
      return state;
  }
};

export default reducer;
