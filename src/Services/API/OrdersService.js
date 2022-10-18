import { useDispatch } from "react-redux";
import http from "../../Helpers/AuthHelpers/http-common";

// class OrdersDataService {
export const getOrderDetails =async (data) => {

 const deta = await http.post("/orders/OrderDetails", data)
 return deta;
  // console.log(data);
  // return .catch((err) => {
  //   console.log("Err: ", err);
  // });
};

// }

// export default new OrdersDataService();
