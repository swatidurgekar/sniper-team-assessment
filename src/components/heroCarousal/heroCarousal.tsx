import { useEffect, useState } from 'react';
import "./heroCarousal.css";

const slidesData = [
    {
        img: '/hero1.jpg',
        heading: 'Transform Your Data Into Actionable Insights',
        subheading: 'Unlock the power of your business data with our cutting-edge automation solutions',
        cta: 'Start Your Journey',
    },
    {
        img: '/hero2.jpg',
        heading: 'Boost Growth with Clear Metrics',
        subheading: 'We help you track, visualize, and act on your key data points.',
        cta: 'Explore Solutions',
    },
    {
        img: '/hero3.jpg',
        heading: 'Unleash Intelligent Automation',
        subheading: 'Our AI-powered tools streamline your operations with ease.',
        cta: 'Get a Free Demo',
    }
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slidesData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(slideInterval); // Cleanup on unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className="quote-bar">
                <p>“You can’t grow what you can’t see — we make the invisible visible.”</p>
            </div>

            <div className="carousel-container">
                {slidesData.map((slide, index) => (
                    <div
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={slide.img} alt={`Slide ${index}`} className="carousel-img" />
                        <div className="carousel-content">
                            <h1>{slide.heading}</h1>
                            <p>{slide.subheading}</p>
                            <button className="cta-btn">{slide.cta} →</button>
                        </div>
                    </div>
                ))}

                <span className="arrow left" onClick={prevSlide}>&#10094;</span>
                <span className="arrow right" onClick={nextSlide}>&#10095;</span>

                <div className="dots">
                    {slidesData.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? 'dot active' : 'dot'}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
