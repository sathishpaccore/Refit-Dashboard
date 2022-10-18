import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dashboard.css";
import ReactPaginate from "react-paginate";
import {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
} from "../../Actions/Dashboard/DashboardAction";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import OrderSummary from "../Orders/OrderSummary";
import PlaceOrder from "../Orders/PlaceOrder";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.changeActionType = this.changeActionType.bind(this);
    this.changeDateType = this.changeDateType.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeOrderID = this.changeOrderID.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeFromDate = this.changeFromDate.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeToDate = this.changeToDate.bind(this);

    this.state = {
      ClientID: sessionStorage.getItem("ClientID"),
      OrderID: "",
      ActionType: "All",
      Status: "All",
      DateType: "1",
      FromDate: "",
      ToDate: "",
      Year: "",
      month: "",
      cData: {},
      getStatusSummaryData: {},
      getRequestStatusSummaryData: {},
      getGridData: [],
      currentIndex: -1,
      page: 1,
      count: Math.ceil(sessionStorage.getItem("gridCount") / 10),
      page_size: 10,
      gridCounts: {},
    };
    this.pageSizes = [10, 25, 50, 75, 100];
  }

  componentDidMount() {
    this.getCounts();
    this.getStatusSummary();
    this.getRequestStatusSummary();
    this.getGridDatas();
  }

  getCounts() {
    this.props.retrievegetCountsSummary(
      this.state.ClientID,
      this.state.OrderID,
      this.state.ActionType,
      this.state.Status,
      this.state.DateType,
      this.state.FromDate,
      this.state.ToDate
    );
  }

  getStatusSummary() {
    this.props.retrieveRequestSummary(
      this.state.ClientID,
      this.state.OrderID,
      this.state.ActionType,
      this.state.Status,
      this.state.DateType,
      this.state.FromDate,
      this.state.ToDate
    );
  }

  getRequestStatusSummary() {
    this.props.retrieveRequestStatusSummary(
      this.state.ClientID,
      this.state.OrderID,
      this.state.ActionType,
      this.state.Status,
      this.state.DateType,
      this.state.FromDate,
      this.state.ToDate
    );
  }

  getGridDatas() {
    this.props.retrieveGridDetails(
      this.state.ClientID,
      this.state.OrderID,
      this.state.ActionType,
      this.state.Status,
      this.state.DateType,
      this.state.FromDate,
      this.state.ToDate,
      this.state.page,
      this.state.page_size
    );
  }

  handlePageChange = (event) => {
    let x = event.selected + 1;
    this.setState(
      {
        page: Number(x),
      },
      () => {
        this.getGridDatas();
      }
    );
  };

  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1,
      },
      () => {
        this.getGridDatas();
      }
    );
  }

  searchButtonClick = () => {
    this.getCounts();
    this.getStatusSummary();
    this.getRequestStatusSummary();
    this.getGridDatas();
  }

  changeActionType(e) {
    this.setState({
      ActionType: e.target.value,
    });
  }

  changeDateType(e) {
    this.setState({
      DateType: e.target.value,
    });
  }

  changeStatus(e) {
    this.setState({
      Status: e.target.value,
    });
  }

  changeOrderID(e) {
    this.setState({
      OrderID: e.target.value,
    });
  }

  changeYear(e) {
    this.setState({
      Year: e.target.value,
    });
  }

  changeFromDate(e) {
    this.setState({
      FromDate: e.target.value,
    });
  }

  changeMonth(e) {
    this.setState({
      month: e.target.value,
    });
  }

  changeToDate(e) {
    this.setState({
      ToDate: e.target.value,
    });
  }

  onOrderIDClick(e) {
    <OrderSummary orderId={e} />;
  }

  render() {
    this.state.gridCounts = this.props.getCounts;
    this.state.getStatusSummaryData = this.props.requestSummary;
    this.state.getRequestStatusSummaryData = this.props.requestStatusSummary;
    this.state.getGridData = this.props.gridDetails;

    if (
      this.state.gridCounts !== undefined &&
      Object.keys(this.state.gridCounts).length
    ) {
      this.state.count = Math.ceil(this.state.gridCounts.gridCount / 10);
    }
    return (
      <>
        <div
          className="container-fluid bg_color"
          style={{ marginTop: "5.5rem" }}
        >
          {/* <!-- Dashboard Start  --> */}
          <section className="dashboard margin_top_90px">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-11">
                <h1 className="h4 pt-3 pt-lg-3 text-center text-lg-left text_yellow">
                  Dashboard
                </h1>
              </div>
            </div>
            <div className="col-12 col-lg-11 mt-lg-4 mx-0 mx-md-0 pl-0 pr-0 row">
              <div className="col-12 col-lg-1 col-md-12 mb-2 mb-md-2 pl-0 pr-0"></div>
              <div className="col-12 col-lg-2 col-md-6 pl-0 pl-lg-0 pl-md-2 pr-0 pr-md-2">
                <div className="form-group">
                  <label className="">Request Type</label>

                  <select
                    id="ID_Request_Type"
                    className="form-control bg-white"
                    value={this.state.ActionType}
                    onChange={(e) => this.changeActionType(e)}
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Original">Original</option>
                    <option value="StatusQuery">StatusQuery</option>
                    <option value="Upgrade">Upgrade</option>
                    <option value="Change">Change</option>
                    <option value="Cancellation">Cancellation</option>
                    <option value="Reissue">Reissue</option>
                    <option value="Dispute">Dispute</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-md-6 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>Status</label>
                <div className="form-group">
                  <select
                    id="Sel_Status"
                    name="Sel_Status"
                    className="form-control bg-white"
                    value={this.state.Status}
                    onChange={(e) => this.changeStatus(e)}
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Completed">Completed</option>
                    <option value="Submitted">Submitted</option>
                  </select>
                </div>
              </div>
              {/* Start Date start*/}
              <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>Start Date</label>
                <div className="form-group">
                  {/* <DatePicker
                    value={this.state.FromDate}
                    onChange={(e) => this.changeFromDate(e)}
                  /> */}
                  <input
                    className="form-control bg-white"
                    type="date"
                    value={this.state.FromDate}
                    onChange={(e) => this.changeFromDate(e)}
                  />
                </div>
              </div>
              {/* Start Date end */}

              {/* End date start */}
              <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>To Date</label>
                <div className="form-group">
                  <input
                    className="form-control bg-white"
                    type="date"
                    value={this.state.ToDate}
                    onChange={(e) => this.changeToDate(e)}
                  />
                </div>
              </div>
              {/* End Date end */}

              {/* <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>Date</label>
                <div className="form-group">
                  <select
                    id="ddlDatetype"
                    className="form-control bg-white"
                    value={this.DateType}
                    onChange={(e) => this.changeDateType(e)}
                  >
                    <option>Choose Date Type</option>
                    <option value="1" selected>
                      Month
                    </option>
                    <option value="2">Year</option>
                    <option value="3">Custom</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-1 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-lg-0 pr-md-2 text-capitalize">
                <label id="lblYear">Year</label>
                <div className="form-group">
                  <input
                    className="Year form-control bg-white"
                    placeholder="Year"
                    id="Year"
                    value={this.state.Year}
                    onChange={(e) => this.changeYear(e)}
                  />
                  <label id="lblfrom" className="hidden">
                    From
                  </label>
                  <input
                    type="text"
                    className="form-control from_date hidden bg-white"
                    placeholder="From Date"
                    id="from_date"
                    value={this.FromDate}
                    onChange={(e) => this.changeFromDate(e)}
                  />
                </div>
              </div>
              <div className="col-lg-1 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-lg-0 pr-md-2">
                <label id="lblmonth">Month</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control Month bg-white"
                    placeholder="Month"
                    id="Month"
                    value={this.state.month}
                    onChange={(e) => this.changeMonth(e)}
                  />

                  <label id="lblto" className="hidden">
                    To{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control to_date hidden bg-white"
                    placeholder="To Date"
                    id="to_date"
                    value={this.state.ToDate}
                    onChange={(e) => this.changeToDate(e)}
                  />
                </div>
              </div> */}
              <div className="col-10 col-lg-2 col-md-2 col-md-4 pl-0 pl-md-0 pl-md-2 pr-md-2">
                <label>Order ID</label>
                <div className="form-group">
                  <input
                    type="Order ID"
                    className="form-control bg-white"
                    placeholder="Order ID"
                    id="OrderID"
                    name="OrderID"
                    value={this.state.OrderID}
                    onChange={(e) => this.changeOrderID(e)}
                  />
                </div>
              </div>
              <div className="col-2 col-lg-1 col-md-1 col-md-4 pl-0 pl-lg-2 pl-md-2 pr-0 pr-md-2 text-center text-md-left">
                <div className="" style={{ marginTop: "37px" }}>
                  <button
                    id="btnsearch"
                    onClick={() => this.searchButtonClick()}
                    className="btn btn_search pb-1 pl-3 pr-3 pt-1 text-center"
                  >
                    <img src="static/New/images/search.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-lg-0 mt-md-4 mx-lg-5 mx-md-3 row">
              <div className="col-12 col-lg-6 col-md-12 mt-4 pl-lg-0 pl-md-0">
                <div className="card border_radius_15px">
                  <div className="card-body  barChartContainer">
                    {/* <!-- barChartContainer barChartCanvas-->
                        <!-- <canvas id="barChart" width="800" height="500"></canvas> --> */}
                    {/* <canvas id="barChart" className=""></canvas> */}
                    {typeof this.state.getRequestStatusSummaryData !==
                      "undefined" &&
                      Object.keys(this.state.getRequestStatusSummaryData)
                        .length && (
                        <BarChart
                          chartData={this.state.getRequestStatusSummaryData}
                        />
                      )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 mt-4 pl-md-0">
                <div className="card border_radius_15px">
                  <div className="card-body">
                    <h6>Request Summary</h6>
                    {typeof this.state.getStatusSummaryData !== "undefined" &&
                      Object.keys(this.state.getStatusSummaryData).length && (
                        <PieChart chartData={this.state.getStatusSummaryData} />
                      )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="align-items-center mt-5 mt-lg-5 mt-md-5 mx-0 mx-lg-5 mx-md-3 row">
            <div className="col-7 col-lg-8 col-md-8 pl-0 pl-lg-0 pr-0">
              <h6 className="text_color_blue">Request Details</h6>
            </div>
            <div className="col-5 col-lg-4 col-md-4 pl-0 text-lg-right text-md-right">
              {/* <a
                  className="btn btn_service pl-lg-4 pr-lg-4"
                  href="placeorder"
                >
                  New Request
                </a> */}
              <Link
                to="/placeorder"
                className="btn btn_service pl-lg-4 pr-lg-4"
              >
                New Request
              </Link>
            </div>
            {/* <!-- <div className="col-7 col-lg-2 col-md-4 pl-0 pr-0 pr-md-0">
            <input className="form-control bg-white border_dark border_radius_20px " type="month" id="bdaymonth"
                name="bdaymonth">
        </div> --> */}
          </div>
          <div className="mt-4 mt-lg-4 mt-md-4 mx-0 mx-lg-5 mx-md-3 row">
            <div className="border_radius_15px card col-lg-12 d-lg-block d-md-block d-none table-responsive">
              {/* <!-- Table Start --> */}
              {typeof this.state.getGridData !== "undefined" &&
              this.state.getGridData.length ? (
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="text_color_blue">
                          Certificate
                        </th>
                        <th scope="col" className="text_color_blue">
                          Action Type{" "}
                        </th>
                        <th scope="col" className="text_color_blue">
                          Status
                        </th>
                        <th scope="col" className="text_color_blue">
                          Order ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Request Date
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tbody">
                      {this.state.getGridData &&
                        this.state.getGridData.map((item) => {
                          return (
                            <tr key={item.ID}>
                              <td>{item.FloodCertificationIdentifier}</td>
                              <td>{item.ActionType}</td>
                              <td>{item.ResponseStatus}</td>
                              <td>
                                <Link
                                  to={"/OrderSummary/" + item.OrderID}
                                  className="badge badge-warning"
                                >
                                  {item.OrderID}
                                </Link>
                                {/* <Routes>
                                  <Route
                                    path="/OrderSummary"
                                    element={<OrderSummary />}
                                  />
                                </Routes> */}
                                {/* <button
                                  onClick={() =>
                                    this.onOrderIDClick(item.OrderID)
                                  }
                                >
                                  {item.OrderID}
                                </button> */}
                              </td>
                              <td>{item.Request_Date}</td>
                              <td></td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      {/* <Pagination
                        count={this.state.count}
                        page={this.state.page}
                        showFirstButton
                        showLastButton
                        onChange={(e) => this.handlePageChange(e)}
                      /> */}
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={this.state.count}
                        onPageChange={(e) => this.handlePageChange(e)}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                      />
                    </Stack>
                  </div>
                </div>
              ) : (
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="text_color_blue">
                          Certificate
                        </th>
                        <th scope="col" className="text_color_blue">
                          Action Type{" "}
                        </th>
                        <th scope="col" className="text_color_blue">
                          Status
                        </th>
                        <th scope="col" className="text_color_blue">
                          Order ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Request Date
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tbody">
                      <tr>
                        <td>
                          <p>No Client details found...</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      {/* <Pagination
                        count={this.state.count}
                        page={this.state.page}
                        showFirstButton
                        showLastButton
                        onChange={(e) => this.handlePageChange(e)}
                      /> */}
                    </Stack>
                  </div>
                </div>
              )}

              {/* <!-- Table End --> */}
            </div>
            {/* <!-- Mobile table start--> */}
            {/* <div id="mobidiv" className="col-12 pl-0 pr-0"></div> */}
            {/* <!-- MObile table End --> */}
          </div>

          {/* <!-- Dashboard End --> */}
        </div>

        {/* </BrowserRouter> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    getCounts: state.dashboardReducer.getCounts,
    requestSummary: state.dashboardReducer.dbSummary,
    requestStatusSummary: state.dashboardReducer.dbStatusSummary,
    gridDetails: state.dashboardReducer.gridDetails,
  };
}

const mapDispatchToProps = {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
