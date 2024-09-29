import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import './Carousel.css'

function CarouselFadeExample2() {
    return (
        <Carousel interval={3000} fade>
            <Carousel.Item>
                <img src={assets.mission1} width={"100%"} className='object-fit-cover' alt="mission1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.mission2} width={"100%"} className='object-fit-cover' alt="mission2" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.mission3} width={"100%"} className='object-fit-cover' alt="mission3" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.mission4} width={"100%"} className='object-fit-cover' alt="mission4" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample2;