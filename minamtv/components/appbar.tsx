import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="w-100">
        <Navbar.Brand className="ms-3">
          <Link href="/">
            <a className="text-light">MYWORKSPACE</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
