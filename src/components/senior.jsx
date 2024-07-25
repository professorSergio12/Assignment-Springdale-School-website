import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/senior.css';

// Importing images
import calculusImg from '../img/academic-images/senior/calculus.avif';
import physicsImg from '../img/academic-images/senior/physics.avif';
import economicsImg from '../img/academic-images/senior/economics.avif';
import psychologyImg from '../img/academic-images/senior/psychology.avif';
import graphicDesignImg from '../img/academic-images/senior/graphic-design.avif';

const SeniorSecondary = () => {
    const [flipped, setFlipped] = useState({});

    const handleCardClick = (id) => {
        setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Container className="academics-details my-5">
            <h2 className="text-center mb-4">Senior Secondary Education</h2>
            <p>The senior secondary education curriculum includes the following subjects:</p>

            <Row className="mb-4">
                {[
                    { id: 1, img: calculusImg, title: 'Calculus', description: 'In-depth study of differential and integral calculus concepts.', impact: 'Develops advanced mathematical reasoning and problem-solving skills.' },
                    { id: 2, img: physicsImg, title: 'Physics', description: 'Advanced topics in mechanics, electromagnetism, and quantum physics.', impact: 'Fosters a strong understanding of the physical laws governing the universe.' },
                    { id: 3, img: economicsImg, title: 'Economics', description: 'Analysis of microeconomics and macroeconomics theories and applications.', impact: 'Enhances understanding of economic systems and their impact on global and local scales.' },
                    { id: 4, img: psychologyImg, title: 'Psychology', description: 'Study of human behavior, cognitive processes, and psychological theories.', impact: 'Promotes awareness of mental health and improves interpersonal skills.' },
                    { id: 5, img: graphicDesignImg, title: 'Graphic Design', description: 'Introduction to design principles, digital tools, and creative project development.', impact: 'Encourages creativity and proficiency in digital design and media.' }
                ].map(subject => (
                    <Col md={4} sm={6} xs={12} key={subject.id}>
                        <div className={`subject-card ${flipped[subject.id] ? 'flipped' : ''}`} onClick={() => handleCardClick(subject.id)}>
                            <div className="subject-card-inner">
                                <div className="subject-card-front">
                                    <img src={subject.img} alt={subject.title} className="subject-img" loading="lazy"/>
                                </div>
                                <div className="subject-card-back">
                                    <h3>{subject.title}</h3>
                                    <p>{subject.description}</p>
                                    <p><strong>Impact:</strong> {subject.impact}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            <h3>Teaching Methodologies</h3>
            <ul>
                <li><strong>Advanced Research Projects:</strong> Engages students in comprehensive research tasks that integrate multiple disciplines.</li>
                <li><strong>Socratic Seminars:</strong> Facilitates critical thinking through structured discussions and questioning techniques.</li>
                <li><strong>Data Analysis:</strong> Teaches students how to interpret and analyze data, making use of statistical and computational tools.</li>
                <li><strong>Practical Applications:</strong> Connects theoretical knowledge to real-world scenarios through simulations and case studies.</li>
                <li><strong>Career Counseling:</strong> Provides guidance on career paths and higher education opportunities tailored to students' interests and skills.</li>
                <li><strong>Collaborative Workshops:</strong> Organizes group activities to develop teamwork, communication, and problem-solving abilities.</li>
                <li><strong>Field Studies:</strong> Incorporates external visits and observations to enhance practical understanding of subjects.</li>
                <li><strong>Specialized Seminars:</strong> Offers targeted learning sessions on advanced topics by experts in various fields.</li>
                <li><strong>Capstone Projects:</strong> Involves students in substantial, integrative projects that demonstrate their cumulative learning and skills.</li>
                <li><strong>Self-Directed Learning:</strong> Encourages students to take initiative and responsibility for their own learning and exploration.</li>
            </ul>

            <h3>Educational Resources</h3>
            <p>Our senior secondary education resources are designed to support advanced study and skill enhancement:</p>
            <ul>
                <li><strong>Advanced Textbooks:</strong> Specialized textbooks providing in-depth coverage of senior secondary subjects.</li>
                <li><strong>Research Databases:</strong> Access to academic journals, research papers, and other scholarly resources.</li>
                <li><strong>Interactive Simulations:</strong> Digital tools and simulations that offer hands-on learning experiences in various subjects.</li>
                <li><strong>Professional Software:</strong> Access to industry-standard software for subjects like graphic design and data analysis.</li>
            </ul>
        </Container>
    );
};

export default SeniorSecondary;
