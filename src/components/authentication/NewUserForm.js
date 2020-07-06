import React, { useState } from "react";
import { Button } from "reactstrap";
import UserManager from "../../modules/UserManager";
import { Icon } from "semantic-ui-react";
import "./NewUser.css";
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
    <div id="background_NewUser">
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
          <img src={require("../Images/shadedLogo.png")} alt="Forget Me Not" />
        </picture>
      </div>
      <div className="TopContainer_NU">
        <h2 className="colorLetters ">Create User Account</h2>
      </div>
      <form onSubmit={handleFieldChange}>
        <fieldset className="NU_fieldset NU_style">
          <div className="formgrid">
            <input
              onChange={handleFieldChange}
              type="username"
              id="username"
              placeholder="username"
              required=""
              autoFocus=""
            />
            <label htmlFor="username">
              <Icon name="user" size="large" />
            </label>
            <input
              onChange={handleFieldChange}
              type="email"
              id="email"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
            <label htmlFor="email">
              <Icon name="mail" size="large" />
            </label>

            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
            <label htmlFor="password">
              <Icon name="lock" size="large" />
            </label>
          </div>
          <div id="btnHolder">
            <Button
              id="GiftCardButton"
              type="submit"
              disabled={isLoading}
              onClick={constructNewUser}
            >
              Sign in
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewUserForm;
