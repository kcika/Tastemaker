import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import '../../index.css'
import { StoreContext } from '../../context/StoreContext'


const Header = () => {
    // bg change
    const [bgChange, setBgChange] = useState(false); //for bg change
    const [isVisible, setIsVisible] = useState(true); //for header visibility
    const [lastScrollY, setLastScrollY] = useState(0) //to scroll last position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Step 1: Change background color if scrolled more than 50px
            if (currentScrollY > 0) {
                setBgChange(true);
            } else {
                setBgChange(false)
            }

            // Step 2: Hide the header on scroll down and show it on scroll up
            if (currentScrollY > lastScrollY) {
                // Scrolling down, hide the header
                setIsVisible(false);
            } else {
                // Scrolling up, show the header
                setIsVisible(true)
            }

            // Update lastScrollY for next scroll event
            setLastScrollY(currentScrollY);
        };


        // add event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [lastScrollY]);




    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    };


    const { getTotalAmount } = useContext(StoreContext);

    return (
        <div className={`header ${bgChange ? "active" : ""} ${isVisible ? "visible" : "hide"}`}>
            <header className='w-100 px-3 px-md-5'>
                <nav className='d-flex justify-content-between align-items-center px-md-5'>
                    <Link to="/" className='h3 logo font-semibold gold text-decoration-none'>Tastemaker</Link>
                    <ul className={isOpen ? "navLinks active" : "navLinks"}>
                        <div className='toggle-cancel' onClick={toggleMenu}>
                            <i class="bi bi-x-circle golden fs-4"></i>
                        </div>
                        <li>
                            <NavLink to="" onClick={toggleMenu} className={({ isActive }) => `nav-link hover-underline block ls-3 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `nav-link hover-underline block ls-3 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" onClick={toggleMenu} className={({ isActive }) => `nav-link hover-underline block ls-3 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `nav-link hover-underline block ls-3 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delivery" onClick={toggleMenu} className={({ isActive }) => `nav-link hover-underline block ls-3 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>ORDER ONLINE</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center golden'>
                        <div className='mx-2 mx-md-3' onClick={toggleSearch}>
                            <i className="bi bi-search fs-5"></i>
                        </div>
                        <NavLink to="/cart" className='mx-2 mx-md-3 relative'>
                            <i className="bi bi-bag fs-5 golden"></i>
                            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
                        </NavLink>
                        <NavLink to='/login' className='mx-2 mx-md-3'><i class="bi bi-person golden fs-4"></i></NavLink>
                        <div className='hamburger fs-3 ms-2' onClick={toggleMenu}>
                            <i class="bi bi-list"></i>
                        </div>
                    </div>
                </nav>
                <div className={searchOpen ? "searchbox active" : "searchbox container-fluid"}>
                    <div className='container searchCont d-flex align-items-center'>
                        <div className='searchCancel' onClick={toggleSearch}>
                            <i class="bi bi-x-circle text-white fs-2"></i>
                        </div>
                        <div className='d-flex align-items-center w-100'>
                            <i className="bi bi-search fs-3 text-white me-3"></i>
                            <input type="search" className='w-100 text-white fs-4' name="search" id="search" placeholder='Search ...' />
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
