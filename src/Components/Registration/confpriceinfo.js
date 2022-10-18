import React,{useState,useEffect} from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import AdminSummaryService from "../../Services/API/AdminSummaryService";
import { toast } from 'react-toastify';

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
const PriceInfo = (props) => {
    const [btndis,setBtndis] = useState(false);
    const [array,setarray] = useState([]);
    
    const [dataObject, setDataObject] = useState({
        AutomatedAddress:false,
    FloodCertification:false,
    LOLCertification:true,
    ManualCertCost: '',
    AutomatedCertCost: '',
    LOLCertCost: '',
    UserType: sessionStorage.getItem("UserType"),
    });
    let navigate = useNavigate();
   
    const saveregdata = async() => {
        setBtndis(true);
        if(!dataObject.ManualCertCost){
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
                "Name" : props.logindata.loginname,
                 "Email": props.contactdata.Email,
                 "InternalAccountIdentifier": props.accountdata.accountinternalidentifier,
                 UserID:props.logindata.loginuserid,
                 LoginAccountIdentifier:props.accountdata.loginaccountidentifier,
                 "AlternateEmail" :props.contactdata.AlternateEmail,
                "Phone": props.contactdata.Phone,
                "AlternatePhone": props.contactdata.AlternatePhone,
                "FaxNumber": props.contactdata.FaxNumber,
                 "Address1": props.contactdata.Address1,
                  "Address2": props.contactdata.Address2,
                  "City": props.contactdata.City,
                  "State": props.contactdata.State,
                  "ZipCode": props.contactdata.ZipCode,
                  "LoginUser":dataObject.UserType,
                  "usertype":'RefitUser',
                  // "RoleID":2,
                  Password:props.logindata.loginpassword,
                  "LoginAccountPassword": props.accountdata.accountaccountpassword,
                  "IsActive":1,
                  LenderID:props.logindata.loginlenderid,
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
    const chonchange = async(item) => {
        if(array.includes(item.name)){
          const det = array.filter(k => k !== item.name)
          setarray(det)
        }else{
          setarray([...array, item.name])
        }
      }
      const sendprev = () => {
        
        props.prev(2);
    
}
    return ( 
        <div class="admform2" style={{width:'50%',marginLeft:'25%',backgroundColor:'white'}}>
      <div class="content admin_register reg" style={{ backgroundColor: "white" }}>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'22px'}}><b>Configuration & Price Information</b></div>
                  <div>
                    <div style={{fontWeight:600,marginBottom:'12px'}}>Configuration</div>
                  <div class="input-group form-group">
                    
                    <div style={{display:'flex',width:'100%'}}>
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
                  <p style={{marginBottom:'18px'}} class="sideheader">
                <b>Pricing </b>
              </p>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Manual Certification</span>
                    </div>
                    <input type="number" name="entityid" class="form-control" value={dataObject.ManualCertCost}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ManualCertCost: e.target.value,
                    })
                  }
                  required placeholder="Manual Certification" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Automated Certification</span>
                    </div>
                    <input type="number"  class="form-control" name="UserID"
                 value={dataObject.AutomatedCertCost}
                 onChange={(e) =>
                   setDataObject({
                     ...dataObject,
                     AutomatedCertCost: e.target.value,
                   })
                 }
                 required placeholder="Automated Certification" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">LOL Certification</span>
                    </div>
                    <input type="number"  class="form-control" name="UserID"
                value={dataObject.LOLCertCost}
                onChange={(e) =>
                  setDataObject({
                    ...dataObject,
                    LOLCertCost: e.target.value,
                  })
                }
                required placeholder="LOL Certification" />
                  </div>
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
       onClick={() => saveregdata()}
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
                  {/* <button
                style={{width:'25%'}}
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button pull-left"
                disabled={btndis}
                onClick={() => sendprev()}
              >
                Previous
              </button>
                  {!btndis ? 
              <div >
              <button
                style={{width:'25%'}}
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button pull-right"
                disabled={btndis}
                onClick={() => saveregdata()}
              >
                Next
              </button>
             
              </div>: 
              <div>
              <button
               style={{width:'25%'}}
               type="submit"
               id="Id_BtnSubmit"
               name="Id_BtnSubmit"
               class="btn btn-primary button pull-right"
                disabled
              >
                Processing...
              </button>
             
              </div>}*/}
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default PriceInfo;