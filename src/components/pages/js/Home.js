import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Card, Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../css/home.css"; // Import the custom CSS file
import abc from "../js/ite.jpeg";
import ccna from "../js/ccna.PNG";
import codesprint from "../js/codesprint.jpg";

const Home = () => {
  return (
    <Container className="mt-5">
      {/* Name */}
      <div className="text-center mb-4">
        <h1>Pasindu Sandamal</h1>
      </div>

      {/* Social Media Icons */}
      <div className="text-center mb-4">
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x" className="mx-2" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
        </a>
      </div>
      <br />

      {/* Small Description */}
      <div className="text-center mb-4">
        <p style={{ textAlign: "justify" }}>
          As an undergraduate student at NSBM Green University, I’m nearing
          graduation, and my academic journey has equipped me with technical
          skills across various domains. Full-stack web application development
          and Virtual Reality (VR) have become a particular passion of mine.
          Further following areas has captivated my interest, alongside machine
          learning and mobile development application development, all of which
          I’ve explored through hand on projects. Participating inter university
          coding competitions have honed my ability to deliver project under
          pressure, while familiarizing me with collaborative platforms like
          GitHub. Further my final year research project, soon to be published,
          represents my academic achievements, and showcases my passion for
          developing new technologies.
        </p>
      </div>
      <br />
      <hr />

      {/* Blog */}
      <div className="mb-4" >
        <br />
        <h2 style={{ textAlign: "center" }}>Blog</h2>
        <br />
        <p>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none'}}
          >
            Sandamal's Blog
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none'}}
          >
            Sandamal's Ongoing Projects
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none'}}
          >
           Research & Publications
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none'}}
          >
            Sandamal's Competitions
          </a>
        </p>
      </div>
      <br />
      <hr />

      {/* Education */}
      <div className="mb-4">
        <br />
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <br />
        <div className="row">
          <div className="col-8">
            Bsc(Hons) Software Engineering <Badge bg="secondary">Ongoing</Badge>
          </div>
          <div className="col-4">2021-2024</div>
        </div>
        <p>University Of Plymouth</p>
        <div className="row">
          <div className="col-8">
            Information & Communication Technology NVQ L5{" "}
            <Badge bg="secondary">Successfully Followed</Badge>
          </div>
          <div className="col-4">2019-2020</div>
        </div>
        <p>DVTC Anuradhapura</p>
        <div className="row">
          <div className="col-8">
            Computer Hardware Technician NVQ L4{" "}
            <Badge bg="secondary">Successfully Completed</Badge>
          </div>
          <div className="col-4">2019-2020</div>
        </div>
        <p>VTA Thirappane</p>
      </div>
      <br />
      <hr />

      {/* Projects */}
      <div className="mb-4">
        <br />
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <br />
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>
                  Lung Cancer Detection System (Final Year Research Project)
                </Card.Title>
                <Card.Text>Brief description of Project 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>VR Based 3D Musuem Using WEB-XR</Card.Title>
                <Card.Text>Brief description of Project 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects as needed */}
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>
                  Automated Tool For Making MERN Stack Project Including CRUD
                  Operation Using Python
                </Card.Title>
                <Card.Text>Brief description of Project 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>Kids Story Genarator Using Python</Card.Title>
                <Card.Text>Brief description of Project 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects as needed */}
        </Row>
      </div>
      <br />
      <hr />

      {/* What I Do */}
      <div className="mb-4">
        <br />
        <h2 style={{ textAlign: "center" }}>What I Do</h2>
        <br />
        <p>
          Full Stack Web Application Development{" "}
          <Badge bg="primary">(MERN/Full Stack)</Badge>
        </p>
        <p>
          Machine Learning Based Project{" "}
          <Badge bg="primary">(Tensorflow/Keras/Google Colab/Python)</Badge>
        </p>
        <p>
          Virtual Reality Application Development{" "}
          <Badge bg="primary">(WEB-XR)</Badge>
        </p>
        <p>
          Desktop Application Development <Badge bg="primary">(C#/Java)</Badge>
        </p>
        <p>
          Mobile Application Development{" "}
          <Badge bg="primary">(Flutter/Android)</Badge>
        </p>
      </div>
      <br />
      <hr />

      {/* Achievements */}
      <div className="mb-4">
        <br />
        <h2>Achievements</h2>
        <br />
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Img variant="top" src={abc} className="custom-img"/> &nbsp;
                <Card.Title>CISCO IT Essential 6.0</Card.Title>
                <Card.Text>Details about Achievement 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
              <Card.Img variant="top" src={ccna} className="custom-img"/>&nbsp;
                <Card.Title>CCNA Routing & Switching</Card.Title>
                <Card.Text>Details about Achievement 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more achievements as needed */}
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>Duothen 4.0</Card.Title>
                <Card.Text>Details about Achievement 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>Duothen 3.0</Card.Title>
                <Card.Text>Details about Achievement 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more achievements as needed */}
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Img variant="top" src={codesprint} className="custom-img"/>
              <Card.Body>
                <Card.Title>Code Sprint 7</Card.Title>
                <Card.Text>Details about Achievement 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
      
          {/* Add more achievements as needed */}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
