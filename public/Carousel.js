import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const images = [
    { src: "/assets/image1.jpg", text: "Transformando vidas com o esporte" },
    { src: "/assets/image2.jpg", text: "Juntos, fazemos a diferença!" },
    { src: "/assets/image3.jpg", text: "Apoie nossa causa e mude o futuro" }
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <div className="carousel-container" aria-label="Carrossel de imagens">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={item.src} alt={item.text} className="carousel-image" loading="lazy" />
                        <div className="carousel-overlay" aria-hidden="true"></div>
                        <div className="carousel-text">
                            {item.text.length > 50 ? item.text.substring(0, 50) + "..." : item.text}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
