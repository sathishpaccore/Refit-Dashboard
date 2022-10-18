import { combineReducers } from "redux";
import auth_authReducer from "./authReducer";


export default function allReducers(){

    return combineReducers({
        auth: auth_authReducer
    });
}