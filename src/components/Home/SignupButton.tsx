import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function SignupButton() {
  const { loginWithRedirect } = useAuth0();
  const redirectLoginOptions = { screen_hint: "signup" };

  return (
    <div>
      <button onClick={() => loginWithRedirect(redirectLoginOptions)}>
        Sign up
      </button>
    </div>
  );
}

export default SignupButton;
