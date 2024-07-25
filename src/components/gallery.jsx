import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../css/gallery.css';

import sportsDay1 from '../img/gallery-images/sports/sports_day_1.jpg';
import sportsDay2 from '../img/gallery-images/sports/sports_day_2.jpg';
import sportsDay3 from '../img/gallery-images/sports/sports_day_3.jpg';
import scienceExhibition1 from '../img/gallery-images/exhibitions/science_exhibition1.jpg';
import scienceExhibition2 from '../img/gallery-images/exhibitions/science_exhibition2.avif';
import scienceExhibition3 from '../img/gallery-images/exhibitions/science_exhibition3.avif';
import culturalFest1 from '../img/gallery-images/cultural/cultural_fest1.avif';
import culturalFest2 from '../img/gallery-images/cultural/cultural_fest2.jpg';
import culturalFest3 from '../img/gallery-images/cultural/cultural_fest3.jpg';
import classroom1 from '../img/gallery-images/classroom/classroom1.jpg';
import classroom2 from '../img/gallery-images/classroom/classroom2.avif';
import classroom3 from '../img/gallery-images/classroom/classroom3.avif';
import library1 from '../img/gallery-images/library/library1.jpeg';
import library2 from '../img/gallery-images/library/library2.avif';
import library3 from '../img/gallery-images/library/library3.avif';

import schoolTour from '../videos/school_tour.mp4';
import annualFunction from '../videos/annual_function.mp4';
import schoolTourThumbnail from '../img/thumbnail1.jpg';
import annualFunctionThumbnail from '../img/thumbnail2.jpg';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [activeVideo, setActiveVideo] = useState(null);

    const photos = [
        { img: sportsDay1, description: 'Students participating in various sports events.', category: 'Sports Day' },
        { img: sportsDay2, description: 'More sports events at the annual sports day.', category: 'Sports Day' },
        { img: sportsDay3, description: 'Students enjoying sports activities.', category: 'Sports Day' },
        { img: scienceExhibition1, description: 'Students presenting their science projects.', category: 'Science Exhibition' },
        { img: scienceExhibition2, description: 'Innovative science experiments on display.', category: 'Science Exhibition' },
        { img: scienceExhibition3, description: 'A glimpse into the science exhibition.', category: 'Science Exhibition' },
        { img: culturalFest1, description: 'Students performing in the cultural fest.', category: 'Cultural Fest' },
        { img: culturalFest2, description: 'Dance performance at the cultural fest.', category: 'Cultural Fest' },
        { img: culturalFest3, description: 'Music and drama at the cultural fest.', category: 'Cultural Fest' },
        { img: classroom1, description: 'A glimpse of our interactive classrooms.', category: 'Classroom' },
        { img: classroom2, description: 'Students engaged in classroom activities.', category: 'Classroom' },
        { img: classroom3, description: 'Modern classroom setup.', category: 'Classroom' },
        { img: library1, description: 'Students reading and studying in the school library.', category: 'Library' },
        { img: library2, description: 'Quiet time in the school library.', category: 'Library' },
        { img: library3, description: 'Exploring books in the library.', category: 'Library' },
    ];

    const videos = [
        { src: schoolTour, description: 'Virtual tour of Springdale Public School.', category: 'School Tour', thumbnail: schoolTourThumbnail },
        { src: annualFunction, description: 'Highlights from the Annual Function 2023.', category: 'Annual Function', thumbnail: annualFunctionThumbnail },
    ];

    const filteredPhotos = filter === 'All' ? photos : photos.filter(photo => photo.category === filter);

    return (
        <>
            <Container className="my-5">
                <Row className="justify-content-center mb-4">
                    <Col md={10} className="text-center">
                        <h1 className="gallery-title">Gallery</h1>
                        <p>Photo and video gallery showcasing school events, activities, and infrastructure.</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Filter by Event Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setFilter('All')}>All</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilter('Sports Day')}>Sports Day</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilter('Science Exhibition')}>Science Exhibition</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilter('Cultural Fest')}>Cultural Fest</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilter('Classroom')}>Classroom</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilter('Library')}>Library</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <div className="gallery-section">
                            <h2>Photos</h2>
                            <Row className="gallery-collage">
                                {filteredPhotos.map((photo, index) => (
                                    <Col xs={12} sm={6} md={4} key={index} className="mb-4 gallery-item">
                                        <Card className="gallery-card">
                                            <Card.Img variant="top" src={photo.img} className="gallery-card-img" loading="lazy"/>
                                            <Card.Body className="gallery-card-body">
                                                <Card.Text className="gallery-card-text">{photo.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Videos</h2>
                        <Row>
                            {videos.map((video, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <Card className="gallery-card-video" onClick={() => setActiveVideo(video.src)}>
                                        <div className="video-container">
                                            {activeVideo === video.src ? (
                                                <video controls className="gallery-video">
                                                    <source src={video.src} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : (
                                                <img src={video.thumbnail} alt="Thumbnail" className="gallery-video-thumbnail" loading="lazy"/>
                                            )}
                                        </div>
                                        <Card.Body className="gallery-card-body-video">
                                            <Card.Text className="gallery-card-text">{video.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Gallery;
