import React from 'react'
import { Helmet } from 'react-helmet'
import { assets } from '../../assets/assets'
import './Contact.css'
import '../../index.css'
import Reservation from '../Reservation/Reservation'

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tastemaker | Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className='contactHero position-relative'>
                    <div className="overlay"></div>
                    {/* <img src={assets.contacthero} width={"100%"} height={600} className='object-fit-cover' alt="hero Image" /> */}
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <p className="fs-1 fw-semibold golden">Contact Us</p>
                        <img src={assets.separator} width={100} alt="separator" />
                    </div>
                </div>
                <div></div>
                <div className='black py-5'>
                    <div className="container golden">
                        <div className="row align-items-center py-3">
                            <div className="col-12 col-md-6 px-3 pe-md-5 golden">
                                <p className="h1 mb-5">Get In Touch With Us</p>
                                <form action="">
                                    <p className='mb-0 fs-5'><label htmlFor="name">Name</label></p>
                                    <input type="text" name="name" id="name" required />
                                    <p className='mb-0 fs-5'><label htmlFor="email">Email</label></p>
                                    <input type="email" name="email" id="email" required />
                                    <p className='mb-0 fs-5'><label htmlFor="num">Phone Number</label></p>
                                    <input type="tel" name="num" id="num" maxLength={10} required />
                                    <p className='mb-0 fs-5'><label htmlFor="sub">Subject</label></p>
                                    <select name="sub" id="sub">
                                        <option value="1">General Inquiry</option>
                                        <option value="2">Reservation</option>
                                        <option value="3">Catering</option>
                                        <option value="4">Feedback</option>
                                    </select>
                                    <p className='mb-0 fs-5'><label htmlFor="mssg">Message</label></p>
                                    <textarea name="mssg" id="mssg"></textarea>
                                    <button type="submit" className='py-3 w-100 fw-semibold ls-3'>SEND MESSAGE</button>
                                    <p className='my-3 fst-italic fs-5'>Thank you for reaching out! We will get back to you soon.</p>
                                </form>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={assets.contactForm} width={"100%"} alt="pancake" />
                            </div>
                        </div>
                        <img src={assets.separator} width={200} className='d-block my-5 mx-auto' alt="separator" />
                        <div className="row align-items-center py-3">
                            <div className="col-12 col-md-6">
                                <img src={assets.googlemap} width={"100%"} className='object-fit-cover' alt="google map" />
                            </div>
                            <div className="col-12 col-md-6 px-3 ps-lg-5">
                                <p className="h1 mb-5">Use the map to find us easily!</p>
                                <p className="fs-5 text-white"><strong>Address</strong> : 1234 Flavor Street, Suite 567 Foodville, CA 98765 USA</p>
                                <p className="fs-5 text-white"><strong>Phone Number</strong> : (123) 456-7890</p>
                                <p className="fs-5 text-white"><strong>Email</strong> : info@thetastyplate.com</p>
                                <p className="fs-5 mt-4 ls-3"><strong>OUR HOURS :</strong></p>
                                <p className="fs-5 text-white"><i class="bi bi-x-diamond-fill"></i> Monday - Friday: 11:00 AM - 10:00 PM</p>
                                <p className="fs-5 text-white"><i class="bi bi-x-diamond-fill"></i> Saturday: 10:00 AM - 11:00 PM</p>
                                <p className="fs-5 text-white"><i class="bi bi-x-diamond-fill"></i> Sunday: 10:00 AM - 9:00 PM</p>
                                <p className="my-3 fst-italic text-white fs-5">Special Hours for Holidays: Check our social media for updates.</p>
                                <p className="fs-5 mt-4 ls-3"><strong>CONNECT WITH US :</strong></p>
                                <div className='fs-4 text-white icons d-flex'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <i class="bi bi-twitter-x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src={assets.separator} width={200} className='d-block my-5 mx-auto' alt="separator" />
                        <Reservation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
