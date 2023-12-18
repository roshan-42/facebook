// Navbar.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    // Access local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchingUser = users.find(
      (user) => user.Fname === username && user.Password === password
    );

    if (matchingUser) {
      alert("Login successful");
    } else {
      alert("Invalid login");
    }
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>Facebook</h1>
        </div>
        <div className="col-md-6">
          <input
            type="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
