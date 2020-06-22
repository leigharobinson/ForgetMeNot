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

  const setUser = (userId) => {
    sessionStorage.setItem("credentials", userId);
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default ForgetMeNot;
