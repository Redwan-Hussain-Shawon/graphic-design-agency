"use client";
import React, { createContext, useState } from "react";
export const LoginContext = createContext(null);
function LoginProvider({ children }) {
  const [loginActive, setLoginActive] = useState(false);
  return (
    <LoginContext.Provider value={{ loginActive, setLoginActive }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
