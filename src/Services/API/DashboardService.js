import http from "../../Helpers/AuthHelpers/http-common";

class DashboardDataService {
  getRequestSummary(
    ClientID,
    OrderID,
    ActionType,
    Status,
    DateType,
    FromDate,
    ToDate
  ) {
    let data = {};
    data["ClientID"] = ClientID;
    data["OrderID"] = OrderID;
    data["ActionType"] = ActionType;
    data["Status"] = Status;
    data["DateType"] = DateType;
    data["FromDate"] = FromDate;
    data["ToDate"] = ToDate;

    // console.log("data object", data);
    return http.post("/requests/getrequestdata", data);
  }

  getRequestStatusSummary(
    ClientID,
    OrderID,
    ActionType,
    Status,
    DateType,
    FromDate,
    ToDate
  ) {
    let data = {};
    data["ClientID"] = ClientID;
    data["OrderID"] = OrderID;
    data["ActionType"] = ActionType;
    data["Status"] = Status;
    data["DateType"] = DateType;
    data["FromDate"] = FromDate;
    data["ToDate"] = ToDate;

    // console.log("data object", data);
    return http.post("/requests/RequestStatusSummary", data);
  }

  getGridDetails(
    ClientID,
    OrderID,
    ActionType,
    Status,
    DateType,
    FromDate,
    ToDate,
    page,
    page_size
  ) {
    let data = {};
    data["ClientID"] = ClientID;
    data["SearchKey"] = OrderID;
    data["ActionType"] = ActionType;
    data["Status"] = Status;
    data["DateType"] = DateType;
    data["FromDate"] = FromDate;
    data["ToDate"] = ToDate;
    data["page"] = page;
    data["page_size"] = page_size;
    // console.log("data object", data);
    return http.post("/requests/getallrequests", data);
  }

  getCounts(ClientID, OrderID, ActionType, Status, DateType, FromDate, ToDate) {
    let data = {};
    data["ClientID"] = ClientID;
    data["OrderID"] = OrderID;
    data["ActionType"] = ActionType;
    data["Status"] = Status;
    data["DateType"] = DateType;
    data["FromDate"] = FromDate;
    data["ToDate"] = ToDate;

    return http.post("/requests/getCounts", data);
  }
}

export default new DashboardDataService();
