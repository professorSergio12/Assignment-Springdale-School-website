import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/secondary.css';

// Importing images
import algebraImg from '../img/academic-images/secondary/algebra.avif';
import chemistryImg from '../img/academic-images/secondary/chemistry.avif';
import literatureImg from '../img/academic-images/secondary/literature.avif';
import historyImg from '../img/academic-images/secondary/history.avif';
import musicImg from '../img/academic-images/secondary/music.avif';

const Secondary = () => {
    const [flipped, setFlipped] = useState({});

    const handleCardClick = (id) => {
        setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Container className="academics-details my-5">
            <h2 className="text-center mb-4">Secondary Education</h2>
            <p>The secondary education curriculum includes the following subjects:</p>

            <Row className="mb-4">
                {[
                    { id: 1, img: algebraImg, title: 'Algebra', description: 'Advanced concepts in algebra including equations, inequalities, and functions.', impact: 'Enhances mathematical reasoning and problem-solving skills.' },
                    { id: 2, img: chemistryImg, title: 'Chemistry', description: 'Study of matter, its properties, and chemical reactions.', impact: 'Fosters scientific inquiry and a deeper understanding of the physical world.' },
                    { id: 3, img: literatureImg, title: 'Literature', description: 'Analysis of classical and modern literary works, including novels, poems, and plays.', impact: 'Develops critical thinking and appreciation of diverse literary forms.' },
                    { id: 4, img: historyImg, title: 'History', description: 'Exploration of historical events, civilizations, and cultural developments.', impact: 'Cultivates understanding of historical context and its impact on the present.' },
                    { id: 5, img: musicImg, title: 'Music', description: 'Theory and practice of music including rhythm, melody, and composition.', impact: 'Encourages creativity and enhances auditory skills and emotional expression.' }
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
                <li><strong>Advanced Inquiry-Based Learning:</strong> Encourages deeper exploration of complex topics and promotes independent research skills.</li>
                <li><strong>Case Study Analysis:</strong> Engages students in real-world problem-solving through detailed examination of case studies.</li>
                <li><strong>Critical Thinking Exercises:</strong> Develops analytical skills through discussions, debates, and problem-solving activities.</li>
                <li><strong>Technology Integration:</strong> Utilizes advanced technology and digital tools to enhance learning experiences and facilitate interactive lessons.</li>
                <li><strong>Collaborative Projects:</strong> Involves students in group work to foster teamwork, communication, and collective problem-solving skills.</li>
                <li><strong>Flipped Classroom:</strong> Students learn new content at home and apply their knowledge through interactive activities in class.</li>
                <li><strong>Mentorship Programs:</strong> Provides guidance and support from experienced mentors to help students achieve academic and personal goals.</li>
                <li><strong>Peer Review:</strong> Encourages students to give and receive constructive feedback on each other's work, enhancing their evaluative and reflective skills.</li>
                <li><strong>Experiential Learning:</strong> Offers hands-on experiences and real-world applications to reinforce theoretical knowledge.</li>
                <li><strong>Interdisciplinary Approach:</strong> Integrates concepts from different subjects to provide a more comprehensive understanding of complex topics.</li>
            </ul>

            <h3>Educational Resources</h3>
            <p>Our secondary education resources are designed to support advanced learning and skill development:</p>
            <ul>
                <li><strong>Advanced Textbooks:</strong> In-depth texts covering complex subjects with detailed explanations and examples.</li>
                <li><strong>Lab Manuals:</strong> Practical guides for conducting experiments and understanding scientific methodologies.</li>
                <li><strong>Digital Platforms:</strong> Online tools and resources that offer interactive lessons, simulations, and assessments.</li>
                <li><strong>Research Journals:</strong> Scholarly articles and publications to support academic research and deepen subject knowledge.</li>
            </ul>
        </Container>
    );
};

export default Secondary;
