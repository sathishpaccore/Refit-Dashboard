import React,{useState,useEffect} from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const AccountInfo = (props) => {
    const [btndis,setBtndis] = useState(false);
    const [array,setarray] = useState([]);
    
    const [dataObject, setDataObject] = useState({
        Account_AccountIdentifier:'',
        Account_InternalAccountIdentifier:'',
        Account_AccountPassword:'',
      
    });
    let navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(props.accountdata).length > 1) {
            getprevdata()
            
          }
       
      }, []);
      const getprevdata = async() => {
            await setDataObject({
                ...dataObject,
                Account_AccountIdentifier: props.accountdata.loginaccountidentifier,
                Account_InternalAccountIdentifier:props.accountdata.accountinternalidentifier,
                Account_AccountPassword:props.accountdata.accountaccountpassword,
                
              })
      }
    const saveregdata = async() => {
        setBtndis(true);
        if(dataObject.Account_AccountIdentifier?.length < 4){
            setBtndis(false)
            toast.error('Login Account Identifier Must have Minimum 4 Characters', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.Account_InternalAccountIdentifier?.length < 4){
            setBtndis(false)
            toast.error('Internal Account Identifier Must have Minimum 4 Characters', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.Account_AccountPassword?.length < 4){
            setBtndis(false)
            toast.error('Account Password Must have Minimum 4 Characters', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else {
         
          const obj = {
            loginaccountidentifier:dataObject.Account_AccountIdentifier,
            accountinternalidentifier:dataObject.Account_InternalAccountIdentifier,
            accountaccountpassword:dataObject.Account_AccountPassword,
           
          }
        props.func(obj)
           
        }
    }
    const sendprev = () => {
        
            props.prev(1);
        
    }
    return ( 
        <div class="admform2" style={{width:'50%',marginLeft:'25%',backgroundColor:'white'}}>
      <div class="content admin_register reg" style={{ backgroundColor: "white" }}>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'12px'}}><b>Account Information</b></div>
                  <div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Login Account Identifier</span>
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
                      <span class="input-group-text">Internal Account Identifier</span>
                    </div>
                    <input type="text" name="entityid" class="form-control" value={dataObject.Account_InternalAccountIdentifier}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_InternalAccountIdentifier: e.target.value,
                    })
                  }
                  required placeholder="Internal Account Identifier" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Login Account Password</span>
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
                 
                  </div>
                  <div style={{marginTop:'30px'}}>
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
              </button>
</div>

</div>
                  <div >
              
             
              </div>
              <div >
              
             
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
 
export default AccountInfo;