import {
    AUTH_API_URL,
  VERIFY_EMAIL_API_URL,
  VERIFY_OTP_API_URL,
} from "../Constants/apiRequestUri";

export const getOTPService = async (body) => {
  try {
    const res = await fetch(VERIFY_EMAIL_API_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const loginService = async (body) => {
  try {
    const res = await fetch(VERIFY_OTP_API_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const authService = async (token) => {
    try {
      const res = await fetch(AUTH_API_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
      });
  
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };
