import { useState } from "react";
import { makeLogin } from "../../Services/Auth.Service";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null);
  const isLoggedIn = !!token;
  const loginStep1 = (email) => {};
  const loginStep2 = async(email, otp) => {
    try{
       await makeLogin({email,otp});
    }catch(err){
      console.log(err);
    }
    
  };
  const logoutHandler = () => {};
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
