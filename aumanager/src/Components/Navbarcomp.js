import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import routes from '../routes';
  import './navbarcomp.css';

const Navbarcomp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" id="page__nav">
        <Link to={routes.home} className="navbar-brand">AUmanager</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to={routes.signup} className="nav-link nav__fontcolor  nav__items">Sign Up</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.login} className="nav-link nav__fontcolor">Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomp;