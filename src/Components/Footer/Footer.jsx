import React from 'react'
import './Footer.css'
import '../../index.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer py-5 position-relative'>
            <div className="darkoverlay"></div>
            {/* <img src={assets.footerImg} width={"100%"} alt="" /> */}
            <div className="container pt-4">
                <div className="row text golden d-flex align-items-center justify-content-center position-relative">
                    <ul className='col-12 col-md-6 order-2 order-sm-2 order-lg-1 col-lg-3 text-center px-5'>
                        <li>
                            <NavLink to="" className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delivery" className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">DELIVERY</NavLink>
                        </li>
                    </ul>
                    <div className="col-12 col-md-12 order-lg-2 col-lg-6">
                        <div className="box text-center mx-2 mx-md-auto">
                            <p className="h1 mb-4 logo">Tastemaker</p>
                            <p className='fs-5 text-white ws-2 ls-1 mb-0'>1234 Flavor Street, Suite 567, Fooville, CA 98756, USA </p>
                            <p className='fs-5 text-white ws-2 ls-1 mb-0'>booking@tastemaker.com</p>
                            <p className='fs-5 text-white ws-2 ls-1 mb-0'>Call: (123) 456-7890</p>
                            <p className='fs-5 text-white ws-2 ls-1 mb-0'>Open: 10:00 am to 11:00pm</p>
                            <img src={assets.separator} width={70} className='my-4' alt="seperator" />
                            <p className='fs-4 fw-semibold mb-0 ws-2 ls-1'>Get News and Offers</p>
                            <p className='fs-5 text-white mb-4 ws-2'>Subscribe us and get upto 15% off</p>
                            <form action="" className='input-wrapper d-flex justify-content-center'>
                                <div className="icon-wrapper d-flex align-items-center px-3">
                                    <i class="bi bi-envelope"></i>
                                    <input type="email" className='input-field' name='email' id='email' placeholder='Your Email' required />
                                </div>
                                <button className="subBtn px-1 px-md-5 ls-3 golden fw-semibold">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                    <ul className='col-12 col-md-6 order-2 order-sm-3 col-lg-3 text-center px-5'>
                        <li>
                            <a href="https://www.facebook.com" target='_blank' class="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">FACEBOOK</a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target='_blank' className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">INSTAGRAM</a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target='_blank' className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">TWITTER</a>
                        </li>
                        <li>
                            <a href="https://youtube.com" target='_blank' className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">YOUTUBE</a>
                        </li>
                        <li>
                            <a href="https://googlemap.com" target='_blank' className="nav-link block text-white ls-3 text-lg px-4 py-3 fw-semibold hover-underline mx-auto">GOOGLEMAP</a>
                        </li>
                    </ul>
                </div >
                <p className="fs-5 text-white position-relative z-3 text-center ws-2 ls-1 mt-5">&copy; 2024 Tastemaker. All Rights Reserved.</p>

                {/* <div className="row golden position-relative">
                    <div className="col-12 col-lg-4 my-2">
                        <p className="fs-1 fw-semibold ls-3">TASTEMAKER</p>
                        <p className='fs-5 fw-semibold text-white ws-2 ls-1'>1234 Flavor Street, Suite 567 Foodville, CA 98765 USA</p>
                    </div>
                    <div className="col-12 col-lg-4 my-2 d-flex">
                        <ul className='col-6 ps-0'>
                            <p className="fs-4 fw-semibold">Quick Links</p>
                            <li>
                                <NavLink to="" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/delivery" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Order Online</NavLink>
                            </li>
                        </ul >
                        <ul className="col-6 ps-0">
                            <p className="fs-4 fw-semibold">Get In Touch</p>
                            <li className='fw-semibold'><i className="bi bi-telephone"></i> : (123) 456-7890</li>
                            <li className='fw-semibold'><i className="bi bi-envelope"></i>: info@thetastyplate.com</li>
                            <li className='mt-1 fs-5 fw-semibold'>Our Hours</li>
                            <li className='fw-semibold'>Mon - Fri: </li>
                            <li>11:00 AM - 10:00 PM</li>
                            <li className='fw-semibold'>Sat - Sun:</li>
                            <li>10:00 AM - 9:00 PM</li>
                        </ul>
                    </div >
                    <div className="col-12 col-lg-4 ps-3 ps-lg-5">
                        <p className="fs-2 mb-0">Get News &amp; Offers</p>
                        <p className="fs-5">Subscribe and Get 15% Off</p>
                        <div className='subscribe d-flex'>
                            <input type="email" name="" id="" />
                            <button type="submit" className='bg-golden px-2 fs-5 fw-semibold'>Subscribe</button>
                        </div>
                        <p className="fs-4 fw-semibold my-3">Follw us:</p>
                        <div>
                            <i className="bi bi-facebook fs-3 mx-2"></i>
                            <i className="bi bi-instagram fs-3 mx-2"></i>
                            <i className="bi bi-twitter fs-3 mx-2"></i>
                            <i className="bi bi-youtube fs-3 mx-2"></i>
                        </div>
                    </div>
                </div > */}
            </div >
        </div >
    )
}

export default Footer
