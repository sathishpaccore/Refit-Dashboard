import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CloseIcon from '@mui/icons-material/Close';


export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xs');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   const handleMaxWidthChange = (event) => {
//     setMaxWidth(
//       // @ts-expect-error autofill of arbitrary value is not handled.
//       event.target.value,
//     );
//   };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      Create New User
      </Button>
      <Dialog
        // fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
        <div className="row">
            <div className="form-group col-lg-10 col-md-10 col-10 mt-1"><h6><b>Create New User</b></h6></div>
            <div className="form-group col-lg-2 col-md-2 col-2">
            <Button onClick={handleClose}><CloseIcon style={{color: '#000000'}}/></Button>

            </div>
            
        </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div className="row">        
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
            </div>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            
          </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant="outlined" className="outlined" style={{border: '1px solid #01966B',color: '#01966B'}}>Cancel</Button>

            <Button onClick={handleClose} variant="contained" style={{background: "#01966B", color: "white",borderRadius: "8px", textTransform: 'capitalize'}}>Create User</Button>

          </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
