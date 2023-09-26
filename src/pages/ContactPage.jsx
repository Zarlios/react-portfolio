import { Row, Col } from "react-bootstrap";

function ContactPage() {
  return (
    <div class="p-5 banner">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Have questions or want to collaborate? Feel free to reach out. I'm
          here to help!
        </p>
      </div>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Contact Information</h2>
          <p className="my-0">
            <strong>Email:</strong> mdh0588@gmail.com
          </p>
          <p className="my-0">
            <strong>Phone:</strong> (215) 490 2014
          </p>
          <p className="my-0">
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/matthew-hoepfl/">
              <i className="fab fa-linkedin"></i>
            </a>
          </p>
          <p className="my-0">
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Zarlios">
              <i className="fab fa-github"></i>
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ContactPage;
