import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalAmount } = useContext(StoreContext)

    return (
        <div className='containe-fluid black golden'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <p className="fs-3 fw-semibold mb-0">Delivery Information</p>
                        <form action="">
                            <div className='row'>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>First Name</label>
                                    <input type="text" placeholder='First Name' /></div>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>Last Name</label>
                                    <input type="text" placeholder='Last Name' /></div>
                            </div>
                            <div className='row'>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>Email</label>
                                    <input type="email" placeholder='Email Address' /></div>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>Street</label>
                                    <input type="text" placeholder='Street' /></div>
                            </div>
                            <div className='row'>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>City</label>
                                    <input type="text" placeholder='City' /></div>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>State</label>
                                    <input type="text" placeholder='State' /></div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>Zip Code</label>
                                    <input type="text" placeholder='Zip Code' /></div>
                                <div className="col-6">
                                    <label htmlFor="" className='fs-5 fw0semibold'>Country</label>
                                    <input type="text" placeholder='Country' /></div>
                            </div>
                            <div>
                                <label htmlFor="">Phone</label>
                                <input type="tel" maxLength={10} placeholder='Phone' />
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column flex-wrap-reverse">
                        <div className="col-6 cart-total">
                            <p className="h2 fw-semibold my-4">Cart Total</p>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <p className='mb-0 fs-5 fw-semibold'>Sub Total</p>
                                    <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount()}</p>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p className='mb-0 fs-5 fw-semibold'>Delivery Fee</p>
                                    <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount() === 0 ? 0 : 2}</p>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p className='mb-0 fs-5 fw-semibold'>Total</p>
                                    <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
                                </div>
                            </div>
                            <button className='w-100 bg-golden fs-5 fw-semibold py-3 my-3'>Proceed To Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
