import React,{useState,useEffect} from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const LoginInfo = (props) => {
    const [btndis,setBtndis] = useState(false);
    const [array,setarray] = useState([]);
    
    const [dataObject, setDataObject] = useState({
      Login_name:'',
      Login_LenderID:'',
      Login_UsesrID:'',
      Login_password:'',
      
    });
    let navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(props.logindata).length > 1) {
            getprevdata()
           
          }
       
      }, []);
      const getprevdata = async() => {
            await setDataObject({
                ...dataObject,
                Login_name: props.logindata.loginname,
                Login_LenderID:props.logindata.loginlenderid,
                Login_UsesrID:props.logindata.loginuserid,
                Login_password:props.logindata.loginpassword
              })
      }
    const saveregdata = async() => {
        setBtndis(true);
        if(dataObject.Login_name?.length < 4){
          setBtndis(false)
          toast.error('Name Must have Minimum 4 Characters', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if(!dataObject.Login_LenderID){
          setBtndis(false)
          toast.error('Enter LenderID', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if(dataObject.Login_UsesrID?.length < 4){
          setBtndis(false)
          toast.error('UserID Must have Minimum 4 Characters', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else if(dataObject.Login_password?.length < 4){
          setBtndis(false)
          toast.error('Password Must have Minimum 4 Characters', {
            position: toast.POSITION.TOP_RIGHT
          });
        }else {
          
          const obj = {
            loginname:dataObject.Login_name,
            loginlenderid:dataObject.Login_LenderID,
            loginuserid:dataObject.Login_UsesrID,
            loginpassword:dataObject.Login_password
          }
        props.func(obj)
           
        }
    }
    return ( 
        <div class="admform" style={{width:'50%',marginLeft:'25%',backgroundColor:'white'}}>
      <div class="content admin_register reg" style={{ backgroundColor: "white" }}>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Login Information</b></div>
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
                  value={dataObject.Login_name} required placeholder="Name" />
                  </div>
                  <div class="input-group form-group">
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
                  </div>
                  <div class="input-group form-group">
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
                  </div>
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
                Next
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
     );
}
 
export default LoginInfo;