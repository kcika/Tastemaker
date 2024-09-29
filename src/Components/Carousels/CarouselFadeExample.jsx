import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import './Carousel.css'

function CarouselFadeExample() {
    return (
        <Carousel interval={3000} fade>
            <Carousel.Item>
                <img src={assets.story1} width={"100%"} height="500" className='object-fit-cover' alt="menu1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.story2} width={"100%"} height="500" className='object-fit-cover' alt="menu2" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.story3} width={"100%"} height="500" className='object-fit-cover' alt="menu3" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.story4} width={"100%"} height="500" className='object-fit-cover' alt="menu3" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;