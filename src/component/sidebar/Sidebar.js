import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";
import "../sidebar/sidebar.css";
const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <h1>Dashboard</h1>
        <NavItem>
          <NavLink tag={Link} to={"/fitpeo1"} style={{marginRight:'68px'}}>
            <FontAwesomeIcon icon={faBriefcase} />
           <span > Dashboard</span>
          </NavLink>
        </NavItem>
        <SubMenu title="Product" icon={faHome} items={submenus[0]} />
      
        <SubMenu title="Customers" icon={faCopy} items={submenus[1]} />
        <SubMenu title="Income" icon={faImage} items={submenus[1]} />
        <SubMenu title="Promate" icon={faQuestion} items={submenus[1]} />
        <SubMenu title="Help" icon={faPaperPlane} items={submenus[1]} />
      </Nav>   
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Mobile",
      target: "Laptop",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
