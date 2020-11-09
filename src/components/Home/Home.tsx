import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../AuthenticationButton/LoginButton";
import LogoutButton from "../AuthenticationButton/LogoutButton";

function Home() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    console.log(user);
  }

  return isLoading ? (
    <div>Loading....</div>
  ) : (
    <section>
      <h1>Home Page</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </section>
  );
}

export default Home;
