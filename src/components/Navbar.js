import React, { useState } from "react";

import Sidebar from "./Sidebar";
import SmallSidebar from "./SmallSidebar";
import Bottombar from './Bottombar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return isMobile ? (
    <Bottombar />
  ) : isSidebarOpen ? (
    <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
  ) : (
    <SmallSidebar setIsSidebarOpen={setIsSidebarOpen} />
  );
};

export default Navbar;
