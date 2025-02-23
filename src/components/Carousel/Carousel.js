
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';



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
        <div className="carousel-container1">
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Imagem 1" className="carousel-image1" aria-label="Imagem 1" loading="lazy" />
                    <div className="carousel-text">Texto sobreposto 1</div>
                </div>
                <div>
                    <img src={image2} alt="Imagem 2" className="carousel-image1" aria-label="Imagem 2" loading="lazy" />
                    <div className="carousel-text">Texto sobreposto 1</div>
                </div>
                <div>
                    <img src={image3} alt="Imagem 3" className="carousel-image1" aria-label="Imagem 3" loading="lazy" />
                    <div className="carousel-text">Texto sobreposto 1</div>
                </div>
                
            </Slider>
        </div>
    );
};

export default Carousel; // Exportação correta