import { LoginTypes } from "../../Actions/Login/LoginTypes";

const initialState = [];

function loginDataReducer(loginData = initialState, action) {
  const { type, payload } = action;
  // console.log(type);
  switch (type) {
    case LoginTypes.LOGIN_SUCCESS:
      return payload;

    default:
      return loginData;
  }
}

export default loginDataReducer;
