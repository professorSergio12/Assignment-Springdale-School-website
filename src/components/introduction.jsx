import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import schoolImg1 from '../img/school-images/school1.jpg'; // Update path as needed
import schoolImg2 from '../img/school-images/school2.jpg'; // Update path as needed
import '../css/introduction.css'; // Import custom CSS for styles

const Introduction = () => {
    return (
        <section className="introduction-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-col">
                        <h2>Welcome to Springdale Public School</h2>
                        <p>
                            Where we nurture young minds for a brighter future. Our school is dedicated to providing
                            a comprehensive education that fosters academic excellence, personal growth, and
                            social development. We believe in creating a supportive and engaging learning environment
                            that prepares students for success in a rapidly changing world.
                        </p>
                    </Col>
                    <Col md={6} className="image-col">
                        <div className="image-wrapper">
                            <img src={schoolImg1} alt="School Building 1" className="responsive-img" />
                            <img src={schoolImg2} alt="School Building 2" className="responsive-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Introduction;
