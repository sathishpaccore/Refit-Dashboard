import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import http from "../../Helpers/AuthHelpers/http-common";
import AuthApi from "../Auth/AuthAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [btndis, setBtndis] = useState(false)
  let navigate = useNavigate();
  const Auth = useContext(AuthApi);
  
  const loginUser = async (userName, password) => {
    let data = {};
    data["LoginUser"] = userName;
    data["Password"] = password;

    const response = await http
      .post("/users/ValidateUser", data)
      .catch((err) => {
        
      });

    if (response.status === 200 && response.data.ValidUser) {
      Auth.setAuth(true);
      sessionStorage.setItem("validUser", response.data.ValidUser);
      sessionStorage.setItem("message", response.data.Message);
      sessionStorage.setItem("userType", response.data.UserType);
      sessionStorage.setItem("ClientID", response.data.ClientID);
      sessionStorage.setItem("LenderID", response.data.LenderID);
      sessionStorage.setItem(
        "Address1",
        response.data.UserData.ClientInfo.Address1
      );
      sessionStorage.setItem(
        "Address2",
        response.data.UserData.ClientInfo.Address2
      );
      sessionStorage.setItem(
        "AlternateEmail",
        response.data.UserData.ClientInfo.AlternateEmail
      );
      sessionStorage.setItem(
        "AlternatePhone",
        response.data.UserData.ClientInfo.AlternatePhone
      );
      sessionStorage.setItem(
        "AutomatedAddress",
        response.data.UserData.ClientInfo.AutomatedAddress
      );
      sessionStorage.setItem(
        "AutomatedCertCost",
        response.data.UserData.ClientInfo.AutomatedCertCost
      );
      sessionStorage.setItem("City", response.data.UserData.ClientInfo.City);
      sessionStorage.setItem(
        "ClientID",
        response.data.UserData.ClientInfo.ClientID
      );
      sessionStorage.setItem("Email", response.data.UserData.ClientInfo.Email);
      sessionStorage.setItem(
        "FaxNumber",
        response.data.UserData.ClientInfo.FaxNumber
      );
      sessionStorage.setItem(
        "FloodCertification",
        response.data.UserData.ClientInfo.FloodCertification
      );
      sessionStorage.setItem(
        "InternalAccountIdentifier",
        response.data.UserData.ClientInfo.InternalAccountIdentifier
      );
      sessionStorage.setItem(
        "IsActive",
        response.data.UserData.ClientInfo.IsActive
      );
      sessionStorage.setItem(
        "LOLCertCost",
        response.data.UserData.ClientInfo.LOLCertCost
      );
      sessionStorage.setItem(
        "LOLCertification",
        response.data.UserData.ClientInfo.LOLCertification
      );
      sessionStorage.setItem(
        "LenderID",
        response.data.UserData.ClientInfo.LenderID
      );
      sessionStorage.setItem(
        "LoginAccountIdentifier",
        response.data.UserData.ClientInfo.LoginAccountIdentifier
      );
      sessionStorage.setItem(
        "ManualCertCost",
        response.data.UserData.ClientInfo.ManualCertCost
      );
      sessionStorage.setItem("Name", response.data.UserData.ClientInfo.Name);
      sessionStorage.setItem("Phone", response.data.UserData.ClientInfo.Phone);
      sessionStorage.setItem("State", response.data.UserData.ClientInfo.State);
      sessionStorage.setItem(
        "UserID",
        response.data.UserData.ClientInfo.UserID
      );
      sessionStorage.setItem(
        "UserType",
        response.data.UserData.ClientInfo.UserType
      );
      sessionStorage.setItem(
        "ZipCode",
        response.data.UserData.ClientInfo.ZipCode
      );
      sessionStorage.setItem("requestInfo", response.data.UserData.RequestInfo);
      sessionStorage.setItem("gridCount", response.data.gridCount);
    } else {
    }
    return response;
  };

  const handleSubmit = async (e) => {
   setBtndis(true)
   
    e.preventDefault();
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)){

      toast.error("Invalid Format", {
        position: toast.POSITION.TOP_RIGHT
      });
      setBtndis(false)
      return

  }if(!password){

    toast.error("Enter Password", {
      position: toast.POSITION.TOP_RIGHT
    });
    setBtndis(false)
    return

}else{
    try {
      const token = await loginUser(username, password);
      
      if(token.data.token){
        
        setToken(token.data);
       
        setBtndis(false)
        if(token.data.UserType === 'Admin') {
          navigate("/orgadmin", { replace: true });
        }else {
          navigate("/Dashboard", { replace: true });
        }
        
      }else {
        setBtndis(false)
        toast.error(token.data.Message, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    
    } catch (error) {
      setBtndis(false)
      
     
    }
    
  }
    
  };

  return (
    <>
    
      <div className="container margin_top_110px">
        <div className="border_radius_15px card">
          <div className="pb-3 pb-lg-0 pb-md-0 pl-3 pl-lg-0 pl-md-0 pr-3 pr-lg-0 pr-md-0 pt-3 pt-lg-0 pt-md-0">
            <div className="row">
              <div className="col-lg-7 col-md-6 d-lg-block d-md-block d-none">
                <img
                  src="static/new/images/loginImage.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-5 col-md-6 mt-lg-5 mt-md-3 col-12"
                
              >
                <div className="mt-lg-5 mt-md-4 pt-lg-2">
                  <h4 className="font-italic font-weight-bold font_size_29px h2 mt-lg-4 text_yellow">
                    Let's Start with Login
                  </h4>
                  <div className="mt-4 mt-lg-4 mt-md-4">
                    <div className="form-group wrap-input100 validate-input">
                      <span className="btn-show-pass">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        id="UserName"
                        name="UserName"
                        maxLength={30}
                        className="bg-white border col-lg-9 col-md-11 form-control"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        required="required"
                      />
                    </div>
                    <div className="form-group wrap-input100 validate-input">
                      <span className="btn-show-pass">
                        <i className="fa fa-key"></i>
                      </span>
                      <input
                        type="password"
                        id="Password"
                        name="Password"
                        className="bg-white border col-lg-9 col-md-11 form-control"
                        placeholder="password"
                        onChange={(x) => setPassword(x.target.value)}
                        required="required"
                      />
                    </div>
                  </div>
                  <div>
                  {!btndis ? 
                    <input
                    className="border_radius_10px btn btn_about col-lg-9 col-md-11 mr-4 mr-lg-4 mr-md-4 pl-4 pr-4"
                    type="submit"
                    value="Submit"
                    disabled={btndis}
                    onClick={handleSubmit}
                  /> : 
                  <input
                      className="border_radius_10px btn btn_about col-lg-9 col-md-11 mr-4 mr-lg-4 mr-md-4 pl-4 pr-4"
                      type="submit"
                      value="Processing...."
                      disabled
                    />
                  }
                    
                  </div>
                  {/* {message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                    )} */}
                  {/* <div className="col-12 col-lg-12 col-md-12 ml-lg-0 mt-3 mt-lg-3 mt-md-2 pl-md-0 text-center text-lg-center text-md-center">
                    <a
                      href="#f"
                      className="font_size_14px ml-lg-5 pl-lg-5 text-muted text_decoration_none"
                    >
                      Forget Password?
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
