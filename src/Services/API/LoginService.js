import http from "../../Helpers/AuthHelpers/http-common";

class LoginDataService {
  validateUserLogin(userName, password) {
    //console.log(userName, password);
    let data = {};
    data["LoginUser"] = userName;
    data["Password"] = password;
    //console.log(data);
    return http.post("/users/ValidateUser", data);
  }
}

export default new LoginDataService();
