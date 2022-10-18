import axios from "axios";
import {toast} from "react-toastify";

axios.defaults.baseURL ='https://floodserviceapi.azurewebsites.net/';
axios.interceptors.response.use(null, (error) => {
    
    const expectedError = error.response && error.response.status >= error.response.status < 500;

    if(!expectedError) {

        toast.error('No Network, Please Connect to Internet', {
            position: toast.POSITION.BOTTOM_LEFT
        });
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);

        alert("No Network, Please Connect to Internet");
    }

    return Promise.reject(error);
});

function setJWt(jwt){
    axios.defaults.headers['x_access_token'] = jwt;
}

export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJWt
}