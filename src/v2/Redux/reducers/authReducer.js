import { AUTH_ACTION } from "../actions/authaction";


const auth_authReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case AUTH_ACTION:
            
            return payload;
    
        default:
            return state;
    }
};

export default auth_authReducer;