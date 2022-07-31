import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(false);
  const [user,setUser] = useState(null);
  const isLoggedIn = !!token;
  const loginHandler = (token, user) => {};
  const logoutHandler = () => {};
  return (
    <AuthContext.Provider value={{ 
        isLoggedIn, 
        login: loginHandler,
        loggout:logoutHandler,
        user,
        token
         }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
