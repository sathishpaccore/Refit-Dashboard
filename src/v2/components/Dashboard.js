// import * as React from 'react';
import React ,{ useEffect} from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";


// Sales Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

//Drop Down
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Components added
import DataTable from "./DataTable";
import Share from "./Share";
import Date from "./Date";
import Filter from "./Filter";
import BulkDrop from "./Bulk-Drop";
import AddNewRequest from "./AddNewRequest";
import SearchBar from "./SearchBar";
import BarChart from "../../Components/Charts/BarChart";
import BarChartDash from "./BarChartDash";
import DoughnutChart from "./DoughnutChart";
import DropDown from "./DropDown";
import { connect } from "react-redux";
import auth_action from "../Redux/actions/authaction";
// import authService from "../services/authService";
import SideNav from './SideNav';


// Side nav bar Start
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(),
    marginTop: -50,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    ...(!open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Side nav bar End

 function Dashboard(props) {

  const [age, setAge] = React.useState("");

  useEffect(() => {
    auth_action()
  
   
  }, [])
  



  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(props,'prospsAuth');



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <Box sx={{ display: "flex" }}>
     <SideNav />
    
      <Main open={open}>
        <DrawerHeader />
        {/* Sales Card Design Start */}
        <div className="mt-4" style={{ background: "#f0fcf7" }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={7}>
                        <HeadphonesOutlinedIcon
                          style={{
                            color: "#01966B",
                            backgroundColor: "#5570F11F",
                            height: "33px",
                            width: "33px",
                            borderRadius: "5px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={5} style={{ marginTop: "-18px" }}>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            This Week
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="This Week"
                          >
                            <MenuItem value={10}>This Week</MenuItem>
                            <MenuItem value={20}>Month</MenuItem>
                            <MenuItem value={30}>Yearly</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container className="mt-2">
                      <Grid item xs={7}>
                        <Typography component="div" color="text.secondary">
                          Sale
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                          $5,673.36{" "}
                          <span style={{ fontSize: "13px", color: "green" }}>
                            +3.00%
                          </span>
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography component="div" color="text.secondary">
                          Volume
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>62</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={7}>
                        <PeopleAltOutlinedIcon
                          style={{
                            color: "#01966B",
                            backgroundColor: "#5570F11F",
                            height: "33px",
                            width: "33px",
                            borderRadius: "5px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={5} style={{ marginTop: "-18px" }}>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            This Week
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="This Week"
                          >
                            <MenuItem value={10}>This Week</MenuItem>
                            <MenuItem value={20}>Month</MenuItem>
                            <MenuItem value={30}>Yearly</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container className="mt-2">
                      <Grid item xs={7}>
                        <Typography component="div" color="text.secondary">
                          Customers
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                          562{" "}
                          <span style={{ fontSize: "13px", color: "green" }}>
                            +12.56%
                          </span>
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography component="div" color="text.secondary">
                          Active
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>263</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={7}>
                        <ShoppingBagOutlinedIcon
                          style={{
                            color: "#01966B",
                            backgroundColor: "#5570F11F",
                            height: "33px",
                            width: "33px",
                            borderRadius: "5px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={5} style={{ marginTop: "-18px" }}>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            This Week
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="This Week"
                          >
                            <MenuItem value={10}>This Week</MenuItem>
                            <MenuItem value={20}>Month</MenuItem>
                            <MenuItem value={30}>Yearly</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container className="mt-2">
                      <Grid item xs={4}>
                        <Typography component="div" color="text.secondary">
                          All Orders
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>62</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography component="div" color="text.secondary">
                          Pending
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>12</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography component="div" color="text.secondary">
                          Completed
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                          50{" "}
                          <span style={{ fontSize: "13px", color: "green" }}>
                            +6.00%
                          </span>{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* Sales Card Design End */}
        {/* Sales Card Design Start */}
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12}>
                        <div className="d-flex">
                          Summery
                          <div style={{ marginTop: "-15px" }}>
                            <DropDown />
                            <DropDown />                           
                              <DropDown />
                         
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container className="mt-2">
                      <Grid item xs={12}>
                        <BarChartDash />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12}>
                        <div className="d-flex">
                          Request Summery
                          <div style={{ marginTop: "-15px" }}>
                            <DropDown />
                            <DropDown />
                            <DropDown />
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container className="mt-2">
                      <Grid item xs={12}>
                        <DoughnutChart />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* Sales Card Design End */}

        {/* Data Table Design Start */}
        <DataTable cmp="dashboard" />
        {/* Data Table Design End */}

        
    
      </Main>

    </Box>
  );
}


const mapStateToProps = state => {
  return{
    auth:state.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);


