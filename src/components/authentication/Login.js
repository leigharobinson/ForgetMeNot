import React, { useState } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      window.alert("Please fill out email and password");
    } else {
      /*
            For now, just store the email and password that
            the customer enters into session storage.
            ...Let's just trust the user... That's a good idea, right????
        */
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email address</label>

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
