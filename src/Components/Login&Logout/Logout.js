import { useContext } from "react";
import AuthApi from "../Auth/AuthAPI";
import useToken from "../Auth/UseToken";
import Login from "./Login";
import Cookies from "js-cookie";

export default function Logout() {
  const Auth = useContext(AuthApi);
  const { token, setToken } = useToken();

  Auth.setAuth(false);
  Cookies.remove("token");
  // Session.Clear();
  sessionStorage.clear('token');

  return <Login setToken={setToken} />;
}
