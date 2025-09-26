import React from 'react'
import { Element } from 'react-scroll'

const Prices = () => {
    return (
        <Element name='Prices'>
            <div>
                <h1 className="text-center proHeading py-5 display-4 fw-bold">Prices</h1>
                <div className="container position-relative">
                    <div className="row justify-content-center price-cards">
                        <div className="col-md-4 col-12 py-2">
                            <div className="card rounded-4 border border-dark">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center fw-bold display-5 proHeading">$45</h5>
                                    <p className="card-text text-center">Starter Plan</p>
                                    <a href="#" className="btn proGradient text-light rounded-4 w-100">Choose Plan</a>
                                    <ul className='pt-3 text-center' style={{ listStyle: "none" }}>
                                        <li className='py-1'>Unlimited projects</li>
                                        <li className='py-1'>Dedicated support</li>
                                        <li className='py-1'>Analytics tools</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 py-2">
                            <div className="card proGradient rounded-4 featured">
                                <div className="card-body text-center text-light">
                                    <h5 className="card-title text-center fw-bold display-5">$60</h5>
                                    <p className="card-text text-center">Business Plan</p>
                                    <a href="#" className="btn btn-primary rounded-4 w-100">Choose Plan</a>
                                    <ul className='pt-3 text-center' style={{ listStyle: "none" }}>
                                        <li className='py-1'>Everything in Starter</li>
                                        <li className='py-1'>Team collaboration</li>
                                        <li className='py-1'>Advanced insights</li>
                                        <li className='py-1'>Priority support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 py-2">
                            <div className="card rounded-4 border border-dark">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center fw-bold display-5 proHeading">$79</h5>
                                    <p className="card-text text-center">Enterprise Plan</p>
                                    <a href="#" className="btn proGradient text-light rounded-4 w-100">Choose Plan</a>
                                    <ul className='pt-3 text-center' style={{ listStyle: "none" }}>
                                        <li className='py-1'>All Business features</li>
                                        <li className='py-1'>Unlimited users</li>
                                        <li className='py-1'>Custom integrations</li>
                                        <li className='py-1'>24/7 dedicated support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Prices
