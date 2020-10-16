import React from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import "./SmallSidebar.css";

const SmallSidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="smallSidebar-container">
      <div onClick={() => setIsSidebarOpen(true)}>=</div>

      <div className="smallSidebar-startContainer">
        <div>I1</div>
        <div>I2</div>
      </div>

      <div className="smallSidebar-endContainer">
        <div>S1</div>
        <div>S2</div>
      </div>
    </div>
  );
};

export default SmallSidebar;
