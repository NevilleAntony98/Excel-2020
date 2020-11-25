import React, { useState } from "react";

import Sidebar from "./Sidebar";
import SmallSidebar from "./SmallSidebar";
import Bottombar from "./Bottombar";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // In case anyone wonders what value to use here checkout the numbers in the mixins file
  return useWindowDimensions().width < 600 ? (
    <Bottombar />
  ) : (
    <>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      <SmallSidebar setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
