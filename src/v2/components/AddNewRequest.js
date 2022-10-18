import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export default function BasicButtons() {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('md');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} direction="row" className="ml-4">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ background: "#01966B", color: "white", borderRadius: "8px" }}
      >
        Add New Request
      </Button>

      <Dialog maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="row">
            <div className="form-group col-lg-11 col-md-11 col-11">
              <h6>
                <b>Create New Entity</b>
              </h6>
            </div>
            <div className="form-group col-lg-1 col-md-1 col-1">
              <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </DialogTitle>

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
                  <label for="" className="ml-2">
                    Automated Address
                  </label>
                  <br />
                  <input type="checkbox" id="" name="" value="" checked />
                  <label for="" className="ml-2">
                    Flood Certification
                  </label>
                  <br />
                  <input type="checkbox" id="" name="" value="" />
                  <label for="" className="ml-2">
                    LOL Certification
                  </label>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <div className="text-center">
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="outlined"
              className="outlined"
              style={{ border: "1px solid #01966B", color: "#01966B" }}
            >
              Cancel
            </Button>

            <Button
              onClick={handleClose}
              variant="contained"
              style={{
                background: "#01966B",
                color: "white",
                borderRadius: "8px",
                textTransform: "capitalize",
              }}
            >
              Create Entity
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </Stack>
  );
}
