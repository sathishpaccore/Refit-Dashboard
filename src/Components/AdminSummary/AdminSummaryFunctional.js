import React, { useEffect, useState } from 'react';
import "./AdminSummary.css";
import { retrieveTutorials } from "../../Actions/AdminSummary/AdminSummaryAction";
import { connect } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Header from "../Header/HomeHeader";

const AdminSummaryFunctional = (props) => {
   
    
    const [page, setpage] = useState(1);
    const [count,setcount] = useState(Math.ceil(sessionStorage.getItem("gridCount") / 10));
    const [page_size, setpage_size] = useState(10);
    const [showPassword, setShowPassword] = useState(false);  

    const [PasswordIndex, setPasswordINdex] = useState();
    let navigate = useNavigate();
    useEffect(() => {
        retrieveTutorialsData(1)
        if (
          props.dataList !== undefined &&
          Object.keys(props.dataList).length
        ) {
          setcount(Math.ceil(sessionStorage.getItem("gridCount") / 10));
        }
     },[])
    
    const retrieveTutorialsData = (x) =>  {
       
        const params = getRequestParams(x, page_size);
       
        props.retrieveTutorials(params);
      }
      const getRequestParams = (page, pageSize) => {
        let params = {};
        if (page) {
          params["page"] = page;
        }
        if (pageSize) {
          params["page_size"] = pageSize;
        }
        return params;
      }
      const handlePageChange = (event) => {
        
        let x = event.selected + 1;
        setpage(Number(x));
        retrieveTutorialsData(x)
    
      };
   
     const sendregister = () => {
      navigate("/register", { replace: true });
      }
     
    return ( 
        <>
        <Header page='admin' />
        <div style={{ marginTop: "6rem" }}></div>
        <div className="admdash mt-4 mt-lg-4 mt-md-4 mx-0 mx-lg-5 mx-md-3 row">
            <div className="border_radius_15px col-lg-12 d-lg-block d-md-block table-responsive">
        {props.dataList.length ? (
          <div className="content">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <strong
                      className="card-title"
                      style={{ textAlign: "center" }}
                    >
                      Entity Details
                    </strong>
                    <div className="pull-right messages-buttons">
                      <div onClick={() => sendregister()} className="btn  btn-info button">
                        <i className="fa fa-plus"></i> Add Entity
                      </div>
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <table id="adminGrid" className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" className="text_color_blue">Entity ID</th>
                          <th scope="col" className="text_color_blue">UserID</th>
                          <th scope="col" className="text_color_blue">Name</th>
                          <th scope="col" className="text_color_blue">Internal Account Identifier</th>
                          {/* <th scope="col" className="text_color_blue">Login Account Identifier</th>
                          <th scope="col" className="text_color_blue">Login Account Password</th> */}
                          <th scope="col" className="text_color_blue">Email</th>
                          <th scope="col" className="text_color_blue"></th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                        {props.dataList &&
                          props.dataList.map((item,index) => {
                            return (
                              <tr key={item.ClientID}>
                                <td>{item.LenderID}</td>
                                <td>{item.UserID}</td>
                                <td>{item.Name}</td>
                                <td>{item.InternalAccountIdentifier}</td>
                                {/* <td>{item.LoginAccountIdentifier}</td> */}
                                {/* <td>

{showPassword && index === PasswordIndex

  ? item.LoginAccountPassword

  : "********"}{" "}

<span>

  <i

    className="fa fa-eye"

    onClick={() => {

      setShowPassword(!showPassword);

      setPasswordINdex(index);

    }}

  ></i>

</span>{" "}

</td> */}
                                <td>{item.Email}</td>
                                <td></td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div style={{textAlign:'center',marginLeft:'25%',marginBottom:'10px'}} className="mt-3">
                    <Stack spacing={2}>
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
                      {/* <Pagination
                        count={count}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={(value) => handlePageChange(value)}
                      /> */}
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
                      <div onClick={() => sendregister()} className="btn  btn-info button">
                        <i className="fa fa-plus"></i> Add Client
                      </div>
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <p style={{textAlign:'center'}}>No Client details found...</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
        </div>
      </>
     );
}
 
const mapStateToProps = (state) => {
    
    return {
      dataList: state.adminSummaryReducer,
    };
  };
  
  export default connect(mapStateToProps, {
    retrieveTutorials,
  })(AdminSummaryFunctional);