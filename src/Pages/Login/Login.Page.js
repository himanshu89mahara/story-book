import React, { useContext, useState } from "react";
import { Button } from "../../Components/atoms/Buttons/Button";
import AuthContext from "../../Store/Context/AuthContext";

const LoginPage = (props) => {
  const auth = useContext(AuthContext);
  const login = async(email) => {
    try{
        auth.loginStep2("himanshu.mahara@publicissapient.com", "123");
    }catch(err){
        console.log(err);

    }

    
  };

  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <Button
        primary
        label="Login"
        onClick={() => {
          login();
        }}
      />
    </React.Fragment>
  );
};

export default LoginPage;
