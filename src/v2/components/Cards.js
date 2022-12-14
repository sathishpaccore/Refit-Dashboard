import * as React from 'react';
// Sales Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

//Drop Down
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


// Side nav bar Start
const drawerWidth = 240;

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
  

export default function Cards() {
    
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

      
  return (
    <div className="" style={{height: '22rem',background: "#f0fcf7"}}>
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
                        label="This Week">               
                        <MenuItem value={10}>This Week</MenuItem>
                        <MenuItem value={20}>Month</MenuItem>
                        <MenuItem value={30}>Yearly</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className="mt-2">
                  <Grid item xs={7}>
                    <Typography
                      
                      component="div"
                      color="text.secondary">
                      Sale
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>$5,673.36 <span style={{fontSize: "13px",color: "green"}}>+3.00%</span></Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      
                      component="div"
                      color="text.secondary"
                    >
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
                        label="This Week">               
                        <MenuItem value={10}>This Week</MenuItem>
                        <MenuItem value={20}>Month</MenuItem>
                        <MenuItem value={30}>Yearly</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className="mt-2">
                  <Grid item xs={7}>
                    <Typography
                      
                      component="div"
                      color="text.secondary">
                      Customers
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>562 <span style={{fontSize: "13px",color: "green"}}>+12.56%</span></Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      
                      component="div"
                      color="text.secondary"
                    >
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
                        label="This Week">               
                        <MenuItem value={10}>This Week</MenuItem>
                        <MenuItem value={20}>Month</MenuItem>
                        <MenuItem value={30}>Yearly</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className="mt-2">
                  <Grid item xs={4}>
                    <Typography
                      
                      component="div"
                      color="text.secondary">
                      All Orders
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>62</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      
                      component="div"
                      color="text.secondary"
                    >
                      Pending
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>12</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      
                      component="div"
                      color="text.secondary"
                    >
                      Completed
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>50 <span style={{fontSize: "13px",color: "green"}}>+6.00%</span> </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}