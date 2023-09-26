import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="px-5">
      <Navbar.Brand href="/">M's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav justify-content-end">
        <Nav>
          <Nav.Link as={NavLink} to="/aboutme">About me</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact info</Nav.Link>
          <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/matthew-hoepfl/">
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link href="https://github.com/Zarlios">
            <i className="fab fa-github"></i>
          </Nav.Link>
          <NavDropdown title="Applications" id="basic-nav-dropdown">
            <NavDropdown.Item as={Nav.Link} href="/page1">
              Restaurant
            </NavDropdown.Item>
            <NavDropdown.Item as={Nav.Link} href="/page2">
              Weather Forecast
            </NavDropdown.Item>
            <NavDropdown.Item as={Nav.Link} href="/page3">
              Nasa APOD
            </NavDropdown.Item>
            <NavDropdown.Item as={Nav.Link} href="/page4">
              Todo-list
            </NavDropdown.Item>
            <NavDropdown.Item as={Nav.Link} href="/page5">
              Tic-Tac-Toe
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
