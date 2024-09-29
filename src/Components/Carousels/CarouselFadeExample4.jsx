import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
function CarouselFadeExample4() {
    return (
        <Carousel interval={2000} fade>
            <Carousel.Item>
                <div className="page1 position-relative golden">
                    <div className="overlay"></div>
                    <div className="container position-absolute top-50 start-50 translate-middle w-100 px-5 text-center">
                        <p className="heading fw-semibold text-white mb-0">Good Food Good Vibes</p>
                        <p className="fs-3 text-white">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                            <span className="text text-1">View Our Menu</span>
                            <span className="text text-2" aria-hidden="true">View Our Menu</span>
                        </NavLink>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="page2 position-relative golden">
                    <div className="container position-absolute top-50 start-50 translate-middle w-100 px-5 text-center">
                        <p className="heading fw-semibold text-white mb-0">Where every flavor tells a story</p>
                        <p className="fs-3 text-white">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                            <span className="text text-1">View Our Menu</span>
                            <span className="text text-2" aria-hidden="true">View Our Menu</span>
                        </NavLink>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="page3 position-relative golden">
                    <div className="overlay"></div>
                    <div className="container position-absolute top-50 start-50 translate-middle w-100 px-5 text-center">
                        <p className="heading fw-semibold text-white mb-0">For the love of delicious food</p>
                        <p className="fs-3 text-white">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                            <span className="text text-1">View Our Menu</span>
                            <span className="text text-2" aria-hidden="true">View Our Menu</span>
                        </NavLink>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample4;