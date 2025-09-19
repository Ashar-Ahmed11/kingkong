import React from 'react'
import { Element } from 'react-scroll'
const Prices = () => {
    return (
        <Element name='Prices'>
            <div>
                <h1 className="text-center text-light py-5 display-4 fw-bold">Prices</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 py-2">
                            <div class="card bg-black border border-light rounded-4" >
                                {/* <img src="..." class="card-img-top" alt="..."/> */}
                                <div class="card-body text-light">
                                    <h5 class="card-title fw-bold display-5">$20</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" class="btn btn-outline-light rounded-4 w-100">Go somewhere</a>
                                    <ul className='pt-3' style={{ listStyle: "none" }}>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 py-2">
                            <div class="card bg-light border border-dark rounded-4" >
                                {/* <img src="..." class="card-img-top" alt="..."/> */}
                                <div class="card-body text-dark">
                                    <h5 class="card-title fw-bold display-5">$50</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" class="btn btn-dark rounded-4 w-100">Go somewhere</a>

                                    <ul className='pt-3' style={{ listStyle: "none" }}>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 py-2">
                            <div class="card bg-black border border-light rounded-4" >
                                {/* <img src="..." class="card-img-top" alt="..."/> */}
                                <div class="card-body text-light">
                                    <h5 class="card-title fw-bold display-5">$100</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" class="btn btn-outline-light rounded-4  w-100">Go somewhere</a>
                                    <ul className='pt-3' style={{ listStyle: "none" }}>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
                                        <li className='py-1'>Lorem ipsum dolor sit amet.</li>
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