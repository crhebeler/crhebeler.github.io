import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
// ReactStrap Imports 
import {
  Container,
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
Dropdown } from 'reactstrap';






const NavStyleInline = {  height:'90px'

}; 





export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
<section> 


 <div className="hideonmobile"> 
        <Nav right>
        <NavbarBrand href="/" className="mr-auto"><h1>Christopher Hebeler</h1></NavbarBrand>
          <NavItem>
          <NavLink color="#black;" to='/Home'>  <Link to='/'><h4>Home</h4></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='/Portfolio'>  <Link to='/Portfolio'><h4>Portfolio</h4></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='Contact'>  <Link to='/Contact'><h4>Contact</h4></Link></NavLink>
          </NavItem>
     
        </Nav>
</div> 
        <Navbar color="faded" light>
         
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <h2 className="welcome"> Welcome </h2>
          <Collapse isOpen={!this.state.collapsed} navbar>
         
            <Nav navbar>
              <NavItem>
              <NavLink color="#black;" to='/Home'>  <Link to='/'><h4>Home</h4></Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink to='/Portfolio'>  <Link to='/Portfolio'><h4>Portfolio</h4></Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink to='Contact'>  <Link to='/Contact'><h4>Contact</h4></Link></NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
          
         
        </Navbar>
      
      </section> 
    );
  }
}
