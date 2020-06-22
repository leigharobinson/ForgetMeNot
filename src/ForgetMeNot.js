import React, { useState } from "react";
import "./ForgetMeNot.css";
import NavBar from "./components/navBar/NavBar";
import ApplicationViews from "./components/ApplicationViews";
const ForgetMeNot = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} clearUser={setUser} />
    </>
  );
};

export default ForgetMeNot;
