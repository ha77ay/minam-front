import Link from "next/link";
import Image from "next/image";

import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="w-100">
        <Navbar.Brand>
          <Link href="/">
            <a>
              <Image
                src="/brand-logo-b.svg"
                alt="미남로고"
                width="166"
                height="44"
              />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="d-flex">
            <Nav className="me-auto">
              <Nav.Item className="me-3">
                <Link href="/event">
                  <a className="text-dark">이벤트</a>
                </Link>
              </Nav.Item>
              <Nav.Item className="me-3">
                <Link href="/review">
                  <a className="text-dark">시술후기</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/minamtv">
                  <a className="text-dark d-flex justify-content-center">
                    <p className="me-1">미남TV</p>
                    <Image
                      src="/youtube_logo.svg"
                      alt="유튜브로고"
                      width="24"
                      height="16"
                      className="mb-2"
                    />
                  </a>
                </Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
