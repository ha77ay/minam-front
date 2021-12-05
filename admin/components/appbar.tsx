import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Navbar, Container, Nav } from "react-bootstrap";
// import Profile from "./profile";

const AppBar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#ffffff",
        width: "85vw",
        height: "8vh",
        boxShadow: "1px 2px 1px #d0d0d5",
      }}
      expand="lg"
    >
      <Container className="w-100">
        <Navbar.Brand className="ms-3">
          <i className="bi bi-search me-4" />
          <i className="bi bi-bell me-3" />
          <i className="bi bi-envelope" />
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <Nav className="me-auto">
            <Nav.Item>
              <Link href="/photos">
                <a className="text-dark">🌱이승민</a>
              </Link>
            </Nav.Item>
            {/* <Profile /> */}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppBar;
