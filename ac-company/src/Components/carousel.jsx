import React, { useState } from 'react';
import '../CSS/carousel.css';
import img1 from "../banana.jpg"
import img2 from "../btest.jpg"
import img3 from "../btest2.jpg"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1,
        img2,
        img3
    ];

    const goPrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="carousel-container">
            <button className="carousel-btn carousel-btn-prev" onClick={goPrev}>❮</button>
            <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="carousel-image" />
            <button className="carousel-btn carousel-btn-next" onClick={goNext}>❯</button>
            <div className="carousel-indicators">
                {images.map((_, idx) => (
                    <button 
                        key={idx}
                        className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel