import React, { forwardRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/footer.css';

const Footer = forwardRef((props, ref) => {
    return (
        <footer className="footer" ref={ref}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Email:</strong> info@springdale.edu</p>
                    </Col>
                    <Col md={4}>
                        <h5>Get in Touch</h5>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <h5>Find Us</h5>
                        <div className="map-container">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.095047957497!2d-122.41941808468159!3d37.77492927975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b3f140c41%3A0x1bba72cbb073f6d4!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1650873096763!5m2!1sen!2sus"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
});

export default Footer;
