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
import BorrowerInformation from "./borrowerinformation";
import PropertyDetails from "./propertydetails";
import { display } from "@mui/system";
const PlaceOrder = (props) => {
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
  const [array,setarray] = useState([]);
  const [index,setIndex] = useState(1);
  // currentPosition: 0,
  const [currentPosition,setCurrentposition] = useState(0);
  const [active,setActive] = useState(0);
  const [indexes,setIndexes] = useState([]);
  const [borrower,setBorrower] = useState({})
  // let clientData = useSelector((state) => state.clientDetails);
  // let clientInfo = clientData.ClientInfo;
  // let count = useRef(0);
  let navigate = useNavigate();
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
    LoginUser: sessionStorage.getItem("UserID"),
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

 

  let updateRegFormFunc = true;
  const dispatch = useDispatch();

  const getClientData = async (clientID) => {
    let data = {};
    data["ClientID"] = clientID;

    const response = await http
      .post("/clients/clientdetails", data)
      .catch((err) => {
      
      });

    dispatch(getClientDetails(response.data));

    if (!updateRegFormFunc)
      updateRegForm(response.data.ClientInfo, response.data.RequestInfo);
  };

  const updateRegForm = (clientData, requestInfo) => {
    updateRegFormFunc = true;
    if (typeof requestInfo !== "undefined")
      requestInfo = JSON.parse(requestInfo);
    let ele = document.getElementById("SEL_Req_Type");
    let setDrpOption = false;
    if (typeof requestInfo !== "undefined" && requestInfo.length > 0) {
      for (let i = 0; i < requestInfo.length; i++) {
        if (requestInfo[i]["Enabled"] === true) {
          if (requestInfo[i].RequestType === "Original") {
            ele.innerHTML =
              ele.innerHTML +
              '<option value="' +
              requestInfo[i]["RequestType"] +
              '" selected>' +
              requestInfo[i]["RequestType"] +
              "</option>";

            setDrpOption = true;
          } else {
            ele.innerHTML =
              ele.innerHTML +
              '<option value="' +
              requestInfo[i]["RequestType"] +
              '">' +
              requestInfo[i]["RequestType"] +
              "</option>";
          }
        }

        // if (setDrpOption === false) {
        //   // add code to set default selected option
        //   document
        //     .getElementById("SEL_Req_Type")
        //     .val(document.getElementById("SEL_Req_Type option:first").val());
        // }
      }

      let myarray = [];
      if (clientData.FloodCertification === "true") {
        myarray.push("Flood Certificate");
      }
      if (clientData.LOLCertification === "true") {
        myarray.push("LoL Certificate");
      }

      let ele1 = document.getElementById("ConfigurationCheck");
      if (myarray.length > 0) {
        for (let i = 0; i < myarray.length; i++) {
          ele1.innerHTML =
            ele1.innerHTML +
            '<option value="' +
            myarray[i] +
            '">' +
            myarray[i] +
            "</option>";
        }
      }

      // let RequestType = document.getElementById("SEL_Req_Type").value;
      let RequestType = 'Original';
      let previousActionType = RequestType;

      if (RequestType === "Original") {
        document.getElementById("SectionOriginalFormID").style.display =
          "block";
        document.getElementById("Otherforms").style.display = "none";
        // document.getElementById("Id_Cert_Config").removeClass("hidden");
      } else {
        document.getElementById("SectionOriginalFormID").style.display = "none";
        document.getElementById("SectionOtherFormID").style.display = "block";
        // document.getElementById("Id_Cert_Config").addClass("hidden");
      }
    } else {
      alert(
        "No action type is configured for you. Please contact administrator."
      );
    }
  };

  useEffect(() => {
    // if (!updateRegFormFunc)
    //   updateRegForm(dataObject, sessionStorage.getItem("requestInfo"));
  }, []);

 

  const handleOriginalSubmit = async () => {
  await setBtndis(true)
   
   if(!dataObject.LoanAmount) {
      setBtndis(false)
      toast.error('Enter Laon Amount', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if (!dataObject.Property_StreetAddress) {
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
        data["Address1"] = dataObject.Address1;
        data["Address2"] = dataObject.Address2;
        data["City"] = dataObject.City;
        data["State"] = dataObject.State;
        data["ZipCode"] = dataObject.ZipCode;
        data["LoanID"] = dataObject.LoanID;
        data["LoanAmount"] = dataObject.LoanAmount;
        data["ServiceType"] = dataObject.ServiceType;
        data["CostCenter1"] = dataObject.CostCenter1;
        data["CostCenter2"] = dataObject.CostCenter2;
        data["CostCenter3"] = dataObject.CostCenter3;
        data["Borrower1_FirstName"] = dataObject.Borrower1_FirstName;
        data["Borrower1_LastName"] = dataObject.Borrower1_LastName;
        data["Borrower1_Middle_Name"] = dataObject.Borrower1_Middle_Name;
        data["Borrower2_FirstName"] = dataObject.Borrower2_FirstName;
        data["Borrower2_LastName"] = dataObject.Borrower2_LastName;
        data["Borrower2_Middle_Name"] = dataObject.Borrower2_Middle_Name;
        data["EntityName"] = dataObject.Borrower2_FirstName;
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

  function handleOtherFormSubmit(e) {
    e.preventDefault();
  }

  function onChangeObj(e) {
    const { name, value } = e.target;
    setDataObject((ev) => ({
      ...dataObject,
      [name]: value,
    }));
  }
  const borrinfo = async(obj) => {

    setBorrower(obj);
    await setIndex(index + 1)
    let arr = [...indexes, 0]
    await setIndexes(arr)
  }
  const previous = async dat => {
    
    // // const indes = this.state.indexes.slice(0, dat);
    await setIndex(dat);
    let serr = indexes.slice(0,dat)
    await setIndexes(serr)
   
  };
  const steps = [
    {
      name: 'Borrower Information',
      component: <BorrowerInformation borrdata={borrower} func={borrinfo}  />,
      
    },
    {
      name: 'Property Details',
      component: <PropertyDetails prev={previous} borrdata={borrower}  />,
      
    },
    
  ];
  return (
    <>
      <div className="newreq container-fluid bg_color" style={{ marginTop: "5.5rem" }}>
        <div className="content bg_color margin_top_90px">
        
          <div style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                 
                  </div>
          <div className="row mx-0 mt-3 mt-lg-3 mt-md-3">
            <div className="col-8">
              <div className="">
              
                <>
                  <div id="Originalform" >
                    <div className="">
                   

                      <section
                        className="form-box"
                        id="SectionOriginalFormID"
                        
                      >
                        <div className="container-fluid">
                          <div className="row mx-lg-3  ">
                            <div style={{boxShadow:'none'}} className="col-12 col-sm-12 form-wizard pl-0 pr-0">
                            
                              <div className="">
                                <div className="form-wizard-steps form-wizard-tolal-steps-3">
                                  <div className="form-wizard-progress">
                                    <div
                                      className="form-wizard-progress-line"
                                      data-now-value="12.25"
                                      data-number-of-steps="4"
                                      style={{ width: "12.25%" }}
                                    ></div>
                                  </div>
                               
                                  
                                </div>
                               
                                <div>
                                  <ul
                                    id="errorMessages"
                                    className="errorMessages"
                                    style={{ display: "none" }}
                                  ></ul>
                                </div>
                             
                              <div class="row">
                                <div class="col-10">

                               
                                <div class="admform" style={{backgroundColor:'white',border:'1px solid white',borderRadius:'10px'}}>
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
                                         placeholder="Borrower First Name"
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
                                         placeholder="Co-borrower / Entity Name"
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
                                   
                                 
                                 </div>
                                 <div className="row  mx-0">
                                   <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>

                                   <div className="form-group col-lg-10 col-md-10 col-12">
                                     <div className="input-group">
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
                                   

                                     <div className="col-lg-12"></div>
                                   </div>
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
      <div class="col-2">
      <div>
      <div class="admform" style={{width:'500%',backgroundColor:'white',border:'1px solid white',borderRadius:'10px'}}>
      <div class="content admin_register reg" >
      <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Certificate Preview</b></div>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                 <div style={{border:'2px solid black',padding:'8px'}}>
                  <div class="row">
                      <div style={{textAlign:'center',borderRight:'2px solid black'}} class="col-6">
                        <p style={{fontSize:'10px',fontWeight:700}}>DEPARTMENT OF HOMELAND SECURITY FEDERAL EMERGANCY MANAGEMENT AGENCY</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>STANDARD FLOOD HAZARD DETERMINATION FORM(SFHDF).</p>
                      </div>
                      <div style={{textAlign:'center',borderRight:'2px solid black'}} class="col-3">
                        <p style={{fontSize:'10px',fontWeight:700}}>Cust Num: 225199</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>Cost Cent:</p>
                      </div>
                      <div style={{textAlign:'center'}} class="col-3">
                        <p style={{fontSize:'10px',fontWeight:700}}>OMB Control No.:1660-004</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>Expires:10/31/18</p>
                      </div>
                  </div>
              
                </div>
                <div style={{border:'2px solid black',padding:'0px',paddingBottom:'0px'}}>
                  <p style={{fontSize:'14px',fontWeight:700,textAlign:'center'}}>Section 1</p>
              
                </div>
                <div style={{border:'2px solid black',padding:'8px'}}>
                  <div class="row">
                      <div style={{textAlign:'center',borderRight:'2px solid black'}} class="col-5">
                        <p style={{fontSize:'10px',fontWeight:700}}>1.LENDER/SERVICER NAME AND ADDRESS</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>REFIT-SERVICES LLC-- RESEDENTIAL.</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Address1}</p>
                      </div>
                      <div  class="col-7">
                        <p style={{fontSize:'10px',fontWeight:700,textAlign:'center',}}>2.COLLATERAL DESCRIPTION(Building/Mobile Home/Property)(See Instructions For More Information)</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Borrower1_FirstName} {dataObject.Borrower1_LastName}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Borrower2_FirstName} {dataObject.Borrower2_LastName}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Property_StreetAddress}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Property_City},{dataObject.Property_State},{dataObject.Property_ZipCode}</p>
                      </div>
                     
                  </div>
              
                </div>
                <div style={{border:'2px solid black',padding:'8px'}}>
                  <div class="row">
                      <div style={{textAlign:'center',borderRight:'2px solid black'}} class="col-4">
                        <p style={{fontSize:'10px',fontWeight:700}}>3.LENDER/SERVICERID</p>
                       
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LenderID}</p>
                      </div>
                      <div style={{textAlign:'center',borderRight:'2px solid black'}}  class="col-4">
                        <p style={{fontSize:'10px',fontWeight:700,textAlign:'center',}}>4.Loan Identifier</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LoanID}</p>
                        
                      </div>
                      <div  class="col-4">
                        <p style={{fontSize:'10px',fontWeight:700,textAlign:'center',}}>5.Amount of Flood Insurance Required</p>
                        
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LoanAmount}</p>
                      </div>
                  </div>
                  
                </div>
              </div>
              <div style={{textAlign:'center',paddingBottom:'18px'}}>
                            {!btndis ? 
                                <button
                                style={{width:'25%',textAlign:'center'}}
                                type="submit"
                                id="Id_BtnSubmit"
                                name="Id_BtnSubmit"
                                class="btn btn-primary button"
                                disabled={btndis}
                                onClick={() => handleOriginalSubmit()}
                              >
                                Submit
                              </button> : <button
                style={{width:'25%',textAlign:'center'}}
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
                          </div>
                        </div>
                      </section>
                    </div>
                  
                  </div>

                 
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    
    gridDetails: state.dashboardReducer.gridDetails,
  };
}

const mapDispatchToProps = {
  
  retrieveGridDetails,

};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);

