import { useState } from "react";
import Cookies from "js-cookie";

export default function useToken() {
  function getToken() {
    //const tokenString = sessionStorage.getItem("token");
    const tokenString = Cookies.get("token");
    // const userToken = JSON.parse(tokenString);
    // return userToken?.token;
    //return tokenString;

    if (typeof tokenString !== "undefined" && tokenString) {
      return tokenString;
    } else {
      return null;
    }
  }

  let tokenString = getToken();

  const [token, setToken] = useState(tokenString);

  // useEffect(() => {
  //   setToken(getToken());
  // }, [token]);
  // if (tokenStatus === null && counter.current === 0) {
  //   counter.current++;
  //   setToken(null);
  // }

  const saveToken = (userToken) => {
    
    Cookies.set("token", userToken.token, { secure: true, sameSite: "strict" });

    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
