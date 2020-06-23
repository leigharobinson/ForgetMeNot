import React, { useState, useEffect } from "react";

import UserManager from "../../modules/UserManager";

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
  });

  return (
    <div className="card">
      <h2>Profile Manager</h2>
      <div className="card-content">
        {/* <div className="container-cards">
          {credentials.map((user) => (
            <Home key={credentials.id} user={user} {...props} />
          ))}
          {console.log(credentials.username)}
        </div> */}
      </div>
    </div>
  );
};

export default UserProfileList;
