import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Body.css";
function Body() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function registeruser(event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var newuser = {
      Fname: fname,
      Lname: lname,
      Password: password,
      confirmPassword: cpassword,
    };
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("registration is successful");
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
          <p className="text">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="col-md-3 shadow p-3 mb-5 bg-white rounded">
          <h1>Registration</h1>
          <form onSubmit={registeruser}>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <input type="submit" className="btn btn-primary" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
