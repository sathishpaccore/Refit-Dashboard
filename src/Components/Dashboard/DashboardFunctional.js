import React, { useEffect, useState, } from 'react';
import { connect } from "react-redux";
import "./Dashboard.css";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
} from "../../Actions/Dashboard/DashboardAction";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import Moment from 'react-moment';
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import {
  selectedOrderData,
  removeSelectedOrderData,
  removeCertificateURLData,
  certificateURLData,
} from "../../Actions/Orders/OrderActions";
import http from "../../Helpers/AuthHelpers/http-common";
import { getOrderDetails } from "../../Services/API/OrdersService";
import "react-date-picker/dist/DatePicker.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'60%',
    height:'70%'
  },
};
const DashboardFunction = (props) => {
  const [ActionType,setActionType] = useState("All");
  const [Status,setStatus] = useState("All");
  const [FromDate,setFromDate] = useState("");
  const [ToDate,setToDate] = useState("");
  const [OrderID,setOrderID] = useState("");
  const [ClientID,setClientID] = useState(sessionStorage.getItem("ClientID"));
  const [getStatusSummaryData,setgetStatusSummaryData] = useState({});
  const [page,setPage] = useState(1);
  const [page_size,setpage_size] = useState(10);
  const [getRequestStatusSummaryData, setgetRequestStatusSummaryData] = useState({})
  const [gridCounts, setgridCounts] = useState({})
  const [count, setCount] = useState(Math.ceil(sessionStorage.getItem("gridCount") / 10))
  const [getGridData, setgetGridData] = useState([])
  const [getdGridData,setgetdGridData] = useState([])
  const [searchvalue,setSearchValue] = useState('')
  const[DateType,setDateType] = useState(1);
  const [modalIsOpen,setmodalIsOpen] = useState(false)
  const [urldata,seturlData] = useState('')
  const [iconload,seticonload] = useState(false)
  const [selorderid,setSelorderid] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    
     getCounts();
  getStatusSummary();
  getRequestStatusSummary();
  getGridDatas();
 
  },[])
  useEffect(() => {
    
    setgridCounts(props.getCounts);
  setgetStatusSummaryData(props.requestSummary);
  setgetRequestStatusSummaryData(props.requestStatusSummary)
  setgetGridData(props.gridDetails);
  setgetdGridData(props.gridDetails)
  if (
    gridCounts !== undefined &&
    Object.keys(gridCounts).length
  ) {
    setCount(Math.ceil(gridCounts.gridCount / 10));
  }
  return () => {
    //your cleanup code codes here
  };
 },[props.getCounts,props.requestSummary,props.requestStatusSummary,props.gridDetails])
 const getorddet = async() => {
 
 }
  const changeActionType = async(e) => {
    await setActionType(e.target.value)
    
  }
  const changeStatus = async(e) => {
   await setStatus(e.target.value)
  }
  const changeFromDate = async(e) => {
      await setFromDate(e.target.value)
  }
  const changeToDate = async(e) => {
   await setToDate(e.target.value)
  }
  const changeOrderID = async(e) => {
   await setOrderID(e.target.value)
  }
  const getStatusSummary = () =>  {
    props.retrieveRequestSummary(
      ClientID,
      OrderID,
      ActionType,
      Status,
      DateType,
      FromDate,
      ToDate
    );
  }
  const getRequestStatusSummary = () => {
    props.retrieveRequestStatusSummary(
      ClientID,
      OrderID,
      ActionType,
      Status,
      DateType,
      FromDate,
      ToDate
    );
  }
  const getGridDatas = () => {
    props.retrieveGridDetails(
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
  }
  const handlePageChange = (event) => {
    let x = event.selected + 1;
    setPage(Number(x));
    getGridDatas();

  };
 
  const searchButtonClick = () => {
    getCounts();
    getStatusSummary();
    getRequestStatusSummary();
    getGridDatas();
  }
  const getCounts = () => {
    props.retrievegetCountsSummary(
      ClientID,
      OrderID,
      ActionType,
      Status,
      DateType,
      FromDate,
      ToDate
    );
  }
  const viewcert = async(item) => {
    seticonload(true)
   
    setSelorderid(item.OrderID)
    try {
      let data = {};
    data["OrderID"] = item.OrderID;
    data["ClientID"] = item.ClientID;
    
    const response = await getOrderDetails(data);
   
    // dispatch(selectedOrderData(response.data));
    if(response.data.Attachment){
      getCertificateURL(
      response.data.Attachment,
      item.OrderID,
      sessionStorage.getItem("LenderID")
    );
   
    }
    } catch (error) {
      
    }
      
    
  }
  const getCertificateURL = async (hasAttachment, orderId, lenderId) => {

    if (hasAttachment) {
      let fileData = "";
      let data = {};
      data["OrderID"] = orderId;
      data["LenderID"] = lenderId;
      try {
        const response = await http.post("/orders/GetCertificate", data)
       
        if(response.data){
          seticonload(false)
          seturlData(response.data.FileData)
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setmodalIsOpen(true);
        dispatch(certificateURLData(response.data));
        }
        
      } catch (err) {
       
      }
      // const response = await http
      //   .post("/orders/GetCertificate", data)
      //   .catch((err) => {
          
      //   });
       
    } else {
      document.getElementById("certPanel").style.display = "none";
    }
  };
const closeModal = () =>{
  setmodalIsOpen(false)
}
const searchorderaddress = async() => {
  
  if(searchvalue){
    
    const filtered = getdGridData.filter(i =>
        i.OrderID.includes(searchvalue.toLowerCase()) || i.Address1.toLowerCase().includes(searchvalue.toLowerCase())
      );
     
      await setgetGridData(filtered)
      
}else{
  await setgetGridData(getdGridData)
 
}
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
                {/* <h1 className="h4 pt-3 pt-lg-3 text-center text-lg-left text_yellow">
                  Dashboard
                </h1> */}
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
                    value={ActionType}
                    onChange={(e) => changeActionType(e)}
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Original">Original</option>
                    <option value="StatusQuery">StatusQuery</option>
                    {/* <option value="Upgrade">Upgrade</option> */}
                    <option value="Change">Change</option>
                    <option value="Cancellation">Cancellation</option>
                    <option value="Reissue">Reissue</option>
                    {/* <option value="Dispute">Dispute</option> */}
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
                    value={Status}
                    onChange={(e) => changeStatus(e)}
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
                    value={FromDate}
                    onChange={(e) => this.changeFromDate(e)}
                  /> */}
                  <input
                    className="form-control bg-white"
                    type="date"
                    value={FromDate}
                    onChange={(e) => changeFromDate(e)}
                  />
                </div>
              </div>
              {/* Start Date end */}
              {/* <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>Start Time</label>
                <div className="form-group">
                 
                  <input
                    className="form-control bg-white"
                    type="time"
                    // value={FromDate}
                    // onChange={(e) => changeFromDate(e)}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>End Time</label>
                <div className="form-group">
                 
                  <input
                    className="form-control bg-white"
                    type="time"
                    // value={FromDate}
                    // onChange={(e) => changeFromDate(e)}
                  />
                </div>
              </div> */}
              {/* End date start */}
              <div className="col-lg-2 col-md-3 col-md-4 pl-0 pl-md-2 pr-0 pr-md-2">
                <label>To Date</label>
                <div className="form-group">
                  <input
                    className="form-control bg-white"
                    type="date"
                    value={ToDate}
                    onChange={(e) => changeToDate(e)}
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
                    value={Year}
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
                    value={month}
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
                    value={ToDate}
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
                    value={OrderID}
                    onChange={(e) => changeOrderID(e)}
                  />
                </div>
              </div>
              <div className="col-2 col-lg-1 col-md-1 col-md-4 pl-0 pl-lg-2 pl-md-2 pr-0 pr-md-2 text-center text-md-left">
                <div className="" style={{ marginTop: "37px" }}>
                  <button
                    id="btnsearch"
                    onClick={(e) => searchButtonClick(e)}
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
                    {(typeof getRequestStatusSummaryData !==
                      "undefined" && getRequestStatusSummaryData !==
                      "Error occurred at method RequestStatusData : 'ActionType'" )  ?
                      Object.keys(getRequestStatusSummaryData)
                        .length && (
                        <BarChart
                          chartData={getRequestStatusSummaryData}
                        />
                      ) : <p style={{textAlign:'center',color:'red',justifyContent:'center'}}>No Request Data</p>}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 mt-4 pl-md-0">
                <div className="card border_radius_15px">
                  <div className="card-body">
                    <h6>Request Summary</h6>

                    {(typeof getStatusSummaryData !== "undefined" && getStatusSummaryData !==
                      "Error occurred at method RequestData: 'ActionType'") ?
                      Object.keys(getStatusSummaryData).length && (
                        <PieChart chartData={getStatusSummaryData} />
                      ) : <p style={{textAlign:'center',color:'red'}}>No Request Data</p>}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="align-items-center mt-5 mt-lg-5 mt-md-5 mx-0 mx-lg-5 mx-md-3 row">
            <div className="col-7 col-lg-8 col-md-8 pl-0 pl-lg-0 pr-0">
              <h6 className="text_color_blue">Request Details</h6>
            </div>
            <div className="col-10 col-lg-2 col-md-2 col-md-4 pl-0 pl-md-0 pl-md-2 pr-md-2">
                
                <div style={{marginBottom:'0px'}} className="form-group">
                  <input
                    type="Order ID"
                    className="form-control bg-white"
                    placeholder="Order ID/Address"
                    style={{height:'40px'}}
                    id="OrderID"
                    name="OrderID"
                    value={OrderID}
                    onChange={(e) => changeOrderID(e)}
                    // value={searchvalue}
                    // onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>
              <div style={{display:'flex',}} className="col-2 col-lg-1 col-md-1 col-md-4 pl-0 pl-lg-2 pl-md-2 pr-0 pr-md-2 text-center text-md-left">
                <div style={{marginRight:'8px'}} className="" >
                  <button
                    id="btnsearch"
                    onClick={() => searchButtonClick()}
                    className="btn btn_search pb-1 pl-3 pr-3 pt-1 text-center"
                  >
                    <img src="static/New/images/search.png" alt="" />
                  </button>
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
              </div>
            
            {/* <!-- <div className="col-7 col-lg-2 col-md-4 pl-0 pr-0 pr-md-0">
            <input className="form-control bg-white border_dark border_radius_20px " type="month" id="bdaymonth"
                name="bdaymonth">
        </div> --> */}
          </div>
          <div className="mt-4 mt-lg-4 mt-md-4 mx-0 mx-lg-5 mx-md-3 row">
            <div className="border_radius_15px card col-lg-12 d-lg-block d-md-block table-responsive">
              {/* <!-- Table Start --> */}
              {typeof getGridData !== "undefined" &&
              getGridData.length > 0 ? (
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="text_color_blue">
                        Certificate No.
                        </th>
                        <th scope="col" className="text_color_blue">
                          Action Type{" "}
                        </th>
                        <th scope="col" className="text_color_blue">
                          Status
                        </th>
                        <th scope="col" className="text_color_blue">
                          Loan ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Order ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Request Date
                        </th>
                        {/* <th scope="col" className="text_color_blue">
                          Request Time
                        </th> */}
                        <th scope="col" className="text_color_blue">
                          Address
                        </th>
                        <th scope="col" className="text_color_blue">
                          Certificate
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tbody">
                      {getGridData &&
                        getGridData.map((item) => {
                        
                          return (
                            <tr key={item.ID}>
                              <td>{item.FloodCertificationIdentifier}</td>
                              <td>{item.ActionType}</td>
                              {/* <td>{item.ResponseStatus}</td> */}
                              
                              <td >{item.ResponseStatus === 'Status' || item.ResponseStatus === '' ? 'Submitted' : item.ResponseStatus === 'Success' ? 'Completed' : item.ResponseStatus}</td>
                              <td>
                                
                                  {item.LoanID ? item.LoanID : '--'}
                                
                                
                              </td>
                              <td>
                                <Link
                                  to={"/OrderSummary/" + item.OrderID}
                                  className="badge badge-warning"
                                >
                                  {item.OrderID}
                                </Link>
                                
                              </td>
                              <td>
                               
                                <Moment format="DD/MM/YYYY" withTitle>
                                                    {item.Request_Date}
                                                    </Moment>
                              </td>
                              {/* <td>
                                
                                <Moment format="HH:MM A" withTitle>
                                                    {item.Request_Date}
                                                    </Moment>
                              </td> */}
                              <td>{item.Property_StreetAddress.length > 30 ? item.Property_StreetAddress.slice(0,30)+'...' : item.Property_StreetAddress}</td>
                              <td onClick={() => viewcert(item)}>{item.ResponseStatus === 'Success' ? !iconload ? <span><i class="fa fa-file-pdf-o"></i></span> :item.OrderID === selorderid ? 'Loading...' : <span><i class="fa fa-file-pdf-o"></i></span>  : '--'}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      {/* <Pagination
                        count={count}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={(e) => this.handlePageChange(e)}
                      /> */}
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={count}
                        onPageChange={(e) => handlePageChange(e)}
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
                          Certificate No.
                        </th>
                        <th scope="col" className="text_color_blue">
                          Action Type{" "}
                        </th>
                        <th scope="col" className="text_color_blue">
                          Status
                        </th>
                        <th scope="col" className="text_color_blue">
                          Loan ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Order ID
                        </th>
                        <th scope="col" className="text_color_blue">
                          Request Date
                        </th>
                        {/* <th scope="col" className="text_color_blue">
                          Request Time
                        </th> */}
                        <th scope="col" className="text_color_blue">
                          Address
                        </th>
                        <th scope="col" className="text_color_blue">
                          Certificate
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tbody">
                      <tr>
                        <td>
                          <p>No Documents found...</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-3">
                    <Stack spacing={2}>
                      {/* <Pagination
                        count={count}
                        page={page}
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
          <Modal
        isOpen={modalIsOpen}
                      style={customStyles}
        contentLabel="Example Modal"
      >
        <button style={{float:'right',marginBottom:'10px'}} className='btn btn_service pl-lg-4 pr-lg-4' onClick={() => closeModal()}>Close</button>
        <iframe
                      id="attachment"
                      onRequestClose={closeModal}
                      src={urldata}
                      width="100%"
                      height="100%"
                    ></iframe>
        {/* <iframe src="http://www.africau.edu/images/default/sample.pdf" style="width:600px; height:500px;" frameborder="0"></iframe> */}
        
      </Modal>
          {/* <!-- Dashboard End --> */}
        </div>

        {/* </BrowserRouter> */}
      </>
   );
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardFunction);