import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import './Carousel.css'

function CarouselFadeExample3() {
    return (
        <Carousel interval={3000} fade>
            <Carousel.Item>
                <img src={assets.order1} width={"100%"} height={800} className='object-fit-cover' alt="mission1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.order2} width={"100%"} height={800} className='object-fit-cover' alt="mission2" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.order3} width={"100%"} height={800} className='object-fit-cover' alt="mission3" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={assets.order4} width={"100%"} height={800} className='object-fit-cover' alt="mission4" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample3;