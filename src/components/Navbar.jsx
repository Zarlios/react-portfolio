import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" id="navbar">
          <h1>Matthew's Portfolio</h1>
          <ul className="navbar-nav justify-content-end ">
            <li>
              <NavLink to="/" className="nav-link d-inline" id="nav-link">
                Home
              </NavLink>
              <NavLink
                to="/aboutme"
                className="nav-link  d-inline"
                id="nav-link"
              >
                About me
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link  d-inline"
                id="nav-link"
              >
                Contact info
              </NavLink>
              <NavLink
                to="/resume"
                className="nav-link  d-inline"
                id="nav-link"
              >
                Resume
              </NavLink>
              <NavLink
                to="https://github.com/Zarlios"
                className="nav-link d-inline"
                id="nav-link"
              >
                Github
              </NavLink>
              <Dropdown className="d-inline">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Applications
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/page1">
                    Restaurant
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/page2">
                    Weather Forecast
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/page2">
                    Nasa APOD
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/page2">
                    Todo-list
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/page2">
                    Tic-Tac-Toe
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
