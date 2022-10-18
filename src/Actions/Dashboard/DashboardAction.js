import { DashboardTypes } from "./DashboardTypes";
import DashboardDataService from "../../Services/API/DashboardService";

export const retrieveRequestSummary =
  (ClientID, OrderID, ActionType, Status, DateType, FromDate, ToDate) =>
  async (dispatch) => {
    try {
      const res = await DashboardDataService.getRequestSummary(
        ClientID,
        OrderID,
        ActionType,
        Status,
        DateType,
        FromDate,
        ToDate
      );
    
      dispatch({
        type: DashboardTypes.RETRIEVE_REQUEST_SUMMARY,
        payload: res.data,
      });
    } catch (err) {
    
    }
  };

export const retrieveRequestStatusSummary =
  (ClientID, OrderID, ActionType, Status, DateType, FromDate, ToDate) =>
  async (dispatch) => {
    try {
      const res = await DashboardDataService.getRequestStatusSummary(
        ClientID,
        OrderID,
        ActionType,
        Status,
        DateType,
        FromDate,
        ToDate
      );
      dispatch({
        type: DashboardTypes.RETRIEVE_REQUESTSTATUS_SUMMARY,
        payload: res.data,
      });
    } catch (err) {

    }
  };

export const retrieveGridDetails =
  (
    ClientID,
    OrderID,
    ActionType,
    Status,
    DateType,
    FromDate,
    ToDate,
    page,
    page_size
  ) =>
  async (dispatch) => {
    try {
      const res = await DashboardDataService.getGridDetails(
        ClientID,
        OrderID,
        ActionType,
        Status,
        DateType,
        FromDate,
        ToDate,
        page,
        page_size
      );
     
      dispatch({
        type: DashboardTypes.RETRIEVE_GRID_DETAILS,
        payload: res.data,
      });
    } catch (err) {
     
    }
  };

export const retrievegetCountsSummary =
  (ClientID, OrderID, ActionType, Status, DateType, FromDate, ToDate) =>
  async (dispatch) => {
    try {
      const res = await DashboardDataService.getCounts(
        ClientID,
        OrderID,
        ActionType,
        Status,
        DateType,
        FromDate,
        ToDate
      );
      dispatch({
        type: DashboardTypes.GET_COUNTS,
        payload: res.data,
      });
    } catch (err) {
    
    }
  };

export const retrieveRequestSummaryF = (request) => {
  return {
    type: DashboardTypes.RETRIEVE_REQUEST_SUMMARY,
    payload: request,
  };
};

export const retrieveRequestStatusSummaryF = (requestStatus) => {
  return {
    type: DashboardTypes.RETRIEVE_REQUESTSTATUS_SUMMARY,
    payload: requestStatus,
  };
};

export const retrieveGridDetailsF = (gridDetails) => {
  return {
    type: DashboardTypes.RETRIEVE_GRID_DETAILS,
    payload: gridDetails,
  };
};

export const removeRequestSummaryF = () => {
  return {
    type: DashboardTypes.REMOVE_REQUEST_SUMMARY,
  };
};

export const removeRequestStatusSummaryF = () => {
  return {
    type: DashboardTypes.REMOVE_REQUESTSTATUS_SUMMARY,
  };
};

export const removeGridDetailsF = () => {
  return {
    type: DashboardTypes.REMOVE_GRID_DETAILS,
  };
};
