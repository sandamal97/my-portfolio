import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import abc from "../js/abc.jpg";

function Education() {
  return (
    <Container >
      <Row className="mb-3">
        <Col>
          <h5>Education</h5>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card style={{borderRadius:0}}>
            <Card.Img variant="top" src={abc} alt="University Image" />
            <Card.Body>
              <Card.Text>
                <h2>University Life at [Your University Name]</h2>
                <br />
                <p>
                  Attending [Your University Name] has been a transformative
                  experience, blending rigorous academics with vibrant social
                  and cultural activities. The university's campus, a harmonious
                  mix of historic architecture and state-of-the-art facilities,
                  provides an inspiring environment for learning and personal
                  growth.
                </p>
                <p>
                  From the moment I stepped onto the campus, I was immersed in a
                  community of passionate and driven individuals. The diversity
                  of the student body, hailing from various parts of the world,
                  enriched my educational experience, offering a plethora of
                  perspectives and ideas.
                </p>
                <p>
                  Academically, [Your University Name] is unparalleled. The
                  faculty members are not only leaders in their respective
                  fields but also dedicated mentors who are always approachable
                  and willing to guide students. The extensive library resources
                  and cutting-edge laboratories have been invaluable in pursuing
                  my research interests and projects.
                </p>
                <p>
                  Beyond the classroom, university life is bustling with
                  activities. Whether it's joining one of the many student
                  organizations, participating in cultural festivals, or
                  attending guest lectures and workshops, there is always
                  something happening on campus. The university's commitment to
                  holistic development is evident in the wide range of
                  extracurricular opportunities available.
                </p>
                <p>
                  Sports and recreation also play a significant role in campus
                  life. The well-equipped sports complex and various sports
                  teams provide ample opportunities for physical fitness and
                  team-building experiences. Participating in inter-university
                  competitions and university games has been both thrilling and
                  rewarding.
                </p>
                <p>
                  Living on campus has fostered a strong sense of community. The
                  residence halls are more than just a place to stay; they are
                  vibrant hubs where lifelong friendships are formed. The
                  numerous dining options, recreational facilities, and common
                  areas ensure that there's always a place to relax and unwind
                  after a day of classes and activities.
                </p>
                <p>
                  Overall, my time at [Your University Name] has been a period
                  of intense learning, personal growth, and unforgettable
                  memories. The skills and experiences I've gained here have
                  prepared me well for future endeavors, and I will always
                  cherish the time spent at this remarkable institution.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h6>Content of Degree</h6>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Content of Degree</th>
                <th>Content of Degree</th>
                <th>Content of Degree</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>A</td>
                <td>A</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h6>Results</h6>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Module</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semester 1</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Semester 2</td>
                <td>A+</td>
              </tr>
              {/* Add more rows for other semesters */}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h6>Inter University Competitions</h6>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="/path/to/university-games-image.jpg" alt="University Games Image" />
            <Card.Body>
              <Card.Text>
                Information about university games and competitions...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
