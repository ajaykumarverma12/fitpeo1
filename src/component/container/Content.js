import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import "../container/content.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import Topbar from "./Topbar";
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    {/* <Topbar toggleSidebar={toggleSidebar} /> */}
    <Routes>
      <Route path="/fitpeo1" element={<Dashboard />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/Pages" element={<div>Pages</div>} />
      <Route path="/faq" element={<div>FAQ</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
      <Route path="/Home-1" element={<div>Home-1</div>} />
      <Route path="/Home-2" element={<div>Home-2</div>} />
      <Route path="/Home-3" element={<div>Home-3</div>} />
      <Route path="/Page-1" element={<div>Page-1</div>} />
      {/* <Route path="/Page-2" element={<div>Page-2</div>} />
      <Route path="/page-1" element={<div>page-1</div>} />
      <Route path="/page-2" element={<div>page-2</div>} />
      <Route path="/page-3" element={<div>page-3</div>} />
      <Route path="/page-4" element={<div>page-4</div>} /> */}
    </Routes>
  </Container>
);

export default Content;
