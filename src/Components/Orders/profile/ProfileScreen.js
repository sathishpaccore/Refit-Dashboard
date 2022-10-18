import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import http from "../../../Helpers/AuthHelpers/http-common";
import {

  getClientDetails,
  removeClientDetails,
} from "../../../Actions/Requests/RequestAction";
import { useNavigate } from "react-router-dom";
import {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
} from "../../../Actions/Dashboard/DashboardAction";
import { toast } from 'react-toastify';

const ProfileScreen = (props) => {
  const [btndis,setBtndis] = useState(false);
    const [dataObject, setDataObject] = useState({
        Address1: sessionStorage.getItem("Address1"),
        Address2: sessionStorage.getItem("Address2"),
        AlternateEmail: sessionStorage.getItem("AlternateEmail"),
        AlternatePhone: sessionStorage.getItem("AlternatePhone"),
        AutomatedAddress: sessionStorage.getItem("AutomatedAddress"),
        AutomatedCertCost: sessionStorage.getItem("AutomatedCertCost"),
        City: sessionStorage.getItem("City"),
        ClientID: sessionStorage.getItem("ClientID"),
        Email: sessionStorage.getItem("Email"),
        FaxNumber: sessionStorage.getItem("FaxNumber"),
        FloodCertification: sessionStorage.getItem("FloodCertification"),
        InternalAccountIdentifier: sessionStorage.getItem(
          "InternalAccountIdentifier"
        ),
        IsActive: sessionStorage.getItem("IsActive"),
        LOLCertCost: sessionStorage.getItem("LOLCertCost"),
        LOLCertification: sessionStorage.getItem("LOLCertification"),
        LenderID: sessionStorage.getItem("LenderID"),
        LoginAccountIdentifier: sessionStorage.getItem("LoginAccountIdentifier"),
        ManualCertCost: sessionStorage.getItem("ManualCertCost"),
        Name: sessionStorage.getItem("Name"),
        Phone: sessionStorage.getItem("Phone"),
        State: sessionStorage.getItem("State"),
        UserID: sessionStorage.getItem("UserID"),
        UserType: sessionStorage.getItem("UserType"),
        usertype:sessionStorage.getItem("userType"),
        ZipCode: sessionStorage.getItem("ZipCode"),
        LoanID: "",
        LoanAmount: "",
        ServiceType: "",
        CostCenter1: "",
        CostCenter2: "",
        CostCenter3: "",
        Borrower1_FirstName: "",
        Borrower1_LastName: "",
        Borrower1_Middle_Name: "",
        Borrower2_FirstName: "",
        Borrower2_LastName: "",
        Borrower2_Middle_Name: "",
        EntityName: "",
        Property_StreetAddress: "",
        Property_City: "",
        Property_State: "",
        Property_ZipCode: "",
        Additional_Legal: "",
        File_Upload: "",
        Request_Xml: "<xml></xml>",
        Status: "submitted",
        Response_Xml: "<xml></xml>",
        Request_Date: "",
        Remarks: "",
        LoginUser: "",
        ItemType: "",
        Description: "",
        SupportDocDesc: "",
        CreatedBy: "",
        UpdatedBy: "",
        CreatedOn: "",
        UpdatedOn: "",
        CertificateType: "",
        ActionType: "",
      });
      let navigate = useNavigate();
     const sendcreateuser = () => {
        navigate('/createuser')
     }
     
    return ( 
        <div style={{marginTop:'100px'}}>
          <div class="admform" style={{width:'70%',marginLeft:'14%',backgroundColor:'white',border:'1px solid white',borderRadius:'10px'}}>
      <div class="content admin_register reg" >
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Profile Information</b></div>
                  <div>
                  <fieldset>
                          <div className="row" style={{ paddingTop: "5px" }}>
                            <div className="col-8"></div>

                            <div className="col-4 text-lg-right"></div>
                          </div>

                          <div className="row mt-lg-3 mt-md-3 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="form-group col-lg-5 col-md-5 col-12">
                                <label>Name</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control has-error required"
                                  id="Other_name"
                                  name="Other_name"
                                  data-error="Please enter name field."
                                  placeholder="Name"
                                  aria-label="Name"
                                  aria-describedby="basic-addon1"
                                  minLength="3"
                                  maxLength="50"
                                  disabled
                                //   onChange={(e) =>
                                //     setOther_name(e.target.value)
                                //   }
                                  value={dataObject.Name}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-5 col-md-5 col-12">
                            <label>Entity ID</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Entity"
                                  name="EntityName"
                                  id="Loan_EntityNmae"
                                  aria-label="Entity"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.LenderID}
                                
                                />
                              </div>
                            </div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>

                          <div className="row mt-lg-0 mt-md-0 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="col-12 col-lg-5 col-md-5 form-group mb-0 mb-lg-0 mb-md-0"></div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>
                          <div className="row mt-lg-0 mt-md-0 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="form-group col-lg-4 col-md-4 col-12">
                            <label>Phone</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control required"
                                  placeholder="Phone"
                                  id="Cont_Phone"
                                  aria-label="Phone"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.Phone}
                                //   onChange={(e) =>
                                //     setCont_Phone(e.target.value)
                                //   }
                                //   value={Cont_Phone}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-12">
                            <label>Alternate Phone</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Landline"
                                  id="Cont_Phone2"
                                  name="Cont_Phone2"
                                  aria-label="Landline"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.AlternatePhone}
                                //   onChange={(e) =>
                                //     setCont_Phone2(e.target.value)
                                //   }
                                //   value={Cont_Phone2}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-4 col-md-4 col-12">
                            <label>Email</label>
                              <div className="input-group">
                                <input
                                  type="email"
                                  className="form-control required"
                                  placeholder="Email"
                                  name="Other_Email1"
                                  id="Other_Email1"
                                  aria-label="Email"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.Email}
                                //   onChange={(e) =>
                                //     setOther_Email1(e.target.value)
                                //   }
                                //   value={Other_Email1}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>
                          <div className="row mt-lg-0 mt-md-0 mx-0 mb-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="form-group col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0"></div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>
                          <div className="row mt-lg-0 mt-md-0 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="form-group col-lg-4 col-md-4 col-12">
                            <label>Alternate Email</label>
                              <div className="input-group">
                                <input
                                  type="email"
                                  className="form-control required"
                                  id="Other_Email2"
                                  name="Other_Email2"
                                  placeholder="Alternate Email"
                                  aria-label="Alternate Email"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.AlternateEmail}
                                //   value={Other_Email2}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-12">
                            <label>City</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control required"
                                  placeholder="City"
                                  id="Other_City"
                                  name="Other_City"
                                  aria-label="City"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.City}
                                //   onChange={(e) =>
                                //     setOther_City(e.target.value)
                                //   }
                                //   value={Other_City}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-4 col-md-4 col-12">
                            <label>Zip Code</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control required"
                                  id="Other_inputZip"
                                  name="Other_inputZip"
                                  placeholder="Zipcode"
                                  disabled
                                  value={dataObject.ZipCode}
                                //   onChange={(e) =>
                                //     setOther_inputZip(e.target.value)
                                //   }
                                //   value={Other_inputZip}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>
                          <div className="row mt-lg-0 mt-md-0 mx-0 mb-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            <div className="form-group col-lg-5 col-md-5 col-12 mb-lg-0 mb-md-0"></div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                          </div>
                          {/* <div className="row mt-lg-3 mt-md-3 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>

                            <div className="form-group col-lg-10 col-md-10 col-12">
                            <label>Entity ID</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Entity"
                                  name="EntityName"
                                  id="Loan_EntityNmae"
                                  aria-label="Entity"
                                  aria-describedby="basic-addon1"
                                  disabled
                                  value={dataObject.LenderID}
                                
                                />
                              </div>

                              <div className="col-lg-12"></div>
                            </div>
                          </div> */}
                        </fieldset>
                  
                               
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
           </div>
        
     );
}
 
export default ProfileScreen;