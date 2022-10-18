import React,{useState} from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import AdminSummaryService from "../../Services/API/AdminSummaryService";
import Header from "../Header/HomeHeader";
import LoginInfo from "./logininfo";
import AccountInfo from "./accountinfo";
import ContactInfo from "./contactinfo";
import PriceInfo from "./confpriceinfo";
const MyCheckBoxList = [
  {
    order: 0,
    name: "Automated Address",
  },
  {
    order: 1,
    name: "Flood Certification",
  },
  {
    order: 2,
    name: "LOL Certification",
  },
];
const Registration = () => {
  // let { clientID } = sessionStorage.getItem("ClientID");
  const [array,setarray] = useState([]);
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
  const [indexes,setIndexes] = useState([0]);
  const [index,setIndex] = useState(1);
  const [logininfoobj,setLoginfo] = useState({});
  const [accountinfoobj,setAccountinfo] = useState({});
  const [contactinfoobj,setContactinfo] = useState({});
  const [dataObject, setDataObject] = useState({
    Login_name:'',
    Login_LenderID:'',
    Login_UsesrID:'',
    Login_password:'',
    Account_AccountIdentifier:'',
    Account_InternalAccountIdentifier:'',
    Account_AccountPassword:'',
    Address1: '',
    Address2: '',
    AlternateEmail: '',
    AlternatePhone: '',
    AutomatedCertCost: '',
    City: '',
    Email: '',
    FaxNumber: '',
    LOLCertCost: '',
    LenderID: sessionStorage.getItem("LenderID"),
    Account_LenderID:'',
    LoginAccountIdentifier: '',
    ManualCertCost: '',
    Phone: '',
    State: 'Alabama',
    UserID: sessionStorage.getItem("UserID"),
    UserType: sessionStorage.getItem("UserType"),
    ZipCode: '',
    ServiceType: "",
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
    CreatedBy: sessionStorage.getItem("UserID"),
    UpdatedBy: sessionStorage.getItem("UserID"),
    CreatedOn: new Date(),
    UpdatedOn: new Date(),
    CertificateType: "Flood Certification",
    ActionType: "Original",
    AutomatedAddress:false,
    FloodCertification:false,
    LOLCertification:true
  });
  let navigate = useNavigate();
  const sendadmin = () => {
    navigate("/orgadmin", { replace: true });
  }

  const logininfo = async(obj) => {
  
    setLoginfo(obj)
    await setIndex(index + 1)
    let arr = [...indexes, 0]
    await setIndexes(arr)
  }
  const accountinfo = async(obj) => {
   
    setAccountinfo(obj)
    setIndex(index + 1)
    let arr = [...indexes, 1]
    await setIndexes(arr)
  }
  const contactinfo = async(obj) => {
    
    setContactinfo(obj)
    setIndex(index + 1)
    let arr = [...indexes, 2]
    await setIndexes(arr)
  }
  const previous = async dat => {
   
    // const indes = this.state.indexes.slice(0, dat);
    await setIndex(dat);
    let serr = indexes.slice(0,dat)
    await setIndexes(serr)
  };
  const chonchange = async(item) => {
    if(array.includes(item.name)){
      const det = array.filter(k => k !== item.name)
      setarray(det)
    }else{
      setarray([...array, item.name])
    }
  }
  
  const saveregdata = async() => {
    setBtndis(true);
    if(dataObject.Login_name?.length < 1){
      setBtndis(false)
      toast.error('Please Enter Name', {
        position: toast.POSITION.TOP_RIGHT
      });
    } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(dataObject.Email)){
      setBtndis(false)
      toast.error('Invalid Email', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(dataObject.Login_password?.length < 4){
      setBtndis(false)
      toast.error('Password Must have Minimum 4 Characters', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(dataObject.Phone?.length !== 10){
      setBtndis(false)
      toast.error('Invalid Phone Number', {
        position: toast.POSITION.TOP_RIGHT
      });
    } else if(dataObject.Address1?.length < 5){
      setBtndis(false)
      toast.error('Invalid Address', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!dataObject.City){
      setBtndis(false)
      toast.error('Enter City', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!dataObject.State){
      setBtndis(false)
      toast.error('Select State', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!dataObject.ZipCode){
      setBtndis(false)
      toast.error('Invalid Zip Codes', {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!dataObject.ManualCertCost){
        setBtndis(false)
        toast.error('Enter Manual Certification Cost', {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!dataObject.AutomatedCertCost){
        setBtndis(false)
        toast.error('Enter Automated Certification Cost', {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!dataObject.LOLCertCost){
        setBtndis(false)
        toast.error('Enter LOL Certification Cost', {
          position: toast.POSITION.TOP_RIGHT
        });
      }else {
     
     try {
        const obj = {
            "Name" : dataObject.Login_name,
             "Email": dataObject.Email,
             "InternalAccountIdentifier": '',
             ClientID : sessionStorage.getItem("ClientID"),
             UserID:sessionStorage.getItem("Email"),
             LoginAccountIdentifier:dataObject.Account_AccountIdentifier,
             "AlternateEmail" :'',
            "Phone": dataObject.Phone,
            "AlternatePhone": '',
            "FaxNumber": '',
             "Address1": dataObject.Address1,
              "Address2": '',
              "City": dataObject.City,
              "State": dataObject.State,
              "ZipCode": dataObject.ZipCode,
              "LoginUser":dataObject.UserID,
              "usertype":'RefitUser',
              "UserType" :dataObject.UserType,
              // "RoleID":2,
              Password:dataObject.Login_password,
              "LoginAccountPassword": dataObject.Account_AccountPassword,
              "IsActive":1,
              LenderID:'',
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
              navigate('/orgadmin')
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
  const steps = [
    {
      name: 'Login Info',
      component: <LoginInfo logindata={logininfoobj} accountdata={accountinfoobj} contactdata={contactinfoobj} func={logininfo} />,
      
    },
    // {
    //   name: 'Account Info',
    //   component: <AccountInfo prev={previous} logindata={logininfoobj} accountdata={accountinfoobj} contactdata={contactinfoobj} func={accountinfo} />,
      
    // },
    {
      name: 'Contact Info',
      component: <ContactInfo prev={previous} logindata={logininfoobj} accountdata={accountinfoobj} contactdata={contactinfoobj} func={contactinfo} />,
      
    },
    {
      name: 'Price Info',
      component: <PriceInfo prev={previous} logindata={logininfoobj} accountdata={accountinfoobj} contactdata={contactinfoobj}  />,
      
    },
  ];
  return (
    <>
    <Header page='admin' />
    <div style={{ marginTop: "5.5rem" }}></div>
    
    <div class="admreg card">
                    <div class="card-header">
                      <strong
                        class="card-title"
                        style={{ textAlign: "center" }}
                      >
                        Create Entity Here
                      </strong>
                      
                      <div class="pull-right messages-buttons">

                        <div onClick={() => sendadmin()} class="btn  btn-orange button">

                          <i class="fa fa-users"></i> Entity's

                        </div>

                      </div>

                    </div>
                   
                  </div>
                  <div class="regcli admform" style={{width:'80%',marginLeft:'10%',backgroundColor:'white',marginTop:'4%'}}>
      <div class="content admin_register reg" style={{ backgroundColor: "white" }}>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                  <div class="row">
                    <div class ="col-6">
                    {/* <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Contact Information</b></div> */}
                  <div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Name</span>
                    </div>
                    <input type="text" name="name" class="form-control" onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_name: e.target.value,
                    })
                  }
                  value={dataObject.Login_name} required placeholder="Name" autoFocus />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Email</span>
                    </div>
                    <input type="email" name="email" class="form-control" value={dataObject.Email}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Email: e.target.value,
                    })
                  }
                  required placeholder="Testing@gmail.com" />
                  </div>
                 
                  {/* <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Entity ID</span>
                    </div>
                    <input type="text" name="entityid" class="form-control" value={dataObject.Login_LenderID}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_LenderID: e.target.value,
                    })
                  }
                  required placeholder="Entity ID" />
                  </div> */}
                  {/* <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">User ID</span>
                    </div>
                    <input type="text"  class="form-control" name="UserID"
                  value={dataObject.Login_UsesrID}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_UsesrID: e.target.value,
                    })}
                  required placeholder="User ID" />
                  </div> */}
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Password</span>
                    </div>
                    <input type="password"  class="form-control" name="password"
                  value={dataObject.Login_password}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_password: e.target.value,
                    })
                  }
                  required placeholder="Password" />
                  </div>
                  
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Phone</span>
                    </div>
                    <input type="number" name="alternateemail" class="form-control" value={dataObject.Phone}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Phone: e.target.value,
                    })
                  }
                  required placeholder="9010203040" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Address</span>
                    </div>
                    <textarea
                  class="form-control"
                  rows="2"
                  placeholder="Address *"
                  
                  name="Cont_Address1"
                  required
                  value={dataObject.Address1}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Address1: e.target.value,
                    })
                  }
                ></textarea>
                   
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">City</span>
                    </div>
                    <input type="text" name="city" class="form-control"  value={dataObject.City}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      City: e.target.value,
                    })
                  }
                  required placeholder="City" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">State</span>
                    </div>
                    <select
                  class="form-control"
                  id="state"
                  value={dataObject.State}
                  onChange={(e) =>
                    
                    setDataObject({
                      ...dataObject,
                      State: e.target.value,
                    })
                  }
                >
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
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
                  <option value="MS">Mississippi</option>
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
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">
                    South Carolina
                  </option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington </option>
                  <option value="WV">
                    West Virginia
                  </option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Zip Code</span>
                    </div>
                    <input type="number" name="zipcode" class="form-control"   value={dataObject.ZipCode}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ZipCode: e.target.value,
                    })
                  }
                  required placeholder="Zip Code" />
                  </div>
                  </div>
                    </div>
                    <div class="col-6">
                    <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span style={{width:'198px'}} class="input-group-text">Login Account Identifier</span>
                    </div>
                    <input type="text" name="name" class="form-control" value={dataObject.Account_AccountIdentifier}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_AccountIdentifier: e.target.value,
                    })
                  }
                  required placeholder="Login Account Identifier" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span style={{width:'198px'}} class="input-group-text">Login Account Password</span>
                    </div>
                    <input type="text"  class="form-control" name="UserID"
                  value={dataObject.Account_AccountPassword}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_AccountPassword: e.target.value,
                    })
                  }
                  required placeholder="Login Account Password" />
                  </div>
                    <p  >
                <b>Pricing </b>
              </p>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span style={{width:'186px'}} class="input-group-text">Manual Certification</span>
                    </div>
                    <input type="number" name="entityid" class="form-control" value={dataObject.ManualCertCost}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ManualCertCost: e.target.value,
                    })
                  }
                  required placeholder="Enter fee in dollars" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span style={{width:'186px'}} class="input-group-text">Automated Certification</span>
                    </div>
                    <input type="number"  class="form-control" name="UserID"
                 value={dataObject.AutomatedCertCost}
                 onChange={(e) =>
                   setDataObject({
                     ...dataObject,
                     AutomatedCertCost: e.target.value,
                   })
                 }
                 required placeholder="Enter fee in dollars" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span style={{width:'186px'}} class="input-group-text">LOL Certification</span>
                    </div>
                    <input type="number"  class="form-control" name="UserID"
                value={dataObject.LOLCertCost}
                onChange={(e) =>
                  setDataObject({
                    ...dataObject,
                    LOLCertCost: e.target.value,
                  })
                }
                required placeholder="Enter fee in dollars" />
                  </div>
                    {/* <div style={{textAlign:'center',fontSize:'24px',marginBottom:'22px'}}><b>Configuration & Price Information</b></div> */}
                    <div class="configtit" >Configuration</div>
                  <div class="input-group form-group">
                    
                    <div style={{width:'100%'}}>
            {MyCheckBoxList.map((k,index) => {
              return(
                <div class="input-group leftControlGroup">
                <input
                  type="checkbox"
                  onChange={() => chonchange(k,index)}
                  value={k.name}
                  
                />{" "}
                &nbsp;{k.name}
              </div>
              )
            })}
           
          </div>
                  </div>
                 
                    </div>
                  </div>
                
                  {!btndis ? 
              <div style={{textAlign:'center'}}>
              <button
                style={{width:'25%',textAlign:'center'}}
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                disabled={btndis}
                onClick={() => saveregdata()}
              >
                Create
              </button>
             
              </div>: 
              <div style={{textAlign:'center'}}>
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
             
              </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
                  {/* <div style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                  {steps.map((k,indexs) => {
                    return(
                      <div class="stepper-wrapper">
  <div class={indexes.includes(indexs) ? index === indexs + 1 ? "stepper-item pending" : "stepper-item completed" :indexs === 2 ? indexes.includes(3) ? "stepper-item lchild" : "stepper-item" : index === indexs + 1 ? "stepper-item pending" : "stepper-item notcompleted"}>
    <div class="step-counter">{++indexs}</div>
    <div class="step-name">{k.name}</div>
  </div>
  
</div>
                    )
                    
                  })}
                  </div> */}
                  {/* {steps[index - 1].component} */}

          
                  
                  
    </>
  );
};

export default Registration;
