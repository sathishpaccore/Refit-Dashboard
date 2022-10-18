import { RequestTypes } from "../../Actions/Requests/RequestTypes";

const initialState = {
  clientDetails: {},
};

export const selectedClientDetailsReducer = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case RequestTypes.GET_CLIENT_DETAILS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const addRequestReducer = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case RequestTypes.ADD_REQUEST_SUCCESSFUL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
