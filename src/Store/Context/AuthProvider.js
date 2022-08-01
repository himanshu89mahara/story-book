import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../Helpers/Cookie";
import {
  loginService,
  getOTPService,
  authService,
} from "../../Services/Auth.Service";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  console.log(getCookie("token"));
  const [token, setToken] = useState(getCookie("token"));
  const [user, setUser] = useState(null);
  const isLoggedIn = !!token && !!user;
  const loginStep1 = async (email) => {
    try {
      const response = await getOTPService({ email });
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };
  const loginStep2 = async (email, otp) => {
    try {
      const response = await loginService({ email, otp });
      if (response.status) {
        setToken(response.data.token);
        setUser(response.data.user);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    setCookie("token", token, 2);
    console.log("useEffect");
    const auth = (token) => {
      authService(token)
        .then((auth) => {
          setUser(auth.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (token) {
      auth(token);
    }
  }, [token]);

  const logoutHandler = () => {
    setToken("");
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loginStep1: loginStep1,
        loginStep2: loginStep2,
        loggout: logoutHandler,
        user,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
