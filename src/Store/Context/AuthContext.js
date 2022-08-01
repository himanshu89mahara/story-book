import { createContext } from "react";

const auth = {
    isLoggedIn: false,
    login: async (_token,user) => {},
    loggout: () => {},
    token: "",
    user: null,
  };

const AuthContext = createContext(auth);
export default AuthContext;