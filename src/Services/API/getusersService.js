import http from "../../Helpers/AuthHelpers/http-common";

export async function getusers(obj) {

	
	const data = await http.post('users/GetUserRoles',obj);
   
	return data;
}
export async function edituser(obj) {

	
	const data = await http.post('users/UpdatePassword',obj);
   
	return data;
}
export async function deleteuser(obj) {

	
	const data = await http.post('users/DeleteUser',obj);
   
	return data;
}
export default {
	getusers,
	edituser,
	deleteuser
}