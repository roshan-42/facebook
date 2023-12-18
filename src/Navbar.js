import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedin");
    navigate("/");
    window.location.reload(true);
  }

  function login() {
    // Access local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchingUser = users.find(
      (user) => user.Fname === username && user.Password === password
    );

    if (matchingUser) {
      alert("Login successful");
      localStorage.setItem("loggedin", "true"); // Set the value to "true"
      navigate("/dashboard");
      window.location.reload(true);
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
          {(() => {
            if (localStorage.getItem("loggedin") === "true") {
              return <button onClick={logout}>Logout</button>;
            } else {
              return (
                <div>
                  {" "}
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
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
