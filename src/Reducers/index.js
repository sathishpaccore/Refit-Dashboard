import { combineReducers } from "redux";
import adminSummaryReducer from "./AdminSummary/AdminSummary";
import loginDataReducer from "./Login/Login";
import messageReducer from "./Messages/Messages";
// import {
//   getRequestSummary,
//   getRequestStatusSummary,
//   getGridDetails,
// } from "./Dashboard/Dashboard";
import dashboardReducer from "./Dashboard/Dashboard";
import { selectedClientDetailsReducer } from "./Requests/Requests";
import {
  selectedProductsReducer,
  certificateURLReducer,
} from "./Orders/Orders";

export default combineReducers({
  adminSummaryReducer,
  loginDataReducer,
  messageReducer,
  dashboardReducer,
  order: selectedProductsReducer,
  certificate: certificateURLReducer,
  clientDetails: selectedClientDetailsReducer,
  // requestSummary: getRequestSummary,
  // requestStatusSummary: getRequestStatusSummary,
  // gridDetails: getGridDetails,
});
