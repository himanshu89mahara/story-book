import React, { useContext, useState } from "react";
import { Button } from "../../Components/atoms/Buttons/Button";
import AuthContext from "../../Store/Context/AuthContext";

const LoginPage = (props) => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("himanshu.mahara@publicissapient.com");
  const [otp, setOTP] = useState("1234");
  const [toggleOTPButton, setToggleOTPButton] = useState(false);
  const getOTPHandler = async () => {
    try {
      const response = await auth.loginStep1(email);
      if (response.status) {
        setToggleOTPButton(true);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const loginHandler = async () => {
    try {
      const response = await auth.loginStep2(email, otp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <Button primary label="GET OTP" onClick={getOTPHandler} />
      <br />
      {toggleOTPButton && (
        <Button primary label="Login" onClick={loginHandler} />
      )}
    </React.Fragment>
  );
};

export default LoginPage;
