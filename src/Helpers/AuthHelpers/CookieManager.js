import { useCookies } from "react-cookie";
import { SET_AUTHTOKEN } from "./CookieManagerTypes";

function CookieManager(type, data) {
  //console.log(type, data);
  const [cookie, setCookie] = useCookies(["user"]);
  //console.log(data);
  //   cookieSetter(type, data);

  //   const cookieSetter = (type, data) => {
  switch (type) {
    case SET_AUTHTOKEN:
      setCookie("token", data);
      break;

    default:
      break;
  }
  //   };
}

export default CookieManager;
