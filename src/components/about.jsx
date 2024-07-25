import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import aboutimg1 from '../img/about-images/aboutimg1.jpg'
import aboutimg2 from '../img/about-images/aboutimg2.jpg'
import aboutimg3 from '../img/about-images/aboutimg3.jpg'
import aboutimg4 from '../img/about-images/aboutimg4.jpg'
import aboutimg5 from '../img/about-images/aboutimg5.avif'
import aboutimg6 from '../img/about-images/aboutimg6.jpg'
import '../css/about.css';

const About = () => {
  return (
    <>
      <Container className="about-container">
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">"At Springdale Public School, we are dedicated to nurturing young minds and shaping future leaders. Our rich history, unwavering values, and commitment to educational excellence drive us to create a learning environment where every student can thrive and reach their full potential. Embracing innovation and tradition, we inspire a love for learning that lasts a lifetime."</p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={5} className="mb-4">
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="card-title">Our History</Card.Title>
                <Card.Text className="card-text">
                  Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="card-title">Our Vision</Card.Title>
                <Card.Text className="card-text">
                  To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={5} className="mb-4">
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="card-title">Our Mission</Card.Title>
                <Card.Text className="card-text">
                  To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="card-title">Our Values</Card.Title>
                <Card.Text className="card-text">
                  We believe in integrity, respect, and responsibility as the foundation of our educational philosophy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={10} className="text-center">
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="card-title">Message from the Principal</Card.Title>
                <Card.Text className="card-text">
                  At Springdale Public School, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and staff are committed to providing a supportive and challenging learning environment where students can thrive academically, socially, and emotionally. We emphasize the importance of critical thinking, creativity, and ethical values, preparing our students to become responsible global citizens. Our state-of-the-art facilities and innovative teaching methodologies ensure that every student receives a well-rounded education that equips them with the skills and knowledge necessary to excel in their chosen paths. We are proud of our rich history and the achievements of our students, and we look forward to continuing our tradition of excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Separate container for infrastructure */}
      <Container className="infrastructure-container">
        <Row className="justify-content-center mb-4">
          <Col className="text-center">
            <h2 className="about-infrastructure-title">Infrastructure and Facilities</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg1} className="about-card-img"  loading="lazy"/>
              <Card.Body>
                <Card.Title className="card-title">Science and Computer Labs</Card.Title>
                <Card.Text className="card-text">
                  State-of-the-art science and computer labs to foster practical learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg2} className="about-card-img" loading="lazy"/>
              <Card.Body>
                <Card.Title className="card-title">Classrooms</Card.Title>
                <Card.Text className="card-text">
                  Spacious and well-equipped classrooms to provide a conducive learning environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg3} className="about-card-img"loading="lazy" />
              <Card.Body>
                <Card.Title className="card-title">Library</Card.Title>
                <Card.Text className="card-text">
                  Library with a vast collection of books and digital resources to support academic research.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg4} className="about-card-img" loading="lazy"/>
              <Card.Body>
                <Card.Title className="card-title">Sports Facilities</Card.Title>
                <Card.Text className="card-text">
                  Sports facilities including a playground, gymnasium, and swimming pool to encourage physical fitness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg5} className="about-card-img" loading="lazy"/>
              <Card.Body>
                <Card.Title className="card-title">Auditorium</Card.Title>
                <Card.Text className="card-text">
                  An auditorium for hosting cultural events, seminars, and presentations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="about-card">
              <Card.Img variant="top" src={aboutimg6} className="about-card-img" loading="lazy"/>
              <Card.Body>
                <Card.Title className="card-title">Cafeteria</Card.Title>
                <Card.Text className="card-text">
                  A well-maintained cafeteria providing nutritious meals and snacks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
