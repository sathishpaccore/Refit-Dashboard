import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import AdminSummaryService from "../../Services/API/AdminSummaryService";

const CreateUser = (props) => {
    const [btndis,setBtndis] = useState(false);
    const [array,setarray] = useState([]);
    const [dataObject, setDataObject] = useState({
        Address1: sessionStorage.getItem("Address1"),
        Address2: sessionStorage.getItem("Address2"),
        AlternateEmail: sessionStorage.getItem("AlternateEmail"),
        AlternatePhone: sessionStorage.getItem("AlternatePhone"),
        AutomatedAddress: sessionStorage.getItem("AutomatedAddress"),
        AutomatedCertCost: sessionStorage.getItem("AutomatedCertCost"),
        City: sessionStorage.getItem("City"),
        ClientID: sessionStorage.getItem("ClientID"),
        Email: '',
        FaxNumber: '',
        FloodCertification: sessionStorage.getItem("FloodCertification"),
        InternalAccountIdentifier: sessionStorage.getItem(
          "InternalAccountIdentifier"
        ),
        LoginAccountPassword:sessionStorage.getItem("LoginAccountPassword"),
        IsActive: sessionStorage.getItem("IsActive"),
        LOLCertCost: sessionStorage.getItem("LOLCertCost"),
        LOLCertification: sessionStorage.getItem("LOLCertification"),
        LenderID: sessionStorage.getItem("LenderID"),
        LoginAccountIdentifier: sessionStorage.getItem("LoginAccountIdentifier"),
        ManualCertCost: sessionStorage.getItem("ManualCertCost"),
        Name: '',
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
        password:""
      });
      let navigate = useNavigate();
      const saveregdata = async() => {
        setBtndis(true);
        if(!dataObject.Name){
            setBtndis(false)
            toast.error('Enter Name', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(dataObject.Email)){
            setBtndis(false)
            toast.error('Invalid Email Format', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(!dataObject.password){
            setBtndis(false)
            toast.error('Enter Password', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else {
          
         try {
            const obj = {
                "Name" : dataObject.Name,
                 "Email": dataObject.Email,
                 "InternalAccountIdentifier": dataObject.InternalAccountIdentifier,
                 ClientID : sessionStorage.getItem("ClientID"),
                 UserID:sessionStorage.getItem("Email"),
                 LoginAccountIdentifier:dataObject.LoginAccountIdentifier,
                 "AlternateEmail" :dataObject.AlternateEmail,
                "Phone": dataObject.Phone,
                "AlternatePhone": dataObject.AlternatePhone,
                "FaxNumber": dataObject.FaxNumber,
                 "Address1": dataObject.Address1,
                  "Address2": dataObject.Address2,
                  "City": dataObject.City,
                  "State": dataObject.State,
                  "ZipCode": dataObject.ZipCode,
                  "LoginUser":dataObject.UserID,
                  "UserType":'employe',
                  "usertype":'employe',
                  // "RoleID":3,
                  Password:dataObject.password,
                  "LoginAccountPassword": dataObject.LoginAccountPassword,
                  "IsActive":1,
                  LenderID:dataObject.LenderID,
                  ManualCertCost:dataObject.ManualCertCost,
                  AutomatedCertCost:dataObject.AutomatedCertCost,
                  LOLCertCost:dataObject.LOLCertCost,
                  AutomatedAddress:array.includes('Automated Address') ? true:false,
                  FloodCertification:array.includes('Flood Certification') ? true:false,
                  LOLCertification:array.includes('LOL Certification') ? true:false,
                  "ActionTypes":"data",
                }
      
                const dert = await AdminSummaryService.reguser(obj);
              
                if(dert.status === 200){
                  setBtndis(false)
                  navigate('/dashboard')
            toast.success(dert.data, {
              position: toast.POSITION.TOP_RIGHT
            });
                }else{
                  setBtndis(false)
                  toast.error('something Went Wrong', {
                    position: toast.POSITION.TOP_RIGHT
                  });
                }
         } catch (ex) {
            setBtndis(false)
          toast.error('something Went Wrong', {
            position: toast.POSITION.TOP_RIGHT
          });
         }
        }
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
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Create User</b></div>
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      Name: e.target.value,
                                    })
                                  }
                                //   onChange={(e) =>
                                //     setOther_name(e.target.value)
                                //   }
                                  value={dataObject.Name}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group col-lg-5 col-md-5 col-12">
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      Email: e.target.value,
                                    })
                                  }
                                  value={dataObject.Email}
                                //   onChange={(e) =>
                                //     setOther_Email1(e.target.value)
                                //   }
                                //   value={Other_Email1}
                                  required
                                />
                              </div>
                            

                              <div className="col-lg-12"></div>
                            </div>
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>
                            
                          </div>
                          <div className="row mt-lg-3 mt-md-3 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>

                            <div className="form-group col-lg-10 col-md-10 col-12">
                           
                            <label>Password</label>
                              <div className="input-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  name="EntityName"
                                  id="Loan_EntityNmae"
                                  aria-label="Entity"
                                  aria-describedby="basic-addon1"
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      password: e.target.value,
                                    })
                                  }
                                  value={dataObject.password}
                                //   onChange={(e) =>
                                //     setDataObject({
                                //       ...dataObject,
                                //       EntityName: e.target.value,
                                //     })
                                //   }
                                //   value={dataObject.EntityName}
                                />
                              </div>
                              <div className="col-lg-12"></div>
                            </div>
                          </div>
                          {/* <div className="row mt-lg-0 mt-md-0 mx-0">
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      Phone: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      AlternatePhone: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      Email: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      AlternateEmail: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      City: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      ZipCode: e.target.value,
                                    })
                                  }
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
                          </div> */}
                          {/* <div className="row mt-lg-3 mt-md-3 mx-0">
                            <div className="col-lg-1 col-md-1 d-none d-md-block d-lg-block"></div>

                            <div className="form-group col-lg-10 col-md-10 col-12">
                            <label>Password</label>
                              <div className="input-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  name="EntityName"
                                  id="Loan_EntityNmae"
                                  aria-label="Entity"
                                  aria-describedby="basic-addon1"
                                  onChange={(e) =>
                                    setDataObject({
                                      ...dataObject,
                                      password: e.target.value,
                                    })
                                  }
                                  value={dataObject.password}
                             
                                />
                              </div>

                              <div className="col-lg-12"></div>
                            </div>
                          </div> */}
                        </fieldset>
                  
                               <div style={{textAlign:'center'}}>
                              {!btndis ? 
                                  <button
                                  style={{width:'25%',textAlign:'center'}}
                                  type="submit"
                                  id="Id_BtnSubmit"
                                  name="Id_BtnSubmit"
                                  class="btn btn-primary button"
                                  onClick={() => saveregdata()}
                                >
                                  Create
                                </button> : 
                                <button
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
        
     );
}
 
export default CreateUser;