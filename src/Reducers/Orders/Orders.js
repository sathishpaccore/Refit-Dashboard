import { OrderTypes } from "../../Actions/Orders/OrderTypes.js";

const initialState = {
  orders: [],
};

// function ordersReducer(order = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case RETRIEVE_ORDER_SUMMARY:
//       return Object.assign({}, order, {
//         ...order,
//         orderSummary: payload,
//       });

//     default:
//       return order;
//   }
// }

// export default ordersReducer;

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case OrderTypes.SELECTED_ORDER:
      return { ...state, ...payload };
    case OrderTypes.REMOVE_SELECTED_ORDER:
      return {};
    default:
      return state;
  }
};

export const certificateURLReducer = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case OrderTypes.CERTIFICATE_URL:
      return { ...state, ...payload };
    case OrderTypes.REMOVED_CERTIFICATE_URL:
      return {};
    default:
      return state;
  }
};
