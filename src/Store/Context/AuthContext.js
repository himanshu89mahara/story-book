import { createContext } from "react";

const auth = {
    isLoggedIn: false,
    loginStep1: async (email) => {},
    loginStep2: async (email,otp) => {},
    loggout: () => {},
    token: "",
    user: null,
  };

const AuthContext = createContext(auth);
export default AuthContext;