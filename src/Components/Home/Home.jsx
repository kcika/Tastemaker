import React from 'react'
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Home.css'
import '../../index.css'
import CarouselFadeExample4 from '../Carousels/CarouselFadeExample4'
import Reservation from '../Reservation/Reservation'
import Gallery from '../Gallery/Gallery'

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tastemaker | Welcome Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='golden'>
                <CarouselFadeExample4 />
                {/* about us section */}
                <div className="container-fluid storysec">
                    <div className='container py-5'>
                        <div className="row py-lg-5 my-0 my-lg-5">
                            <div className="col-12 col-lg-5 text-center pe-lg-5 my-3 my-lg-0 order-1 order-sm-2">
                                <p className="fs-4 fw-semibold mb-0 ls-3">OUR STORY</p>
                                <img src={assets.separator} width={100} className='my-3' alt="" />
                                <p className="fs-1 text-white">A journey of flavor and tradition crafted with passion</p>
                                <p className="fs-5 text-white">Our story is a journey of flavor and tradition, crafted with passion and dedication. From cherished family recipes to innovative creations, each dish reflects our commitment to quality and authenticity. Using time-honored techniques and fresh ingredients, we bring you a dining experience that celebrates both tradition and innovation. Join us, where every bite tells a story of passion and culinary excellence.</p>
                                <NavLink to="/about" className='d-inline-block cta-menu hover-underline text-decoration-none fs-4 my-3'>Read More About Us</NavLink>
                            </div>
                            <div className="col-12 col-lg-7">
                                <div className='imgContainer rounded-4 h-100'>
                                    <img src={assets.mission2} className='rounded-4' width={"100%"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delicious menu */}
                <div className="menusec container-fluid">
                    <div className="container">
                        <div className='py-5'>
                            <div className='text-center my-0 my-lg-3'>
                                <p className="fs-1 mb-0">Delicious Menu</p>
                                <img src={assets.separator} className='mt-2 mb-5' width={100} alt="" />
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 px-0 px-lg-4">
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.steakFlorentine} width={100} height={100} className='rounded-4' alt="steak" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Steak Florentine</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 40.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Grilled steak, often served with sides like mashed potatoes, vegetables, or salad.</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.chickenparmesan} width={100} height={100} className='rounded-4' alt="chicken parmesan" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Chicken Parmesan</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$25.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Breaded and fried chicken breast topped with marinara sauce and melted cheese.</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.SalmonFillet} width={100} height={100} className='rounded-4' alt="salmon" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Salmon Fillet</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 30.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Grilled or baked salmon, often served with vegetables, rice, or a lemon butter sauce.</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.VegetableStirFry} width={100} height={100} className='rounded-4' alt="vegetable stir fry" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Vegetable Stir-Fry</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 18.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">A mix of vegetables sautéed with soy sauce and other seasonings, often served with rice or noodles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 px-0 px-lg-4">
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className='dish-img'>
                                            <img src={assets.FishandChips} width={100} height={100} className='rounded-4' alt="fish and chips" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Fish and Chips</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 21.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5"> Battered and fried fish fillets served with crispy fries and often accompanied by tartar sauce.</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.chickenCurry} width={100} height={100} className='rounded-4' alt="chicken curry" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Chicken Curry</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 20.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Spiced chicken simmered in a flavorful curry sauce, served with rice or naan bread</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.vegetarianLasagna} width={100} height={100} className='rounded-4' alt="lasagna" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Vegetarian Lasagna</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 20.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Layers of pasta, marinara sauce, and cheese with vegetables like spinach, zucchini, and mushrooms.</p>
                                        </div>
                                    </div>
                                    <div className="dish d-flex align-items-start align-items-md-center my-4">
                                        <div className="dish-img">
                                            <img src={assets.butterChicken} width={100} height={100} className='rounded-4' alt="butter chicken" />
                                        </div>
                                        <div className='ms-4'>
                                            <div className="namePrice d-md-flex justify-content-between align-items-center mb-1">
                                                <p className='golden fs-4 mb-0 me-2'>Butter Chicken</p>
                                                <p className='golden fs-4 mb-0 ms-2 fw-semibold'>$ 20.00</p>
                                            </div>
                                            <p className="mb-0 text-white fs-5">Tender chicken cooked in a creamy tomato-based sauce with a blend of spices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center my-5'>
                                {/* <NavLink to="/menu" className='d-inline-block cta-menu hover-underline text-decoration-none fs-4 my-3'>Explore Full Menu</NavLink> */}
                                <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto">
                                    <span className="text text-1">View Our Menu</span>
                                    <span className="text text-2" aria-hidden="true">View Our Menu</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* signature dishes */}
                <div className="signaturesec container-fluid py-3 py-md-5">
                    <div className="container">
                        <div className='text-center py-5'>
                            <p className="h5 fw-semibold ls-3 mb-0">BEST SPECIALTIES</p>
                            <img src={assets.separator} className='my-3' width={100} alt="" />
                            <p className="fs-60 fs-1 mb-0 text-white">Our Signature Dishes</p>
                        </div>
                        <div className='row pb-4'>
                            <div className="col-12 col-md-6 col-lg-3 my-3 my-md-0">
                                <div className="signatureDish text-center">
                                    <div className='img'>
                                        <img src={assets.chickenCurry} className='' width={"100%"} alt="" />
                                    </div>
                                    <p className='fs-3 px-3 mb-0 mt-2 fw-semibold'>Chicken Curry</p>
                                    <p className='fs-5 px-3 my-1 text-white'>Tender chicken pieces simmered in a flavorful curry made with aromatic spices, tomatoes, and onions.</p>
                                    <p className="fs-4 fw-semibold">$ 20.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt-3 my-md-0">
                                <div className="signatureDish text-center mt-0 mt-lg-5">
                                    <div className='img'>
                                        <img src={assets.paneertikkamasala} className='' width={"100%"} alt="" />
                                    </div>
                                    <p className='fs-3 px-3 mb-0 mt-2 fw-semibold'>Paneer Tikka Masala</p>
                                    <p className='fs-5 px-3 my-1 text-white'>Grilled chunks of paneer simmered in a rich, creamy tomato-based sauce with aromatic spices.</p>
                                    <p className="fs-4 fw-semibold">$ 18.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-3 my-md-0">
                                <div className="signatureDish text-center">
                                    <div className='img'>
                                        <img src={assets.PastaBolognese} className='' width={"100%"} alt="" />
                                    </div>
                                    <p className='fs-3 px-3 mb-0 mt-2 fw-semibold'>Pasta Bolognese</p>
                                    <p className='fs-5 px-3 my-1 text-white'>A hearty Italian classic featuring tender pasta tossed in a rich, slow-cooked tomato and meat sauce.</p>
                                    <p className="fs-4 fw-semibold">$25.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-3 my-md-0">
                                <div className="signatureDish text-center mt-0 mt-lg-5">
                                    <div className='img'>
                                        <img src={assets.chilliChicken} className='' width={"100%"} alt="" />
                                    </div>
                                    <p className='fs-3 px-3 mb-0 mt-2 fw-semibold'>Chilli CHicken</p>
                                    <p className='fs-5 px-3 my-1 text-white'>Spicy and savory chicken pieces stir-fried with bell peppers, onions, and a bold blend of sauces and spices.</p>
                                    <p className="fs-4 fw-semibold">$18.00</p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/menu" className="btn1 btn-primary1 slider-reveal text-decoration-none mx-auto mt-3">
                            <span className="text text-1">View Our Menu</span>
                            <span className="text text-2" aria-hidden="true">View Our Menu</span>
                        </NavLink>
                    </div>
                </div>

                {/* reservation section */}
                <div className="reservationCont px-0 py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 reservationsec mx-auto p-5">
                                <Reservation />
                            </div>
                        </div>
                    </div>
                </div>
                {/* testimonials */}
                <div className="testimonialsec container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="testimonials py-5">
                                <div className="container">
                                    <p className="fs-5 fw-semibold text-center ls-3">HAPPY CUSTOMERS</p>
                                    <img src={assets.separator} className='d-block mx-auto mb-4' width={80} alt="separator" />
                                    <p className="fs-1 fw-semibold text-center mb-0 text-white">What People Say About Us</p>
                                    <div className="row py-5">
                                        <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
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
                                                <p className="fs-5 mb-0 fw-semibold ls-3">-Sarah T.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
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
                                                <p className="fs-5 fw-semibold ls-3 mb-0">-Deep Singh.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0 d-md-none d-lg-block">
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
                                                <p className="fs-5 fw-semibold ls-3 mb-0">-Emily K.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery */}
                <div className="gallerysec container-fluid px-0 py-5">
                    <Gallery />
                </div>
            </div >
        </>
    )
}

export default Home