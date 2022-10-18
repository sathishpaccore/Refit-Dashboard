import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import http from "../../Helpers/AuthHelpers/http-common";
import {
  getClientDetails,
  removeClientDetails,
} from "../../Actions/Requests/RequestAction";
import {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
} from "../../Actions/Dashboard/DashboardAction";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const PropertyDetails = (props) => {
let { clientID } = sessionStorage.getItem("ClientID");
const [Cont_Phone, setCont_Phone] = useState("");
const [Cont_Phone2, setCont_Phone2] = useState("");
const [Other_name, setOther_name] = useState("");
const [Other_Faxnumber, setOther_Faxnumber] = useState("");
const [Other_Email1, setOther_Email1] = useState("");
const [Other_Email2, setOther_Email2] = useState("");
const [Other_Address1, setOther_Address1] = useState("");
const [Other_Address2, setOther_Address2] = useState("");
const [Other_City, setOther_City] = useState("");
const [Other_inputZip, setOther_inputZip] = useState("");
const [Flood_Certification_Identifier, setFlood_Certification_Identifier] =
  useState("");
const [Lender_Case_Identifier, setLender_Case_Identifier] = useState("");
const [Item_Type, setItem_Type] = useState("");
const [Description_ID, setDescription_ID] = useState("");
const [Supporting_Doc_Description, setSupporting_Doc_Description] =
  useState("");
    const [btndis,setBtndis] = useState(false);
    const [dataObject, setDataObject] = useState({
        Address1: '',
        Address2: '',
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
        ZipCode: '',
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
      
      const handleOriginalSubmit = async () => {
        await setBtndis(true)
         
        if (!dataObject.Property_StreetAddress) {
          setBtndis(false)
          toast.error('Enter Property Street Address', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if (!dataObject.Property_City) {
          setBtndis(false)
          toast.error('Enter Property City', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if (!dataObject.Property_State) {
          setBtndis(false)
          toast.error('Enter Property State', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if (!dataObject.Property_ZipCode) {
          setBtndis(false)
          toast.error('Enter Property ZipCode', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if (!dataObject.Additional_Legal) {
          setBtndis(false)
          toast.error('Enter Additional Legal', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else {
         
          try {
            let data = {};
          data["ClientID"] = sessionStorage.getItem("ClientID");
          data["ActionType"] = "Original";
          data["FloodCertificationIdentifier"] = dataObject.InternalAccountIdentifier;
          data["Name"] = dataObject.Name;
          data["FaxNumber"] = dataObject.FaxNumber;
          data["Email1"] = dataObject.Email;
          data["AlternateEmail"] = dataObject.AlternateEmail;
          data["Phone"] = dataObject.Phone;
          data["AlternatePhone"] = dataObject.AlternatePhone;
          data["Address1"] = dataObject.Property_StreetAddress;
          data["Address2"] = dataObject.Address2;
          data["City"] = dataObject.City;
          data["State"] = dataObject.State;
          data["ZipCode"] = dataObject.ZipCode;
          data["LoanID"] = props.borrdata.LoanID;
          data["LoanAmount"] = props.borrdata.LoanAmount;
          data["ServiceType"] = dataObject.ServiceType;
          data["CostCenter1"] = dataObject.CostCenter1;
          data["CostCenter2"] = dataObject.CostCenter2;
          data["CostCenter3"] = dataObject.CostCenter3;
          data["Borrower1_FirstName"] = props.borrdata.Borrower1_FirstName;
          data["Borrower1_LastName"] = props.borrdata.Borrower1_LastName;
          data["Borrower1_Middle_Name"] = props.borrdata.Borrower1_Middle_Name;
          data["Borrower2_FirstName"] = props.borrdata.Borrower2_FirstName;
          data["Borrower2_LastName"] = props.borrdata.Borrower2_LastName;
          data["Borrower2_Middle_Name"] = props.borrdata.Borrower2_Middle_Name;
          data["EntityName"] = props.borrdata.EntityName;
          data["Property_StreetAddress"] = dataObject.Property_StreetAddress;
          data["Property_City"] = dataObject.Property_City;
          data["Property_State"] = dataObject.Property_State;
          data["Property_ZipCode"] = dataObject.Property_ZipCode;
          data["Additional_Legal"] = dataObject.Additional_Legal;
          data["File_Upload"] = dataObject.File_Upload;
          data["Request_Xml"] = dataObject.Request_Xml;
          data["Status"] = dataObject.Status;
          data["Response_Xml"] = dataObject.Response_Xml;
          data["Request_Date"] = dataObject.Request_Date;
          data["Remarks"] = dataObject.Remarks;
          data["ItemType"] = dataObject.ItemType;
          data["Description"] = dataObject.Description;
          data["SupportDocDesc"] = dataObject.SupportDocDesc;
          data["CertificateType"] = dataObject.CertificateType;
          data["LoginUser"] = dataObject.LoginUser;
          data["IsActive"] = dataObject.IsActive === "true" ? true : false;
          
          const response = await http.post("/orders/AddRequest", data)
            if(response.data.Status === 'Success'){
              toast.success('Request Added SuccessFully', {
                position: toast.POSITION.TOP_RIGHT
              });
              let ActType = 'Original';
              let Status = 'All';
              let DateType= "1";
              let FromDate = '';
              let ToDate = '';
              let page = 1;
              let page_size= 10;
  //             ActionType: "All"
  // ClientID: "132"
  // DateType: "1"
  // FromDate: ""
  // OrderID: ""
  // Status: "All"
  // ToDate: ""
  // page: 1
  // page_size:0
 
              props.retrieveGridDetails(
                dataObject.ClientID,
                response.data.OrderID,
        ActType,
        Status,
        DateType,
        FromDate,
        ToDate,
        page,
        page_size
               
        );
        navigate("/Dashboard", { replace: true });
              setBtndis(false)
            }else {
              toast.error(response.data.Message, {
                position: toast.POSITION.TOP_RIGHT
              });
              
             
              setBtndis(false)
            }
            
          } catch (error) {
            
            setBtndis(false)
          }
           
           
          }
       
        };
        const sendprev = () => {
        
          props.prev(1);
      
  }
    return ( 
      <div>
      <div class="admform" style={{width:'70%',marginLeft:'14%',backgroundColor:'white',border:'1px solid white',borderRadius:'10px'}}>
  <div class="content admin_register reg" >
    <div>
      <div class="row">
        <div class="col-12">
          <div style={{borderRadius:'0px'}} class="card">
            <div class="card-body card-block">
            {/* <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Property Details</b></div> */}
              <div>
          <fieldset>
                                  <div class="mt-lg-3 mt-md-3 mx-0 row active">
                                    <div class="col-12 col-lg-5 col-md-6 pl-md-4 pr-md-4">
                                      <h5>Property Details</h5>
                                    </div>
                                  </div>
                                  <div className="mt-lg-3 mt-md-3 mx-0 row">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-12 col-lg-10 col-md-10  pl-md-4 pr-md-4">
                                      <div className="form-group">
                                        <textarea
                                          className="form-control required"
                                          placeholder="Address"
                                          name="Property_StreetAddress"
                                          id="Property_Address"
                                          aria-label="Address"
                                          onChange={(e) =>
                                            setDataObject({
                                              ...dataObject,
                                              Property_StreetAddress:
                                                e.target.value,
                                            })
                                          }
                                          value={
                                            dataObject.Property_StreetAddress
                                          }
                                          required
                                        ></textarea>
                                      </div>
                                    </div>

                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                  </div>

                                  <div className="mt-lg-0 mt-md-0 mx-0 row">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-12 col-lg-5 col-md-6  pl-md-4 pr-md-4">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control required"
                                          placeholder="City"
                                          name="Property_City"
                                          id="Loan_City"
                                          aria-label="City"
                                          aria-describedby="basic-addon1"
                                          onChange={(e) =>
                                            setDataObject({
                                              ...dataObject,
                                              Property_City: e.target.value,
                                            })
                                          }
                                          value={dataObject.Property_City}
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6  pl-md-4  pr-md-4">
                                      <div className="form-group">
                                        <select
                                          className="form-control required"
                                          placeholder="State"
                                          name="Property_State"
                                          id="Loan_State"
                                          value={dataObject.Property_State}
                                          onChange={(e) =>
                                            setDataObject({
                                              ...dataObject,
                                              Property_State: e.target.value,
                                            })
                                          }
                                          required
                                        >
                                          <option value="">Select State</option>
                                          <option value="AL">Alabama</option>
                                          <option value="AK">Alaska</option>
                                          <option value="AZ">Arizona</option>
                                          <option value="AR">Arkansas</option>
                                          <option value="CA">California</option>
                                          <option value="CO">Colorado</option>
                                          <option value="CT">
                                            Connecticut
                                          </option>
                                          <option value="DE">Delaware</option>
                                          <option value="FL">Florida</option>
                                          <option value="GA">Georgia </option>
                                          <option value="HI">Hawaii</option>
                                          <option value="ID">Idaho</option>
                                          <option value="IL">Illinois</option>
                                          <option value="IN">Indiana</option>
                                          <option value="IA">Iowa</option>
                                          <option value="KS">Kansas</option>
                                          <option value="KY">Kentucky</option>
                                          <option value="LA">Louisiana</option>
                                          <option value="ME">Maine</option>
                                          <option value="MD">Maryland</option>
                                          <option value="MA">
                                            Massachusetts
                                          </option>
                                          <option value="MI">Michigan</option>
                                          <option value="MN">Minnesota</option>
                                          <option value="MS">
                                            Mississippi
                                          </option>
                                          <option value="MO">Missouri</option>
                                          <option value="MT">Montana</option>
                                          <option value="NE">Nebraska</option>
                                          <option value="NV">Nevada</option>
                                          <option value="NH">
                                            New Hampshire
                                          </option>
                                          <option value="NJ">New Jersey</option>
                                          <option value="NM">New Mexico</option>
                                          <option value="NY">New York </option>
                                          <option value="NC">
                                            North Carolina
                                          </option>
                                          <option value="ND">
                                            North Dakota
                                          </option>
                                          <option value="OH">Ohio</option>
                                          <option value="OK">Oklahoma</option>
                                          <option value="OR">Oregon</option>
                                          <option value="PA">
                                            Pennsylvania
                                          </option>
                                          <option value="RI">
                                            Rhode Island
                                          </option>
                                          <option value="SC">
                                            South Carolina
                                          </option>
                                          <option value="SD">
                                            South Dakota
                                          </option>
                                          <option value="TN">Tennessee</option>
                                          <option value="TX">Texas</option>
                                          <option value="UT">Utah</option>
                                          <option value="VT">Vermont</option>
                                          <option value="VA">Virginia</option>
                                          <option value="WA">
                                            Washington{" "}
                                          </option>
                                          <option value="WV">
                                            West Virginia
                                          </option>
                                          <option value="WI">Wisconsin</option>
                                          <option value="WY">Wyoming</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                  </div>
                                  <div className="mt-lg-0 mt-md-0 mx-0 row">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-12 col-lg-6 col-md-6  pl-md-4  pr-md-4">
                                      <div className="form-group ">
                                        <input
                                          type="number"
                                          className="form-control required"
                                          name="Property_ZipCode"
                                          id="Property_Zipcode"
                                          placeholder="Zip Code"
                                          aria-label="Postal Code"
                                          aria-describedby="basic-addon1"
                                          onChange={(e) =>
                                            setDataObject({
                                              ...dataObject,
                                              Property_ZipCode: e.target.value,
                                            })
                                          }
                                          value={dataObject.Property_ZipCode}
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                  </div>
                                  <div className="row mx-0">
                                    <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                    <div className="form-group col-lg-5 col-md-5 col-12">
                                      <h6>Legal Description</h6>
                                    </div>
                                    <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                  </div>

                                  <div className="mt-lg-0 mt-md-0 mx-0 row">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-12 col-lg-10 col-md-10  pl-md-4  pr-md-4">
                                      <div className="form-group">
                                        <textarea
                                          className="form-control"
                                          placeholder="Additional Legal"
                                          name="Additional_Legal"
                                          id="Property_addi_Address"
                                          aria-label="Address"
                                          onChange={(e) =>
                                            setDataObject({
                                              ...dataObject,
                                              Additional_Legal: e.target.value,
                                            })
                                          }
                                          value={dataObject.Additional_Legal}
                                        ></textarea>
                                      </div>
                                    </div>

                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                  </div>
                                  <div class="flex-container">

<div class="flex-child magenta">
<button
               
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-previous button"
                disabled={btndis}
                onClick={() => sendprev()}
              >
                Previous
              </button>
</div>

<div class="flex-child green">
  {!btndis ? 
      <button
      style={{width:'100px'}}
       type="submit"
       id="Id_BtnSubmit"
       name="Id_BtnSubmit"
       class="btn btn-primary button"
       disabled={btndis}
       onClick={() => handleOriginalSubmit()}
     >
       Next
     </button> : 
     <button
     style={{width:'100px'}}
      type="submit"
      id="Id_BtnSubmit"
      name="Id_BtnSubmit"
      class="btn btn-primary button"
      disabled
      
    >
     Processing...
    </button>
  }

</div>

</div>
                                  {/* <!-- <div className="mt-lg-0 mt-md-0 mx-0 row">
                                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none">
                                                    </div>
                                                    <div className="col-9 col-lg-9 col-md-9 pl-0 pl-md-4 pr-0 pr-md-4">
                                                        <div className="form-group">
                                                            <input type="file" className="custom-file-input" name="file"
                                                                    id="file">
                                                                <label className="custom-file-label"
                                                                    for="inputGroupFile01">Choose
                                                                    file</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none">
                                                    </div>
                                                </div> --> */}
                                  {/* <div className="align-items-center mt-lg-0 mx-md-0 mx-0 row">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-12 col-lg-5 col-md-6  pl-md-3">
                                      <h6 className="text-dark">Attach File</h6>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-6  pr-md-3 text-lg-right text-center text-md-right">
                                      <button className="btn btn_dashboard">
                                        Upload File
                                      </button>
                                    </div>
                                  </div>

                                  <div className="mt-lg-2 mt-md-2 row mx-0">
                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                    <div className="col-10 col-lg-10 col-md-10 pl-0 pl-md-4 pr-0 pr-md-4">
                                      <div className="form-group">
                                        <textarea
                                          className="form-control"
                                          placeholder="Remarks"
                                          aria-label="Comments"
                                          name="file_property_Remarks"
                                          id="file_property_Remarks"
                                          onChange={(e) =>
                                            setFile_property_Remarks(
                                              e.target.value
                                            )
                                          }
                                          value={file_property_Remarks}
                                        ></textarea>
                                      </div>
                                    </div>

                                    <div className="col-lg-1 col-md-1 d-lg-block d-md-none d-none"></div>
                                  </div> */}

                                  <div className="mb-lg-3 mb-md-3 mx-0 mb-3 mx-lg-2 row">
                                    <div className="col-12 col-lg-11 col-md-12 pl-lg-0">
                                      <div className="form-wizard-buttons mt-3 mt-lg-3 mt-md-3">
                                        {/* <button
                                            type="button"
                                            className="btn btn-previous"
                                          >
                                            Previous
                                          </button> */}

                                        {/* {!btndis ? 
                                        
                                        <input
                                          className="border_radius_10px btn btn_about pl-4 pr-4"
                                          type="submit"
                                          value="Submit"
                                          disabled={btndis}
                                          onClick={handleOriginalSubmit}
                                        /> : 
                                        <input
                                          className="border_radius_10px btn btn_about pl-4 pr-4"
                                          type="submit"
                                          value="Processing..."
                                          disabled
                                        />
                                        } */}
                                      </div>
                                    </div>
                                  </div>
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
 
function mapStateToProps(state) {
  return {
    
    gridDetails: state.dashboardReducer.gridDetails,
  };
}

const mapDispatchToProps = {
  
  retrieveGridDetails,

};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);
// export default PropertyDetails;