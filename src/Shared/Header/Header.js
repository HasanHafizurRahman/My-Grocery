import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () =>{
    signOut(auth);
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/"><FaCartArrowDown/>My Grocery</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#inventories">Inventories</Nav.Link>
      <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
      <NavDropdown title="Premium Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="signup">SignUp</Nav.Link>
      {
        user 
        ?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleLogout}>Log Out</button>
        :
        <Nav.Link as={Link} to="login">
        LogIn
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;