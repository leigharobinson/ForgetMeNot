import React, { useState } from "react";
import { Button } from "reactstrap";
import UserManager from "../../modules/UserManager";
import "./Login.css";

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
        //TODO ----  MAKE SURE IT IS USING PASSWORD TO AUTH
      } else if (credentials.password === existingUser[0].password) {
        // window.alert(`Welcome back ${existingUser[0].username}`);
        props.setUser(existingUser[0].id);
        props.history.push("/");
      } else {
        window.alert("Hmm... no match, please create a User Account");
      }
    });
  };

  return (
    <>
      <div id="login_background">
        <h3>Forget Me Not!</h3>
        <h5> Gift Cards, Coupons, & Loyalty Rewards </h5>
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
              <label htmlFor="username">UserName</label>

              <input
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                required=""
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <Button type="submit">Sign in</Button>

            <Button
              type="button"
              onClick={() => {
                props.history.push("/newUser");
              }}
            >
              Create New User
            </Button>
            <br />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;
