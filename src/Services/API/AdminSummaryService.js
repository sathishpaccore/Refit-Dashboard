import http from "../../Helpers/AuthHelpers/http-common";

class AdminSummaryDataService {
 async getClients(data) {
    //console.log(data);

    const der = await http.post("/clients/getclient", data);

    return der;
  }
  async reguser(obj) {
 
    const dety = await http.post("/clients/addclient", obj);
 
    return dety; 
  }
}

export default new AdminSummaryDataService();
