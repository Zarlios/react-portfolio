import { Row, Col } from "react-bootstrap";

function AboutPage() {
  // test
  return (
    <div className="p-5 banner">
      <Row>
        <Col xxl={6}>
          <h1>About Me</h1>
          <p>
            Hello! I'm Matthew Hoepfl, a passionate and dedicated Full Stack
            Developer with a love for creating digital experiences.
          </p>
          <p>
            With a background in Computer Science and over 10 years of hands-on
            coding experience, I've honed my skills in JavaScript, React,
            Node.js, and much more. I thrive on finding elegant solutions to
            complex problems, and I'm committed to delivering clean and
            maintainable code.
          </p>
          <p>
            My approach to work is all about putting users first, creating
            designs that not only look good but also provide a seamless and
            delightful experience. I'm on a constant journey to stay ahead in
            this ever-evolving tech landscape, always learning and adapting to
            the latest and greatest industry trends.
          </p>
          <p>
            I'm a firm believer in technology's potential to drive positive
            change in the world. The thrill of solving real-world problems and
            making things better drives me every day.
          </p>
          <p>
            When I'm not coding, you can find me expanding my computer
            knowledge, experimenting in the kitchen, or diving into a good book.
            I'm always up for a new challenge and eager to learn something new.
          </p>
          <p>
            Feel free to reach out if you'd like to connect, collaborate, or
            just chat about all things tech!
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutPage;
