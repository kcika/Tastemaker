import React from 'react'
import { Helmet } from "react-helmet";
import { assets } from '../../assets/assets'
import './About.css'
import '../../index.css'
import CarouselFadeExample from '../Carousels/CarouselFadeExample'
import CarouselFadeExample2 from '../Carousels/CarouselFadeExample2'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tastemaker | About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className='aboutHero position-relative'>
                    <div className="overlay"></div>
                    <div className="position-relative top-50 start-50 translate-middle text-center">
                        <p className="fs-1 fw-semibold golden mb-0">About Us</p>
                        <img src={assets.separator} className='my-3' width={100} alt="separator" />
                        <p className='fs-4 fw-semibold text-white'>Welcome to The Tasty Plate! Where flavor meets passion.</p>
                    </div>
                </div>
                <div className="golden">
                    <div className="container-fluid story px-0">
                        {/* OUR STORY SECTION */}
                        <div className='container py-md-5 px-0'>
                            <p className="fs-5 fw-semibold text-center ls-3">OUR STORY</p>
                            <img src={assets.separator} className='d-block mx-auto mb-4' width={80} alt="separator" />
                            <p className="fs-1 fw-semibold text-white text-center mb-0">A Glimpse of our story</p>
                            <div className="row py-5 px-0">
                                <div className="story col-12 col-lg-6 h-auto p-0">
                                    <CarouselFadeExample />
                                </div>
                                <div className="col-12 col-lg-6 d-flex flex-column text-center justify-content-center align-items-center px-md-5 py-3">
                                    <p className="fs-1 fw-semibold">We Always Make The Best</p>
                                    <p className="fs-5 text-white">The <strong>Tastemaker</strong> was founded in 2020 by a group of food enthusiasts with a passion for delicious, fresh, and locally-sourced ingredients. Our journey began with a simple idea: to create a dining experience that combines culinary excellence with a warm, inviting atmosphere. From our humble beginnings, serving just a handful of dishes in a small space, we have grown into a bustling hotspot known for our innovative menu and exceptional service. Each step of our journey has been guided by our love for food and a commitment to our community. Today, The Tasty Plate is not just a restaurant—it's a place where memories are made, friendships are forged, and everyone feels at home.</p>
                                </div>
                            </div>
                        </div>
                        {/*  Our mission */}
                        <div className="container-fluid mission px-0">
                            <div className='container py-md-5'>
                                <p className="fs-1 fw-semibold text-center mb-0">OUR MISSION</p>
                                <img src={assets.separator} className='d-block mx-auto my-4' width={80} alt="separator" />
                                <div className="row py-5 px-0">
                                    <div className="order-md-0 order-2 col-12 col-lg-6 d-flex flex-column text-center justify-content-center align-items-center py-3">
                                        <p className="fs-1 fw-semibold">Where Every Meal Feels Like Home</p>
                                        <p className="fs-5 text-white pe-5">At The Tasty Plate, our mission is to bring people together with great food and warm hospitality. We are committed to using fresh, locally-sourced ingredients to create dishes that delight, while supporting local farmers and ensuring sustainability. Our goal is to make every visit special, creating a welcoming environment where every guest feels like family. Whether it's for a casual lunch, a celebratory dinner, or a quick bite, we strive to make every meal memorable. We are passionate about hospitality, and we are committed to making a positive impact on our community through our food, our service, and our dedication to excellence</p>
                                    </div>
                                    <div className="story col-12 col-lg-6 h-auto p-0">
                                        <CarouselFadeExample2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Why choose us */}
                    <div className='whyChooseUs py-5 position-relative'>
                        <div className="overlay z-0"></div>
                        <div className="container position-relative py-5">
                            <p className="fs-6 fw-semibold text-center ls-3 z-1">WHY CHOOSE US</p>
                            <img src={assets.separator} className='d-block mx-auto mb-4' width={80} alt="separator" />
                            <p className="fs-1 fw-semibold text-center text-white">Our Strength</p>
                            <div className="row px-0 py-5">
                                <div className="col-12 col-md-6 col-lg-3 my-2">
                                    <div className='strength strength1 py-5 rounded-4 text-center'>
                                        <div className="card-icon">
                                            <img src={assets.features1} alt="icon" />
                                        </div>
                                        <p className="fs-4 my-3 text-white">Hygienic Food</p>
                                        <p className="card-text fs-5 px-4">Our top priority is a clean and hygienic environment to ensure the safety and well-being of our guests.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 my-2">
                                    <div className='strength strength2 py-5 rounded-4 text-center'>
                                        <div className="card-icon">
                                            <img src={assets.features2} alt="" />
                                        </div>
                                        <p className="fs-4 my-3 text-white">Peaceful Environment</p>
                                        <p className="card-text fs-5 px-4">Our restaurant offers a warm and inviting atmosphere, perfect for both casual meals and special occasions.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 my-2">
                                    <div className='strength strength3 py-5 rounded-4 text-center'>
                                        <div className="card-icon">
                                            <img src={assets.features3} alt="" />
                                        </div>
                                        <p className="fs-4 my-3 text-white">Skilled Chefs</p>
                                        <p className="card-text fs-5 px-4">Every Chef brings culinary artistry to each dish, blending traditional flavors with modern techniques.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 my-2">
                                    <div className='strength strength4 py-5 rounded-4 text-center'>
                                        <div className="card-icon">
                                            <img src={assets.features4} alt="" />
                                        </div>
                                        <p className="fs-4 my-3 text-white">Party &amp; Events</p>
                                        <p className="card-text fs-5 px-4">We host party and events that create unforgettable memories with exceptional food and ambiance.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* meet our team */}
                    <div className="container-fluid px-0 mission">
                        <div className='container py-5'>
                            <p className="fs-5 fw-semibold text-center ls-3">EXPERIENCED TEAM</p>
                            <img src={assets.separator} className='d-block mx-auto mb-4' width={80} alt="separator" />
                            <p className="fs-1 fw-semibold text-center mb-0 text-white">Meet Our Chef</p>
                            <div className="row py-5 px-0">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className='chef mx-2'>
                                        <img src={assets.chef1} width={"100%"} alt="chef1" />
                                        <p className="name fs-2 mb-0 mt-3 text-white">Jonathan Bennett</p>
                                        <p className="fs-6 fw-semibold ls-3 my-2">EXECUTIVE CHEF</p>
                                        <p className="fs-6 text-white">Chef Jonathan Bennett, our Executive Chef, brings over 10 years of culinary expertise to The Tastemaker.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className='chef mx-2'>
                                        <img src={assets.chef2} width={"100%"} alt="chef2" />
                                        <p className="name fs-2 mb-0 mt-3 text-white">Maria Vasquez</p>
                                        <p className="fs-6 fw-semibold ls-3 my-2">HEAD CHEF</p>
                                        <p className="fs-6 text-white">Chef Maria Vasquez serves as the Head Chef at The Tastmaker, where she infuses the menu with vibrant flavors. </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className='chef mx-2'>
                                        <img src={assets.chef3} width={"100%"} alt="chef3" />
                                        <p className="name fs-2 mb-0 mt-3 text-white"> Alex Kim</p>
                                        <p className="fs-6 fw-semibold ls-3 my-2">CHEF DE PARTIE</p>
                                        <p className="fs-6 text-white">Chef Alex Kim, our Chef de Partie, plays a crucial role in The Tastemaker, with expertise in various cooking stations</p>
                                    </div>
                                </div>
                                {/* <div className="col-12 col-md-6 col-lg-3">
                                <div className='chef mx-2'>
                                    <img src={assets.chef4} width={"100%"} alt="chef4" />
                                    <p className="name fs-2 mb-0 mt-3 text-white">Elena Rodriguez </p>
                                    <p className="fs-6 fw-semibold ls-3 my-2">PASTRY CHEF</p>
                                    <p className="fs-6 text-white">Chef Elena Rodriguez, our Pastry Chef, is known for her exquisite desserts that delight both the eyes and the palate.</p>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    {/* testimonials */}
                    <div className="testimonialsec2 py-5">
                        <div className="container py-5">
                            <p className="fs-5 fw-semibold text-center ls-3">HAPPY CUSTOMERS</p>
                            <img src={assets.separator} className='d-block mx-auto mb-4' width={80} alt="separator" />
                            <p className="fs-1 fw-semibold text-center mb-0 text-white">What People Say About Us</p>
                            <div className="row my-5">
                                <div className="col-12 col-md-6 col-lg-4 my-3 my-md-3">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial1} className='rounded-circle' width={100} alt="testimonial1" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5 text-white">Absolutely amazing! Every dish was bursting with flavor and freshness. Highly recommend!</p>
                                        <p className="fs-5 fw-semibold mb-0 ls-3">-Sarah T.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 my-3 my-md-3">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial2} className='rounded-circle' width={100} alt="testimonial2" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5 text-white">The best meal I've had in a long time. The ingredients were fresh, and the presentation was stunning!</p>
                                        <p className="fs-5 fw-semibold mb-0 ls-3">-Deep Singh.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 d-md-block d-none my-3 my-md-3">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial3} className='rounded-circle' width={100} alt="testimonial3" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5 text-white">Incredible flavors and beautifully prepared dishes. The food here is a feast for the senses!</p>
                                        <p className="fs-5 fw-semibold mb-0 ls-3">-Emily K.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* call to action */}
                    <div className='ctaSection py-4 position-relative'>
                        <div className="overlay z-0"></div>
                        <div className="container position-relative py-5">
                            <img src={assets.separator} className='d-block mx-auto my-4' width={80} alt="separator" />
                            <div className="row px-md-5 px-0 py-4 text-center">
                                <p className="fs-1 fw-semibold">Ready to experience The Tasty Plate for yourself?</p>
                                <p className='fs-4 px-5 text-white'>Join us for an unforgettable dining experience with fresh, locally-sourced ingredients and warm hospitality. Reserve your spot now or Order Online!</p>
                                <div className='my-5 d-flex flex-column flex-md-row align-items-center justify-content-center w-50 mx-auto'>
                                    <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                                        <span className="text text-1">View Our Menu</span>
                                        <span className="text text-2" aria-hidden="true">View Our Menu</span>
                                    </NavLink>
                                    <NavLink to="/delivery" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                                        <span className="text text-1">Order Online</span>
                                        <span className="text text-2" aria-hidden="true">Order Online</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
