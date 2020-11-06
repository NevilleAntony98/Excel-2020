import React, { useEffect, useRef } from "react";

import "./Sidebar.css";

const Sidebar = ({ setIsSidebarOpen }) => {
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="sidebar-container" ref={wrapperRef}>
      <div className="sidebar-pic">Pic</div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Home
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Schedule
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Competitions
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Events
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Contacts
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Facebook
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Twitter
      </div>
      <div className="sidebar-row" onClick={() => setIsSidebarOpen(false)}>
        Github
      </div>
    </div>
  );
};

export default Sidebar;
