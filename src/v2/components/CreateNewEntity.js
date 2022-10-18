import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><h6><b>Create New Entity</b></h6></DialogTitle>

        <DialogContent>
    

          <div className="row">
            <div className="form-group col-lg-6 col-md-6 col-12">
              <div className="row">
              <div className="form-group col-lg-12 col-md-12 col-12">
                <h6 className="text-muted ml-2">User Details</h6>
                  
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Name"
                      id="name"
                      placeholder="Name*"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control required"
                      name="Email"
                      id="email"
                      placeholder="Email*"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control required"
                      name="Password"
                      id="password"
                      placeholder="Password*"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Phone"
                      id="phone"
                      placeholder="Phone*"
                      aria-label="Phone*"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Address"
                      id="address"
                      placeholder="Address*"
                      aria-label="Address"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="City"
                      id="city"
                      placeholder="City*"
                      aria-label="City"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="State"
                      id="State"
                      placeholder="State*"
                      aria-label="State"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="ZIP Code"
                      id="zipcode"
                      placeholder="ZIP Code*"
                      aria-label="ZIP Code"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-12">
                
              <div className="row">
                
                <div className="form-group col-lg-12 col-md-12 col-12">
                <h6 className="text-muted ml-2">Login Details</h6>
                  
                </div>
                
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Login Account Identifier"
                      id="Login_Account_Identifier"
                      placeholder="Login Account Identifier*"
                      aria-label="Login Account Identifier"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Login Account Password"
                      id="Login_Account_Password"
                      placeholder="Login Account Password*"
                      aria-label="Login Account Password"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                <h6 className="text-muted mt-2 ml-1">Pricing</h6>                 
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Manual Certification"
                      id="Manual_Certification"
                      placeholder="Manual Certification(Fee in Dollars)"
                      aria-label="Manual Certification(Fee in Dollars)"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Automated Certification"
                      id="Automated_Certification"
                      placeholder="Automated Certification(Fee in Dollars)"
                      aria-label="Automated Certification"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="LOL Certification"
                      id="LOL_Certification"
                      placeholder="LOL Certification(Fee in Dollars)"
                      aria-label="LOL Certification"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                <h6 className="text-muted ml-1">Configuration</h6>                 
                </div>
                <div className="form-group col-lg-12 col-md-12 col-12">
                <input type="checkbox" id="" name="" value="" />
                <label for="" className="ml-2">Automated Address</label><br/>
                <input type="checkbox" id="" name="" value="" checked/>
                <label for="" className="ml-2">Flood Certification</label><br/>
                <input type="checkbox" id="" name="" value="" />
                <label for="" className="ml-2">LOL Certification</label><br/>
               
             
{/*              
                       <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Automated Address" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Flood Certification" />
      <FormControlLabel control={<Checkbox />} label="LOL Certification" />
    </FormGroup>                */}
                </div>
              </div>
            </div>
            {/* <div className="form-group col-lg-6 col-md-5 col-12">
                                     <div className="input-group">
                                       <input
                                         type="number"
                                         className="form-control required"
                                         name="LoanAmount"
                                         id="Loan_LoanAmount"
                                         placeholder="Loan Amount"
                                         aria-label="Loan Amount"
                                         aria-describedby="basic-addon1"
                                      
                                         
                                         required
                                       />
                                     </div>
                                   </div> */}
          </div>
        </DialogContent>
        <div className="text-center">
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" className="outlined" style={{border: '1px solid #01966B',color: '#01966B'}}>Cancel</Button>

            <Button onClick={handleClose} variant="contained" style={{background: "#01966B", color: "white",borderRadius: "8px", textTransform: 'capitalize'}}>Create Entity</Button>

          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
