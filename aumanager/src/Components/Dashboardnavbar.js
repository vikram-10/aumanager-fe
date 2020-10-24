import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './dashboardnavbar.css';
import {Link} from 'react-router-dom';

const Dashboardnavbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" id="page__nav">
        <NavbarBrand href="/">AUManager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <Link to='/' className="navbar-text nav__fontcolor">Logout</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Dashboardnavbar;