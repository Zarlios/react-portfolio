import { Row, Col } from "react-bootstrap";
import coding from "../assets/icons8-coding-64.png";

function HomePage() {
  // test
  return (
    <div className="p-5 banner">
      <Row>
        <Col xxl={6}>
          <img src={coding} alt="code" />
          <h1>Matthew Hoepfl</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Experienced developer with a passion for problem-solving. Dedicated
            to staying updated with the latest innovations in technology.
            Possesses a collaborative mindset and a strong commitment to
            continuous learning.
          </p>
          <ul>
            <li>Proficient in JavaScript, React, Node.js, and Express</li>
            <li>Skilled in database design with MongoDB, MySQL, and Gt.m</li>
            <li>Experienced in Agile development methodologies</li>
            <li>10 years of hands-on coding experience</li>
          </ul>
          <p>
            Committed to crafting clean, maintainable code and designing
            user-friendly experiences. Always eager to embrace fresh challenges
            and contribute to ongoing projects while staying in sync with the
            latest industry standards.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
