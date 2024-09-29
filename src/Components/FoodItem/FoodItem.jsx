import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({ id, name, price, description, image }) => {


    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


    return (
        <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="foodItem rounded-4">
                <div className="img-container">
                    <img src={image} className='rounded-top-4' width={"100%"} alt="FoodImg" />
                </div>
                <div className="food-info px-3">
                    <p className="name fs-4 fw-semibold mb-0">{name}</p>
                    <p className="desc text-white mb-0">{description}</p>
                </div>
                <div className='px-3 py-2 d-flex justify-content-between align-items-center'>
                    <p className="price fs-4 fw-semibold mb-0">${price}</p>
                    {!cartItems[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} width={40} alt='' /> :
                        <div className='food-item-counter d-flex align-items-center'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} width={40} alt="removeIcon" />
                            <p className='px-3 mb-0 fs-5 fw-semibold'>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} width={40} alt="addIcon" />
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}


export default FoodItem
