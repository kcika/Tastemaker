import React from 'react'
import { Helmet } from 'react-helmet'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tastemaker | Create Account</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='container-fluid black p-0 golden'>
                <div className="container py-5">
                    <div className="row py-5 d-flex align-items-center justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="login-section py-5">
                                <p className="fs-1 fw-semibold text-center">Create Account</p>
                                <form action="">
                                    <div className="my-2">
                                        <label for="fname" className="fw-semibold">First Name *</label><br />
                                        <input type="text" name="fname" id="fname" className="fs-18" required />
                                    </div>
                                    <div className="my-2">
                                        <label for="lname" className="fw-semibold">Last Name *</label><br />
                                        <input type="text" name="lname" id="lname" className="fs-18" required />
                                    </div>
                                    <div className="my-2">
                                        <label for="email" className="fw-semibold">Email Address *</label><br />
                                        <input type="email" name="email" id="email" className="fs-18" required />
                                    </div>
                                    <div>
                                        <label for="password" className="fw-semibold">Enter Password *</label><br />
                                        <div className="password d-flex justify-between">
                                            <input type="password" name="password" id="password" className="fs-18" required />
                                            <i className="fa-solid fa-eye-slash toggle-icon"></i>
                                        </div>
                                    </div>
                                    {/* <p className="text-center m-30"><NavLink href="" className="fs-5  text-decoration-none golden fs-5 fw-semibold">Forgot Password?</NavLink></p> */}
                                    <button type="submit" className="fs-5 fw-semibold bg-golden px-4 py-2 w-100 my-3 rounded-pill"> CREATE ACCOUNT</button>
                                    <p className="my-4 text-center fs-5">Already have an account?
                                        <NavLink to="/login" className="text-center text-decoration-none golden fs-5 fw-semibold"> LOGIN</NavLink></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <img src={assets.signupimg} width={"100%"} height={700} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
