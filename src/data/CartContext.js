import { useReducer } from "react";

const initialState = {
  cart: [],
  totalPrice: 0,
  discounts: 0,
  numberOfProducts: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
      };
  }
}
