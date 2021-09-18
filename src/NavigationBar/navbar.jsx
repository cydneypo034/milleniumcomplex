import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBIcon, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import ForIAmLogo from '../images/foriamLogos.gif';

export default class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="#1a237e indigo darken-4" dark expand="md">
        <MDBNavbarBrand>
         <a href="#!"><img src={ForIAmLogo} alt="blue-logo-with-dove" style={{ width: "10rem", height: "10rem", 
         position: "relative", zIndex: "2" }}/></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>
            
            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text" style={{fontSize: "20px"}}>About</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text" style={{fontSize: "20px"}}>Vision & Mission</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text" style={{fontSize: "20px"}}>History</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2" className="white-text" style={{fontSize: "20px"}}>Ministries</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="https://fiaworld.com/">F.I.A. Corporation</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Gospel Music and Recording</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Church Membership</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Software</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text" style={{fontSize: "20px"}}>Contact</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text" style={{fontSize: "20px"}}>Donate</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
          
          <MDBNavbarNav right>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="facebook" size="3x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="twitter" size="3x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="instagram" size="3x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="youtube" size="3x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          </MDBNavbarNav>
          

        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
};