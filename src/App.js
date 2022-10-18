import React, { useState, useContext } from "react";
import DashboardFunction from "./Components/Dashboard/DashboardFunctional";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login&Logout/Login";
import PlaceOrder from "./Components/Orders/PlaceOrder";
import OrderSummary from "./Components/Orders/OrderSummary";
import Header from "./Components/Header/HomeHeader";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/ErrorPages/404NotFound";
import useToken from "./Components/Auth/UseToken";
import AuthApi from "./Components/Auth/AuthAPI";
import Logout from "./Components/Login&Logout/Logout";
import { ToastContainer } from 'react-toastify';
import Registration from './Components/Registration/Registration';
import AdminSummaryFunctional from "./Components/AdminSummary/AdminSummaryFunctional";
import ProfileScreen from "./Components/Orders/profile/ProfileScreen";
import CreateUser from "./Components/Dashboard/createuser";
import CreatedUserLIst from "./Components/Dashboard/CreatedUserLIst";
import EditUser from "./Components/Dashboard/EditUser";
import { logger } from './logger';
import Orders from "./v2/components/Orders";
import SideNav from "./v2/components/SideNav";
import Dashboard from "./v2/components/Dashboard";
import DashboardLogin from "./v2/components/DashboardLogin";
import BarChart from "./Components/Charts/BarChart";
import OrgAdmin from "./v2/components/OrgAdmin";
import CreateNewEntity from "./v2/components/CreateNewEntity";
import CreateNewUser from "./v2/components/CreateNewUser";
import Account from "./v2/components/Account";
import BorrowerInformation from "./v2/components/BorrowerInformation";
import Main from "./v2/components/main";
import Customers from "./v2/components/Customers";

function App() {
  const { token, setToken } = useToken();
  const [auth, setAuth] = useState(token === null ? false : true);
 
  logger.log(logger.error,'errorweri');
  logger.warn('Careful there!');
  logger.error('Oh, no!');
  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <ToastContainer />
      <Router>
        <RoutesFunc />
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/OrderSummary/:orderId" element={<OrderSummary />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </Router>
    </AuthApi.Provider>
  );
}

const RoutesFunc = () => {
  const { token, setToken } = useToken();
  const Auth = useContext(AuthApi);
  Auth.setAuth(token === null ? false : true);
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      {/* route add  by sathish */}
      <Route path="/orders" element={<Orders/>} />
      <Route path="/customers" element={<Customers/>} />
      <Route path="/menu" element={<SideNav/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboardlogin" element={<DashboardLogin/>} />
      {/* <Route path="/orgadmin" element={<OrgAdmin/>} /> */}
      <Route path="/createnewentity" element={<CreateNewEntity />} /> 
      <Route path="/createnewuser" element={<CreateNewUser />} /> 
      <Route path="/account" element={<Account />} /> 
      <Route path="/borrower" element={<BorrowerInformation />} /> 
      <Route path="/main" element={<Main />} /> 

      <Route path="/barchart" element={<BarChart/>} />
      

      <Route path="/register" element={<Registration setToken={setToken} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute auth={Auth}>
            <Header />
            <DashboardFunction />
            <Footer />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Registration setToken={setToken} />} />
      <Route path="/orgadmin" element={<AdminSummaryFunctional setToken={setToken} />} />
      <Route
        path="/placeorder"
        element={
          <ProtectedRoute auth={Auth}>
            <Header />
            <PlaceOrder />
            <Footer />
          </ProtectedRoute>
        }
      />
        <Route

path="/profilescreen"

element={

  <ProtectedRoute auth={Auth}>

    <Header />

    <ProfileScreen />

    <Footer />

  </ProtectedRoute>

}

/>
<Route

path="/createuser"

element={

  <ProtectedRoute auth={Auth}>

    <Header />

    <CreateUser />

    <Footer />

  </ProtectedRoute>

}

/>
<Route

path="/createdUsersList"

element={

  <ProtectedRoute auth={Auth}>

    <Header />

    <CreatedUserLIst />

    <Footer />

  </ProtectedRoute>

}

/>
<Route

path="/editUser"

element={

  <ProtectedRoute auth={Auth}>

    <Header />

    <EditUser />

    <Footer />

  </ProtectedRoute>

}

/>
      <Route
        path="/OrderSummary/:orderId"
        element={
          <ProtectedRoute auth={Auth}>
            <Header />
            <OrderSummary />
            <Footer />
          </ProtectedRoute>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const ProtectedRoute = ({ auth, children }) => {
  const { token, setToken } = useToken();

  auth.setAuth(token === null ? false : true);

  return auth.auth ? children : <Login setToken={setToken} />;
};

export default App;
