import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import TextsmsTwoToneIcon from "@mui/icons-material/TextsmsTwoTone";
import TopicIcon from "@mui/icons-material/Topic";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import Customers from "./Customers";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';

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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#FFFFFF" }}
      >


        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
            style={{ color: "#01966B" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="#000000" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"

                color="inherit"
              >
                <NotificationsIcon style={{ color: "#01966B" }} />

              </IconButton>
              <IconButton>
                <Typography color="#000000" component="p" sx={{ flexGrow: 1 }}>
                  Arjun
                </Typography>
              </IconButton>

              <Tooltip title="Open settings">
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem> <Link to="/account" className="text-dark">My account</Link></MenuItem>
                <MenuItem> <Link to="/orders" className="text-dark">Orders</Link></MenuItem>
                <MenuItem> <Link to="/dashboard" className="text-dark">Dashboard</Link></MenuItem>
                <MenuItem> <Link to="/dashboardlogin" className="text-dark">Logout</Link> </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        <Divider />
        <div className="bg-white text-muted">
          <Link to="/dashboard" className="text-dark"> 
           <HomeIcon  className="ml-4" style={{color: "#01966B"}} />
           </Link>
            <span className="mt-4">/ Dashboard</span>
        </div>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ background: "#01966B" }}>
          <Typography variant="h5" noWrap component="div">
            <img
              src="static/new/images/Frame.png"
              className="mr-4"
              alt="refitlogo"
            />
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{ color: "#FFFFFF" }}>
            {theme.direction === "rtl" ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Orders"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <DashboardIcon />
                  ) : (
                    <ShoppingBagOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {["Customers", "New Request"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              button
              component={Link}
              to={Customers}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <PeopleAltOutlinedIcon /> : <TopicIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List>
          {["Requests", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <TextsmsTwoToneIcon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ marginTop: "90px" }}>
          {["Contact Supprot", "Logout"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              style={{ color: "red" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <HeadphonesOutlinedIcon style={{ color: "red" }} />
                  ) : (
                    <LogoutOutlinedIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          
      </Box> */}
    </Box>
  );
}
