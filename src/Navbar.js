import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <input type="Username" placeholder="Username" />
          <input type="Password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
