import React, { useState, useEffect } from "react";
import Timer from "./Time";
import UserManager from "../../modules/UserManager";
// currentTime: (new Date).toLocaleTimeString()
// setInterval(xxx, 1000)

const Home = (props) => {
  return (
    <div>
      {new Date().toLocaleDateString()}
      <br />
      {new Date().toLocaleTimeString()}
      <br></br>
      <Timer />
      <div>InsertLogo</div>
      <h2>Welcome {props.userId} </h2>
      <br></br>
      {Math.random()}
      {console.log()}
      <div>
        <h4>Card Library</h4>
        <button>Search</button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
