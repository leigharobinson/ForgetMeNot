import React, { useState } from "react";
import UserManager from "../../modules/UserManager";
const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",

    password: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    UserManager.searchUser(credentials.username).then((existingUser) => {
      if (!credentials.password || !credentials.username) {
        window.alert("Please fill out user name and password");
      } else if (existingUser.length > 0) {
        window.alert("Welcome back ");
        sessionStorage.setItem("credentials", JSON.stringify(credentials));
        props.history.push("/");
      } else {
        window.alert("Hmm... no match, please create a User Account");
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
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
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/newUser");
          }}
        >
          Create New User
        </button>
        <br />
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
