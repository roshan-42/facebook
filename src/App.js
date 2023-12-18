import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Dashboard />
    </div>
  );
}

export default App;
