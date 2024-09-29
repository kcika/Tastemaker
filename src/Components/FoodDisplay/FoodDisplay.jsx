import React, { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <p className="h1 my-4 text-center">Our Top Dishes</p>
            <div className="row food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
