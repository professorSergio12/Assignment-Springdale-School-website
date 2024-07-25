import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import musicImg from '../img/student-images/musicImg.avif';
import danceImg from '../img/student-images/danceImg.avif';
import dramaImg from '../img/student-images/dramaImg.avif';
import artImg from '../img/student-images/artImg.avif';
import sportsImg from '../img/student-images/sportsImg.avif';
import roboticsImg from '../img/student-images/roboticsImg.avif';
import debateImg from '../img/student-images/debateImg.avif';
import scienceImg from '../img/student-images/scienceImg.avif';
import johnSmithImg from '../img/student-images/johnSmithImg.avif';
import sarahLeeImg from '../img/student-images/sarahLeeImg.avif';
import techInnovatorsImg from '../img/student-images/techInnovatorsImg.avif';
import amyParkerImg from '../img/student-images/amyParkerImg.jpeg';
import rajivMehtaImg from '../img/student-images/rajivMehtaImg.jpeg';
import lisaWongImg from '../img/student-images/lisaWongImg.avif';
import '../css/student.css';

const StudentLife = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h1 className="student-life-title">Student Life at Springdale</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Extracurricular Activities</h2>
          <Row>
            {[
              { title: 'Music', img: musicImg, description: 'Explore your musical talents and learn to play various instruments or sing in our vibrant music programs.' },
              { title: 'Dance', img: danceImg, description: 'Join our dance classes to learn different styles, from ballet to hip-hop, and showcase your skills in performances.' },
              { title: 'Drama', img: dramaImg, description: 'Engage in dramatic arts, build confidence, and perform in school plays and theatrical productions.' },
              { title: 'Art', img: artImg, description: 'Express your creativity through drawing, painting, and various art forms in our comprehensive art program.' },
              { title: 'Sports', img: sportsImg, description: 'Participate in a range of sports activities, from soccer to basketball, and compete in inter-school tournaments.' },
              { title: 'Robotics', img: roboticsImg, description: 'Dive into robotics, build and program robots, and participate in exciting robotics competitions.' },
              { title: 'Debate Club', img: debateImg, description: 'Sharpen your public speaking and argumentation skills by participating in debates and discussions on various topics.' },
              { title: 'Science Club', img: scienceImg, description: 'Explore scientific concepts through experiments, projects, and field trips in our engaging Science Club.' }
            ].map((activity, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="student-card">
                  <Card.Img variant="top" src={activity.img} className="student-card-img" />
                  <Card.Body>
                    <Card.Title className="student-card-title">{activity.title}</Card.Title>
                    <Card.Text>{activity.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Clubs and Societies</h2>
          <Row>
            {[
              { title: 'Literary Society', img: musicImg, description: 'Join the Literary Society to discuss books, write creatively, and participate in literary events.' },
              { title: 'Environmental Club', img: danceImg, description: 'Work on projects related to sustainability, conservation, and environmental awareness with the Environmental Club.' },
              { title: 'Astronomy Club', img: dramaImg, description: 'Discover the wonders of the universe, observe stars, and learn about celestial phenomena in the Astronomy Club.' },
              { title: 'Coding Club', img: artImg, description: 'Enhance your programming skills, work on coding projects, and compete in hackathons with the Coding Club.' }
            ].map((club, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="student-card">
                  <Card.Img variant="top" src={club.img} className="student-card-img" loading="lazy"/>
                  <Card.Body>
                    <Card.Title className="student-card-title">{club.title}</Card.Title>
                    <Card.Text>{club.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Achievements</h2>
          <Row>
            {[
              { title: 'John Smith', description: 'National Level Math Olympiad Winner', img: johnSmithImg },
              { title: 'Sarah Lee', description: 'Gold Medalist in State Swimming Championship', img: sarahLeeImg },
              { title: 'Tech Innovators Club', description: 'Winners of Inter-School Robotics Competition', img: techInnovatorsImg }
            ].map((achievement, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="student-card">
                  <Card.Img variant="top" src={achievement.img} className="student-card-img" loading="lazy"/>
                  <Card.Body>
                    <Card.Title className="student-card-title">{achievement.title}</Card.Title>
                    <Card.Text>{achievement.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Student Council</h2>
          <Row>
            {[
              { position: 'President', name: 'Amy Parker', grade: 'Grade 12', img: amyParkerImg },
              { position: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11', img: rajivMehtaImg },
              { position: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10', img: lisaWongImg }
            ].map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="student-card">
                  <Card.Img variant="top" src={member.img} className="student-card-img" loading="lazy"/>
                  <Card.Body>
                    <Card.Title className="student-card-title">{member.position}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.name}</Card.Subtitle>
                    <Card.Text>{member.grade}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentLife;
