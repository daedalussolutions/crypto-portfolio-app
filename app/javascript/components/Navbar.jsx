import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CryptoPortfolio.exe</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;