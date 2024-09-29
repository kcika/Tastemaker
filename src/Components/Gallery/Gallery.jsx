import React from 'react'
import './Gallery.css'
import { assets } from '../../assets/assets'


const Gallery = () => {
    return (
        <div className='marquee w-100 overflow-hidden'>
            <p className="h5 fw-semibold text-center ls-3">GALLERY</p>
            <img src={assets.separator} className='d-block mx-auto mt-2 mb-4' width={80} alt="separator" />
            <p className="fs-1 fw-semibold text-center text-white mb-5">A Taste of Our Atmosphere</p>
            <ul className="marquee-content d-flex h-100 my-4">
                <li className="marquee-box">
                    <img src={assets.marquee1} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee2} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee3} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee4} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee5} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee6} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee7} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee8} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee9} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee10} alt="marquee" />
                </li>
                {/*  */}
                <li className="marquee-box">
                    <img src={assets.marquee1} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee2} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee3} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee4} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee5} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee6} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee7} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee8} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee9} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee10} alt="marquee" />
                </li>
            </ul>
            <ul className="marquee-content d-flex h-100 my-4">
                <li className="marquee-box">
                    <img src={assets.marquee11} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee12} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee13} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee14} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee15} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee16} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee17} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee18} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee19} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee20} alt="marquee" />
                </li>
                {/*  */}
                <li className="marquee-box">
                    <img src={assets.marquee11} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee12} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee13} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee14} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee15} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee16} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee17} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee18} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee19} alt="marquee" />
                </li>
                <li className="marquee-box">
                    <img src={assets.marquee20} alt="marquee" />
                </li>
            </ul>
        </div>
    )
}

export default Gallery
