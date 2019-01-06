import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component{
  
    render(){
        return(
            <Nav>
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href="/about-us">About</NavItem>
                {/* <NavItem eventKey={3} href="/contact">Contact</NavItem> */}
            </Nav>
        );
    }

}

export default Header;