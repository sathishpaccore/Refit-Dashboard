import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AuthApi from "../Auth/AuthAPI";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";



                                                             


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [btndis, setBtndis] = useState(false)

  const [token , setToken] = useState();

let navigate = useNavigate()

 
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
    const obj = {
      LoginUser: username,
      Password : password
    }
     const token = await authService.login(obj)

     if(token.token){
       
       setToken(token.data);
      
       setBtndis(false)
       if(token.UserType === 'Admin') {
         navigate("/dashboard", { replace: true });
        //  getClientData();
       }else {
         navigate("/Dashboard", { replace: true });
       }
       
     }else {
       setBtndis(false)
       toast.error(token.Message, {
         position: toast.POSITION.TOP_RIGHT
       });
     }
   
   } catch (error) {
     setBtndis(false)
     
    
   }
   
 }
   
 };

  return (
    <Box className="" sx={{ flexGrow: 1 }}>
      <Grid spacing={1}>
        <Grid item xs={12}>
          <Item>
            <img
              src="static/new/images/Refit-logo.png"
              className="img-fluid"
              style={{
                marginTop: "-20px",
                height: 50,
                width: 100,
                float: "left",
              }}
              alt=""
            />
          </Item>
        </Grid>
      </Grid>

      <div className="container margin_top_110px">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 card">
            <div className="text-center mt-4 mb-4">
              <img
                src="static/new/images/Refit-logo.png"
                className="img-fluid mb-4"
                alt="refitlogo"
              />
              <h5>
                <b>Welcome back!</b>
              </h5>
              <p className="text-secondary">Login to your account</p>
              <div className="form-group wrap-input100 validate-input ml-4 mt-4">
                <span className="btn-show-pass">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="text"
                  id="UserName"
                  name="UserName"
                  maxLength={30}
                  className="bg-white border col-lg-9 col-md-11 form-control"
                  placeholder="Email Address"
                  required="required"
                  onChange={(e)=> setUserName(e.target.value)}
                />
              </div>
              <div className="form-group wrap-input100 validate-input ml-4">
                <span className="btn-show-pass">
                  <i className="fa fa-key"></i>
                </span>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  className="bg-white border col-lg-9 col-md-11 form-control"
                  placeholder="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                style={{
                  backgroundColor: "#01966B",
                  border: "1px solid #01966B",
                }}
                disabled={btndis}
                onClick = {handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </Box>
  );
}
