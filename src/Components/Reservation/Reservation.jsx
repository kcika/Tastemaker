import React from 'react'
import './Reservation.css'
const Reservation = () => {
    return (
        <div>
            <div className="row justify-content-center py-3">
                <div className="col reservation">
                    <p className="h1 mb-3 text-center text-white">Make a Reservation</p>
                    <p className="fs-5 text-center text-white">Call us at <span className="golden">(123) 456-7890</span> or Fill out the Reservation form</p>
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="col-md-6">
                            <label htmlFor="" className='fs-5'>Name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Your Name" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='fs-5'>Phone Number</label>
                            <input type="tel" className="form-control" id="validationCustom02" maxLength={10} placeholder="Phone Number" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="" className='fs-5'>Number of Persons</label>
                            <input type="number" className="form-control" id='validationCustom02' placeholder='No. of persons' />
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="" className='fs-5'>Date</label>
                            <input type="date" className="form-control" id="validationCustom02" value="Your Email" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="" className='fs-5'>Time</label>
                            <input type="time" name="time" className="form-control" id="validationCustom02" />
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="">Message</label>
                            <textarea name="mssg" id="" className="form-control" rows={6} placeholder='Any Message'></textarea>
                        </div>
                        <div className="col-12">
                            <button className="py-2 fs-4 w-100 fw-semibold bg-golden" type="submit">Book a Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reservation
