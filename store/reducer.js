import { ACTIONCS } from "./actions";

export const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONCS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONCS.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONCS.ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTIONCS.ADD_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    default:
      return state;
  }
};
