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
import { useNavigate } from "react-router-dom";
import {
  retrieveRequestSummary,
  retrieveRequestStatusSummary,
  retrieveGridDetails,
  retrievegetCountsSummary,
} from "../../Actions/Dashboard/DashboardAction";
import { toast } from 'react-toastify';

const BorrowerInformation = (props) => {
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
      useEffect(() => {
        if (Object.keys(props.borrdata).length > 1) {
            getprevdata()
           
          }
       
      }, []);
      const getprevdata = async() => {
      
        await setDataObject({
          ...dataObject,
          LoanID:props.borrdata.LoanID,
          Borrower1_FirstName: props.borrdata.Borrower1_FirstName,
          Borrower1_LastName:props.borrdata.Borrower1_LastName,
          Borrower1_Middle_Name:props.borrdata.Borrower1_Middle_Name,
          Borrower2_FirstName:props.borrdata.Borrower2_FirstName,
          EntityName:props.borrdata.EntityName,
          LoanAmount:props.borrdata.LoanAmount,
          Borrower2_LastName:props.borrdata.Borrower2_LastName,
          Borrower2_Middle_Name:props.borrdata.Borrower2_Middle_Name
        })
      }
      const handleOriginalSubmit = async () => {
        await setBtndis(true)
         
        
              try {
                let data = {};
                data["LoanID"] = dataObject.LoanID;
             
              data["Borrower1_FirstName"] = dataObject.Borrower1_FirstName;
              data["Borrower1_LastName"] = dataObject.Borrower1_LastName;
              data["Borrower1_Middle_Name"] = dataObject.Borrower1_Middle_Name;
              data["Borrower2_FirstName"] = dataObject.Borrower2_FirstName;
              data["Borrower2_LastName"] = dataObject.Borrower2_LastName;
              data["Borrower2_Middle_Name"] = dataObject.Borrower2_Middle_Name;
              data["EntityName"] = dataObject.EntityName;
              data["LoanAmount"] = dataObject.LoanAmount;
               
              props.func(data);
                
              } catch (error) {
                
                setBtndis(false)
              }
           
         
        };
    return ( 
        <div>
          <div class="admform" style={{width:'70%',marginLeft:'14%',backgroundColor:'white',border:'1px solid white',borderRadius:'10px'}}>
      <div class="content admin_register reg" >
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Borrower Information</b></div>
                  <div>
                  <fieldset>
                                 
                                 <div
                                   className="row"
                                   style={{ paddingTop: "5px" }}
                                 >
                                   <div className="col-8"></div>

                                   <div className="col-4 text-lg-right"></div>
                                 </div>

                                
                                 <div className="row mt-lg-3 mt-md-3 mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="form-group col-lg-5 col-md-5 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control required"
                                         name="LoanID"
                                         id="Loan_LoanID"
                                         placeholder="Loan ID"
                                         aria-label="Loan ID"
                                         aria-describedby="basic-addon1"
                                         
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             LoanID: e.target.value,
                                           })} 
                                         value={dataObject.LoanID}
                                         required
                                       />
                                     </div>
                                   </div>
                                   <div className="form-group col-lg-5 col-md-5 col-12">
                                     <div className="input-group">
                                       <input
                                         type="number"
                                         className="form-control required"
                                         name="LoanAmount"
                                         id="Loan_LoanAmount"
                                         placeholder="Loan Amount"
                                         aria-label="Loan Amount"
                                         aria-describedby="basic-addon1"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             LoanAmount: e.target.value,
                                           })
                                         }
                                         value={dataObject.LoanAmount}
                                         required
                                       />
                                     </div>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>

                                 <div className="row mt-lg-0 mt-md-0 mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="col-12 col-lg-5 col-md-5 form-group mb-0 mb-lg-0 mb-md-0">
                                     <h6>Borrower</h6>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>
                                 <div className="row mt-lg-0 mt-md-0 mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="form-group col-lg-4 col-md-4 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control required"
                                         placeholder="First Name"
                                         aria-label="First Namw"
                                         aria-describedby="basic-addon1"
                                         name="Borrower1_FirstName"
                                         id="Loan_Br1_FirstName"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower1_FirstName:
                                               e.target.value,
                                           })
                                         }
                                         value={dataObject.Borrower1_FirstName}
                                         required
                                       />
                                     </div>
                                   </div>
                                   <div className="form-group col-lg-2 col-md-2 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control"
                                         placeholder="Middle Name"
                                         aria-label="Middle Name"
                                         aria-describedby="basic-addon1"
                                         name="Borrower1_Middle_Name"
                                         id="Loan_Br1_MI"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower1_Middle_Name:
                                               e.target.value,
                                           })
                                         }
                                         value={
                                           dataObject.Borrower1_Middle_Name
                                         }
                                       />
                                     </div>
                                   </div>
                                   <div className="form-group col-lg-4 col-md-4 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control required"
                                         placeholder="Last Name"
                                         aria-label="Last Name"
                                         aria-describedby="basic-addon1"
                                         name="Borrower1_LastName"
                                         id="Loan_Br_LasttName"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower1_LastName:
                                               e.target.value,
                                           })
                                         }
                                         value={dataObject.Borrower1_LastName}
                                         required
                                       />
                                     </div>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>
                                 <div className="row mt-lg-0 mt-md-0 mx-0 mb-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="form-group col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0">
                                     <h6>Co-Borrower</h6>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>
                                 <div className="row mt-lg-0 mt-md-0 mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="form-group col-lg-4 col-md-4 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control "
                                         name="Borrower2_FirstName"
                                         id="Loan_Br2_firstName1"
                                         placeholder="First Name"
                                         aria-label="City"
                                         aria-describedby="basic-addon1"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower2_FirstName:
                                               e.target.value,
                                           })
                                         }
                                         value={dataObject.Borrower2_FirstName}
                                       />
                                     </div>
                                   </div>
                                   <div className="form-group col-lg-2 col-md-2 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control "
                                         placeholder="Middle Name"
                                         name="Borrower2_Middle_Name"
                                         id="Loan_Br2_MI"
                                         aria-label="MI"
                                         aria-describedby="basic-addon1"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower2_Middle_Name:
                                               e.target.value,
                                           })
                                         }
                                         value={
                                           dataObject.Borrower2_Middle_Name
                                         }
                                       />
                                     </div>
                                   </div>
                                   <div className="form-group col-lg-4 col-md-4 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control"
                                         placeholder="Last Name"
                                         name="Borrower2_LastName"
                                         id="Loan_Br2_LastName1"
                                         aria-label="Last Name"
                                         aria-describedby="basic-addon1"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             Borrower2_LastName:
                                               e.target.value,
                                           })
                                         }
                                         value={dataObject.Borrower2_LastName}
                                       />
                                     </div>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>
                                 <div className="row mt-lg-0 mt-md-0 mx-0 mb-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                   <div className="form-group col-lg-5 col-md-5 col-12 mb-lg-0 mb-md-0">
                                     <h6> (Or) Entity Name</h6>
                                   </div>
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                                 </div>
                                 <div className="row mt-lg-3 mt-md-3 mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>

                                   <div className="form-group col-lg-10 col-md-10 col-12">
                                     <div className="input-group">
                                       <input
                                         type="text"
                                         className="form-control"
                                         placeholder="Entity"
                                         name="EntityName"
                                         id="Loan_EntityNmae"
                                         aria-label="Entity"
                                         aria-describedby="basic-addon1"
                                         onChange={(e) =>
                                           setDataObject({
                                             ...dataObject,
                                             EntityName: e.target.value,
                                           })
                                         }
                                         value={dataObject.EntityName}
                                       />
                                     </div>
                                   

                                     <div className="col-lg-12"></div>
                                   </div>
                                 </div>

                             
                               </fieldset>
                               <div style={{textAlign:'center'}}>
                               <button
                style={{width:'25%',textAlign:'center'}}
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                disabled={btndis}
                onClick={() => handleOriginalSubmit()}
              >
                Next
              </button>
              </div>
              
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
 
export default BorrowerInformation;