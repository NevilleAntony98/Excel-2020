import React, { useState } from "react";

import Sidebar from "./Sidebar";
import SmallSidebar from "./SmallSidebar";
import Bottombar from "./Bottombar";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return useWindowDimensions().width < 800 ? (
    <Bottombar />
  ) : (
    <>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      <SmallSidebar setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
