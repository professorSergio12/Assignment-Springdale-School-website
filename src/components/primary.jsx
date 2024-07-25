import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/primary.css';

// Importing images
import mathImg from '../img/academic-images/primary/math.avif';
import scienceImg from '../img/academic-images/primary/science.avif';
import languageArtsImg from '../img/academic-images/primary/english.avif';
import socialStudiesImg from '../img/academic-images/primary/social.avif';
import artsImg from '../img/academic-images/primary/art.avif';

const Primary = () => {
    const [flipped, setFlipped] = useState({});

    const handleCardClick = (id) => {
        setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Container className="academics-details my-5">
            <h2 className="text-center mb-4">Primary Education</h2>
            <p>The primary education curriculum includes the following subjects:</p>

            <Row className="mb-4">
                {[
                    { id: 1, img: mathImg, title: 'Mathematics', description: 'Basics of arithmetic, geometry, and introduction to algebra.', impact: 'Builds a strong foundation in problem-solving and analytical skills.' },
                    { id: 2, img: scienceImg, title: 'Science', description: 'Introduction to physical, biological, and earth sciences.', impact: 'Encourages curiosity and a love for exploration, fostering critical thinking.' },
                    { id: 3, img: languageArtsImg, title: 'Language Arts', description: 'Reading, writing, grammar, and vocabulary.', impact: 'Enhances communication skills and fosters a love for reading.' },
                    { id: 4, img: socialStudiesImg, title: 'Social Studies', description: 'Basics of history, geography, and civics.', impact: 'Develops an understanding of the world and promotes responsible citizenship.' },
                    { id: 5, img: artsImg, title: 'Arts', description: 'Drawing, painting, and basic music.', impact: 'Encourages creativity and self-expression, improving motor skills and visual learning.' }
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
                <li><strong>Interactive Learning:</strong> Engages students with hands-on activities, educational games, and multimedia tools. Keeps learning dynamic and fun.</li>
                <li><strong>Differentiated Instruction:</strong> Adapts teaching methods to cater to various learning styles and abilities, ensuring each student can succeed.</li>
                <li><strong>Project-Based Learning (PBL):</strong> Involves students in real-world projects that integrate multiple subjects, enhancing critical thinking and problem-solving skills.</li>
                <li><strong>Collaborative Learning:</strong> Fosters teamwork through group activities, encouraging peer-to-peer learning and diverse perspectives.</li>
                <li><strong>Inquiry-Based Learning:</strong> Promotes curiosity by allowing students to ask questions and explore topics of interest through self-directed research.</li>
                <li><strong>Scaffolded Instruction:</strong> Provides structured support that gradually fades as students gain independence, helping them master skills at their own pace.</li>
                <li><strong>Use of Multimedia Resources:</strong> Enhances lessons with videos, interactive simulations, and digital tools to illustrate complex concepts and accommodate different learning preferences.</li>
                <li><strong>Formative Assessment:</strong> Uses regular, informal assessments to monitor progress and provide timely feedback, addressing learning gaps promptly.</li>
                <li><strong>Reflective Practice:</strong> Encourages self-assessment and reflection on learning experiences to develop metacognitive skills and self-awareness.</li>
                <li><strong>Culturally Responsive Teaching:</strong> Incorporates diverse cultural perspectives and materials, ensuring inclusivity and relevance for students from various backgrounds.</li>
                <li><strong>Gamification:</strong> Integrates game-like elements into lessons to make learning engaging and motivating through rewards and challenges.</li>
            </ul>

            <h3>Educational Resources</h3>
            <p>Our educational resources are designed to support and enhance the learning experience:</p>
            <ul>
                <li><strong>Textbooks:</strong> Comprehensive guides covering curriculum subjects, providing structured content and exercises.</li>
                <li><strong>Workbooks:</strong> Hands-on practice materials that reinforce concepts learned in class through exercises and activities.</li>
                <li><strong>Online Learning Platforms:</strong> Interactive digital platforms offering tutorials, quizzes, and additional resources for extended learning.</li>
                <li><strong>Educational Videos:</strong> Multimedia content that visualizes complex concepts and provides engaging explanations.</li>
            </ul>
        </Container>
    );
};

export default Primary;
