import React, { useState } from "react";

import Sidebar from "./Sidebar";

import "./Navbar.css";

const Topbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="navbar-container">
      <div onClick={() => setIsSidebarOpen(true)}>=</div>
      <div className="navbar-endContainer">
        <div>P1</div>
        <div>P2</div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Topbar setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
};

export default Navbar;
