import httpServices from "./httpServices";
import http from "./httpServices";
import jwtDecode from 'jwt-decode';



export async function login(obj){
  const data = await http.post('/users/ValidateUser',obj);
  if(data.data.ValidUser === true){
    const localData = await localStorage.setItem('logindata', data.data.token);
    const userData = await sessionStorage.setItem('userdata', JSON.stringify( data.data));
     
  }
  return data.data;  
}

export async function getClientData(obj){
  const data = await http.post('/clients/getclient', obj);
  return data.data;
}

export async function allRequestsData(obj){
  const data = await http.post('requests/getallrequests', obj);
  return data.data;
}



export async function getCurrentUser(){

  try {

    const jwt = await localStorage.getItem('logindata');

      const some = jwtDecode(jwt);

      if (some.exp >= Date.now() /  1000) {
        return some;
      }else{
        logout();
      }

  } catch (ex) {
    return null;
  }
}
export async function logout() {
  await localStorage.removeItem('logindata');
}

export default {
  login,
  logout,
  getCurrentUser,
  getClientData,

}