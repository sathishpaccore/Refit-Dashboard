import React, { Component } from "react";
import "./AdminSummary.css";
import { retrieveTutorials } from "../../Actions/AdminSummary/AdminSummaryAction";
import { connect } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

class AdminSummary extends Component {
  constructor(props) {
    super(props);
    this.retrieveTutorialsData = this.retrieveTutorialsData.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      currentSummary: [],
      message: "",
      currentIndex: -1,
      page: 1,
      count: 10,
      page_size: 10,
    };
    this.pageSizes = [10, 25, 50, 75, 100];
  }

  componentDidMount() {
    this.retrieveTutorialsData();
  }

  getRequestParams(page, pageSize) {
    let params = {};
    if (page) {
      params["page"] = page;
    }
    if (pageSize) {
      params["page_size"] = pageSize;
    }
    return params;
  }

  retrieveTutorialsData() {
    const { page, page_size } = this.state;
    const params = this.getRequestParams(page, page_size);

    this.props.retrieveTutorials(params);
  }

  handlePageChange(event, value) {
   
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveTutorialsData();
      }
    );
  }
  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1,
      },
      () => {
        this.retrieveTutorialsData();
      }
    );
  }

  render() {
    const { currentSummary, page, count } = this.state;
    const { dataList } = this.props;
    return (
      <>
        {dataList.length ? (
          <div className="content">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <strong
                      className="card-title"
                      style={{ textAlign: "center" }}
                    >
                      Client Details
                    </strong>
                    <div className="pull-right messages-buttons">
                      <a href="registration" className="btn  btn-info button">
                        <i className="fa fa-plus"></i> Add Client
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <table id="adminGrid" className="table adminGrid">
                      <thead>
                        <tr>
                          <th scope="col">LenderID</th>
                          <th scope="col">UserID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Internal Account Identifier</th>
                          <th scope="col">Login Account Identifier</th>
                          <th scope="col">Login Account Password</th>
                          <th scope="col">Email</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                        {dataList &&
                          dataList.map((item) => {
                            return (
                              <tr key={item.ClientID}>
                                <td>{item.LenderID}</td>
                                <td>{item.UserID}</td>
                                <td>{item.Name}</td>
                                <td>{item.InternalAccountIdentifier}</td>
                                <td>{item.LoginAccountIdentifier}</td>
                                <td>{item.LoginAccountPassword}</td>
                                <td>{item.Email}</td>
                                <td></td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      <Pagination
                        count={count}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={this.handlePageChange}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <strong
                      className="card-title"
                      style={{ textAlign: "center" }}
                    >
                      Client Details
                    </strong>
                    <div className="pull-right messages-buttons">
                      <a href="registration" className="btn  btn-info button">
                        <i className="fa fa-plus"></i> Add Client
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <p>No Client details found...</p>
                  </div>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      <Pagination
                        count={count}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={this.handlePageChange}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    dataList: state.adminSummaryReducer,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
})(AdminSummary);
