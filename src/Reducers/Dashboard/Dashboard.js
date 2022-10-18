import { DashboardTypes } from "../../Actions/Dashboard/DashboardTypes";

const initialState = [];

function dashboardReducer(dashboardSummary = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DashboardTypes.RETRIEVE_REQUEST_SUMMARY:
      return Object.assign({}, dashboardSummary, {
        ...dashboardSummary,
        dbSummary: payload,
      });

    case DashboardTypes.RETRIEVE_REQUESTSTATUS_SUMMARY:
      return Object.assign({}, dashboardSummary, {
        ...dashboardSummary,
        dbStatusSummary: payload,
      });

    case DashboardTypes.RETRIEVE_GRID_DETAILS:
      return Object.assign({}, dashboardSummary, {
        ...dashboardSummary,
        gridDetails: payload,
      });

    case DashboardTypes.GET_COUNTS:
      return Object.assign({}, dashboardSummary, {
        ...dashboardSummary,
        getCounts: payload,
      });

    default:
      return dashboardSummary;
  }
}

export default dashboardReducer;

export const getRequestSummary = (state = {}, { type, payload }) => {

  switch (type) {
    case DashboardTypes.RETRIEVE_REQUEST_SUMMARY:
      return { ...state, ...payload };
    
    default:
      return state;
  }
};

export const getRequestStatusSummary = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case DashboardTypes.RETRIEVE_REQUESTSTATUS_SUMMARY:
      return { ...state, ...payload };
    // case OrderTypes.REMOVE_SELECTED_ORDER:
    //   return {};
    default:
      return state;
  }
};

export const getGridDetails = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case DashboardTypes.RETRIEVE_GRID_DETAILS:
      return { ...state, ...payload };
    // case OrderTypes.REMOVE_SELECTED_ORDER:
    //   return {};
    default:
      return state;
  }
};

export const getCountDetails = (state = {}, { type, payload }) => {
  switch (type) {
    case DashboardTypes.GET_COUNTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
