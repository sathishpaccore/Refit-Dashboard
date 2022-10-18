import { LoginTypes } from "./LoginTypes";
import CookieManager from "../../Helpers/AuthHelpers/CookieManager";
import { SET_AUTHTOKEN } from "../../Helpers/AuthHelpers/CookieManagerTypes";
import LoginDataService from "../../Services/API/LoginService";

export const login = (userName, password) => async (dispatch) => {
  try {
   
    const res = await LoginDataService.validateUserLogin(userName, password);
    

    if (res.data.token) {
      
      localStorage.setItem("access_token", res.data.token);
    }

    localStorage.setItem("validUser", res.data.ValidUser);
    localStorage.setItem("message", res.data.Message);
    localStorage.setItem("userType", res.data.UserType);
    localStorage.setItem("ClientID", res.data.ClientID);
    localStorage.setItem("LenderID", res.data.LenderID);

    dispatch({
      type: LoginTypes.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
  
  }
};
