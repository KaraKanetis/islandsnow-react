'use client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsHouse, BsSearch, BsPerson, BsCart } from 'react-icons/bs';

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Nav.Link href="#"><BsFacebook className="text-dark" /></Nav.Link>
          <Nav.Link href="#"><BsTwitter className="text-dark" /></Nav.Link>
          <Nav.Link href="#"><BsPinterest className="text-dark" /></Nav.Link>
          <Nav.Link href="#"><BsInstagram className="text-dark" /></Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#"><BsHouse className="text-dark" /></Nav.Link>
          <Nav.Link href="#"><BsSearch className="text-dark" /></Nav.Link>
          <Nav.Link href="#"><BsPerson className="text-dark" /></Nav.Link>
          <NavDropdown
            title={<><BsCart className="text-dark" /> 0</>}
            id="navbarDropdown"
          >
            <NavDropdown.ItemText>Your cart is empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
