import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    loginWithRedirect().then();
  }, [isAuthenticated, loginWithRedirect]);

  return <div />;
}

export default Login;
