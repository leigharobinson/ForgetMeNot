import React, { useState } from "react";
import { Button } from "reactstrap";
import UserManager from "../../modules/UserManager";

// const isAuthenticated = () =>
//   sessionStorage.getItem("credentials" || "user") !== null;

const NewUserForm = (props) => {
  const [credentials, setCredentials] = useState({
    // userId: props.setUser,
    username: "",
    password: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewUser = (evt) => {
    evt.preventDefault();
    if (!credentials.username || !credentials.password || !credentials.email) {
      window.alert("Please fill out new user form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      UserManager.post(credentials).then(
        sessionStorage.setItem("credentials", JSON.stringify(credentials))
      );
      props.history.push("/");
    }
  };

  return (
    <form onSubmit={handleFieldChange}>
      <fieldset>
        <h3>Create User Account</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="username"
            id="username"
            placeholder="username"
            required=""
            autoFocus=""
          />
          <label htmlFor="username">User Name</label>
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="email">Email address</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button type="submit" disabled={isLoading} onClick={constructNewUser}>
          Sign in
        </Button>
      </fieldset>
    </form>
  );
};

export default NewUserForm;
