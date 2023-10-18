import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SideBar from "./component/sidebar/Sidebar";
import Content from "./component/container/Content";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
console.log("ddd");
  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        {/* <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} /> */}

        {/* <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} /> */}
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
   </div>
    </Router>
  );
};

export default App;
