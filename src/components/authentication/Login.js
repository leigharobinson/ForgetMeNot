import React, { useState } from "react";
// import { button } from "reactstrap";
import UserManager from "../../modules/UserManager";
import "./Login.css";
import { Icon } from "semantic-ui-react";

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
        <div className="headingOFApp">
          <picture>
            <img
              // className="headingOFApp"
              src={require("../Images/forgetMeNot.svg")}
              alt="Forget Me Not"
            />
          </picture>
        </div>
        <div className="pictureOfApp">
          <picture>
            <img
              src={require("../Images/shadedLogo.png")}
              alt="Forget Me Not"
            />
          </picture>
        </div>
        <form className="inputContainer" onSubmit={handleLogin}>
          <fieldset className="fieldset">
            {/* <h3>Please sign in</h3> */}
            <div className="formgrid">
              <input
                onChange={handleFieldChange}
                type="username"
                id="username"
                placeholder="username"
                required=""
                autoFocus=""
              />

              <label className="userIcon" htmlFor="username">
                <Icon name="user" size="large" />
              </label>

              <input
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="password"
                required=""
              />
              <label className="passwordIcon" htmlFor="inputPassword">
                <Icon name="lock" size="large" />
              </label>
            </div>
            <div className="buttonDiv">
              <button className="LoginBtn" type="submit">
                Login
              </button>
            </div>
            <div className="buttonDiv2">
              <button
                className="createNewUserBtn"
                type="button"
                onClick={() => {
                  props.history.push("/newUser");
                }}
              >
                Create New User
              </button>
            </div>
          </fieldset>
        </form>
        {/* <picture>
          <img
            className=""
            src={require("../Images/blinkingElephant.gif")}
            alt="elephant"
          />
        </picture> */}
      </div>
    </>
  );
};

export default Login;
