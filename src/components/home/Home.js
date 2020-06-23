import React, { useState, useEffect } from "react";
import Timer from "./Time";
import UserManager from "../../modules/UserManager";
// currentTime: (new Date).toLocaleTimeString()
// setInterval(xxx, 1000)

const Home = (props) => {
  const [user, setUser] = useState([]);

  const getUsername = () => {
    return UserManager.getAll().then((usernameFromAPI) => {
      console.log(usernameFromAPI);
      console.log(props.userId);
      usernameFromAPI.forEach(function (element) {
        if (props.userId === element.id) {
          console.log(element.username);
          setUser(element.username);
        }
      });
    });
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div>
      {/* {new Date().toLocaleDateString()} */}
      {/* <br /> */}
      {/* {new Date().toLocaleTimeString()} */}
      {/* <br></br> */}
      <Timer />
      <div>InsertLogo</div>
      <h2>Welcome {user}!</h2>
      <br></br>
      {/* {Math.random()} */}

      <div>
        <h4>Card Library</h4>
        <button>Search</button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
