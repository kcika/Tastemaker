import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './Delivery.css'
import { assets } from '../../assets/assets'
import { menu_list } from '../../assets/assets'
import FoodDisplay from '../FoodDisplay/FoodDisplay'

const Delivery = () => {
    const [category, setCategory] = useState("All");

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tastemaker | Order Online</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className='orderHero position-relative'>
                    <div className="overlay"></div>
                    <div className="position-relative top-50 start-50 translate-middle text-center">
                        <p className="fs-1 fw-semibold golden mb-0">Order Online</p>
                        <img src={assets.separator} className='my-3' width={100} alt="separator" />
                        <p className='fs-4 fw-semibold text-white'>Enjoy our delicious meals from the comfort of your home order online now for quick and easy delivery!</p>
                    </div>
                </div>
                <div className="container-fluid py-5 black">
                    <div className="container">
                        <div className='p-3 golden'>
                            <div className="row">
                                <p className="h1 mb-5 text-center">Explore Our Menu</p>
                                <div className="menu_list d-flex justify-content-between text-center overflow-x-scroll">
                                    {menu_list.map((item, index) => {
                                        return (
                                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="menu_item mx-2">
                                                < img className={category === item.menu_name ? "active" : ""} src={item.menu_img} alt="image" />
                                                <p className='fs-4 fw-semibold mt-3 mb-0'>{item.menu_name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* food display */}
                            <FoodDisplay category={category} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Delivery
