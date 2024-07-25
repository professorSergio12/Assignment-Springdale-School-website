import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/academics.css';
import primary from '../img/academic-images/primary.jpg';
import secondary from '../img/academic-images/secondary.avif';
import senior from '../img/academic-images/senior.avif';

const Academics = () => {
    return (
        <Container className="academics-section">
            <h2 className="text-center mb-4">Academics</h2>
            <Row className='main'>
                <Col xs={12} sm={6} md={4}>
                    <Card className="academics-card">
                        <Card.Img variant="top" src={primary} className="academics-card-img" loading="lazy"/>
                        <Card.Body className="academics-card-body">
                            <Card.Title>Primary</Card.Title>
                            <Card.Text>Information about the primary curriculum including subjects and teaching methodologies.</Card.Text>
                            <Button as={Link} to="/primary" variant="primary" className='btn'>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="academics-card">
                        <Card.Img variant="top" src={secondary} className="academics-card-img" loading="lazy"/>
                        <Card.Body className="academics-card-body">
                            <Card.Title>Secondary</Card.Title>
                            <Card.Text>Details on the secondary curriculum, subjects, and teaching approaches.</Card.Text>
                            <Button as={Link} to="/secondary" variant="primary" className='btn'>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="academics-card">
                        <Card.Img variant="top" src={senior} className="academics-card-img" loading="lazy"/>
                        <Card.Body className="academics-card-body">
                            <Card.Title>Senior Secondary</Card.Title>
                            <Card.Text>Overview of the senior secondary curriculum, subjects, and educational resources.</Card.Text>
                            <Button as={Link} to="/senior-secondary" variant="primary" className='btn'>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Academics;
