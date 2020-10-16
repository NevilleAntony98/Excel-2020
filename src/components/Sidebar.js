import React from "react";

import "./Sidebar.css";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-pic">Pic</div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>Hello</div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>Hi</div>
    </div>
  );
};

export default Sidebar;
