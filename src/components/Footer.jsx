import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-fluid" id="footer">
        <div className="text-lg-start">
          <div className="row">
            <div className="col" id="container">
              <h1>Designing and Developing full stack applications</h1>
              <p>Developed and designed by Matthew Hoepfl</p>
            </div>
            <div className="col" id="container">
              <div className="row justify-content-center">
                <div className="col-md-auto" id="social-box">
                  <div id="img">
                    <NavLink to="https://github.com/Zarlios">
                      <i className="fa-brands fa-github"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-auto" id="social-box">
                  <div id="img">
                    <NavLink to="https://www.facebook.com/mdh0588/">
                      <i className="fa-brands fa-facebook"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-auto" id="social-box">
                  <div id="img">
                    <NavLink to="https://www.instgram.com/mdh0588/">
                      <i className="fa-brands fa-instagram"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-auto" id="social-box">
                  <div id="img">
                    <NavLink to="https://www.linkedin.com/in/matthew-hoepfl/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" id="container">
              <div className="text-lg-end">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="aboutme">
                      About me
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact">
                      Contact info
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="resume">
                      Resume
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="https://github.com/Zarlios">
                      Git Hub
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
