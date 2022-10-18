import { RETRIEVE_CLIENTS } from "../../Actions/AdminSummary/AdminSummaryTypes";

const initialState = [];

function adminSummaryReducer(adminSummary = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_CLIENTS:
      return payload;

    default:
      return adminSummary;
  }
}

export default adminSummaryReducer;
