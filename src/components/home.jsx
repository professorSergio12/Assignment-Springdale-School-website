import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/carousel-images/carousel-img1.jpg';
import img2 from '../img/carousel-images/carousel-img2.jpg';
import img3 from '../img/carousel-images/carousel-img3.jpg';
import '../css/Home.css';
import Faculty from './faculty';
import Academics from './academic';
import Introduction from './introduction';

function Home({ academicsRef }) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>Annual Sports Day</h3>
                        <p style={{ color: 'black' }}>Celebrating Excellence in Sports</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h3>Science Exhibition</h3>
                        <p>Showcasing Student Innovations</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h3>Cultural Fest</h3>
                        <p>Embracing Diversity and Creativity</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Introduction/>
            <section id="faculty">
                <Faculty />
            </section>
            
            <section id="academics" ref={academicsRef}>
                <Academics />
            </section>
        </>
    );
}

export default Home;
