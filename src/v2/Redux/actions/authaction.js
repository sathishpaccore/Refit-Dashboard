import authService from "../../services/authService";
import store from '../index';
export var AUTH_ACTION = 'AUTH_ACTION'


async function auth_action(){

    try {
        const data = await authService.getCurrentUser();
        console.log(data,'ActionAuth');
        store.dispatch({ type: AUTH_ACTION, payload: data    })

    } catch (error) {
        
    }
}

export default auth_action;