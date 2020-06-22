import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserManager from "../../modules/UserManager";
import Home from "../home/Home";

const UserProfileList = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const getUserProfile = () => {
    return UserManager.searchUser(credentials.username).then((existingUser) => {
      setCredentials(existingUser);
    });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="card">
      <h2>Gift Card</h2>
      <div className="card-content">
        <div className="container-cards">
          {users.map((user) => (
            <Home key={credentials.id} user={user} {...props} />
          ))}
          {console.log(credentials.username)}
        </div>
      </div>
    </div>
  );
};

export default UserProfileList;
