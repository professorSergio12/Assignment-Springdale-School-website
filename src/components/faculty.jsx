import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import facultyImg1 from '../img/faculty-images/faculty1.avif';
import facultyImg2 from '../img/faculty-images/faculty2.avif';
import facultyImg3 from '../img/faculty-images/faculty3.avif';
import facultyImg4 from '../img/faculty-images/faculty4.avif';
import facultyImg5 from '../img/faculty-images/faculty5.avif';
import facultyImg6 from '../img/faculty-images/faculty6.avif';
import '../css/faculty.css';

function Faculty() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center mb-4">
                <Col md={10} className="text-center">
                    <h1 className="faculty-title">Meet Our Faculty</h1>
                    <p className="faculty-description">Profiles of the teaching and administrative staff. Learn about their qualifications and experience.</p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg1} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Dr. John Doe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of Mathematics Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> PhD in Mathematics, M.Sc. in Applied Mathematics.<br />
                                <strong>Experience:</strong> 15 years of teaching experience, published author in mathematics journals.<br />
                                Dr. John Doe has been instrumental in shaping the Mathematics curriculum and advancing research in the field.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg2} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Ms. Jane Smith</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of English Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> MA in English Literature, BA in English.<br />
                                <strong>Experience:</strong> 12 years of teaching experience, expert in literary analysis and creative writing.<br />
                                Ms. Jane Smith is known for her engaging teaching style and contributions to literary education.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg3} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Dr. Emily Brown</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of Science Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> PhD in Biology, M.Sc. in Environmental Science.<br />
                                <strong>Experience:</strong> 10 years of teaching experience, research in environmental sustainability.<br />
                                Dr. Emily Brown is dedicated to fostering scientific curiosity and hands-on learning in the Science Department.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg4} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Mr. Michael Green</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of Sports Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> MA in Physical Education, B.Sc. in Sports Science.<br />
                                <strong>Experience:</strong> 8 years of coaching and sports management, champion in various athletic events.<br />
                                Mr. Michael Green is passionate about promoting physical fitness and sportsmanship among students.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg5} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Mr. David Lee</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of Social Studies Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> MA in Social Sciences, BA in History.<br />
                                <strong>Experience:</strong> 14 years of teaching experience, expert in world history and geography.<br />
                                Mr. David Lee excels in making history come alive for students through dynamic and interactive lessons.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="faculty-card">
                        <Card.Img variant="top" src={facultyImg6} className="faculty-card-img" loading="lazy"/>
                        <Card.Body className="faculty-card-body">
                            <Card.Title className="faculty-name">Ms. Sarah White</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Head of Hindi Department</Card.Subtitle>
                            <Card.Text className="faculty-text">
                                <strong>Qualifications:</strong> MA in Hindi Literature, BA in Hindi.<br />
                                <strong>Experience:</strong> 11 years of teaching experience, known for her work in Hindi literature and language.<br />
                                Ms. Sarah White is committed to promoting the Hindi language and literature through innovative teaching methods.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Faculty;
