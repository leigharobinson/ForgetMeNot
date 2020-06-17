import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

// const isAuthenticated = () =>
//   sessionStorage.getItem("credentials" || "user") !== null;

const NewUserForm = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewUser = (evt) => {
    evt.preventDefault();
    if (!user.username || !user.password) {
      window.alert("Please fill out new user form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      UserManager.post(user).then(
        sessionStorage.setItem("user", JSON.stringify(user))
      );
      props.history.push("/");
      // UserManager.post(user).then(() => props.history.push("/"));
    }
  };

  return (
    <form onSubmit={handleFieldChange}>
      <fieldset>
        <h3>Create User Account</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="username"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="username">Email address</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" disabled={isLoading} onClick={constructNewUser}>
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default NewUserForm;
