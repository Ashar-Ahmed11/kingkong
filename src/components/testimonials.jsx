import React from 'react'
import TestimonialCard from './testimonailcard'

const Testimonials = () => {
    return (
        <div style={{position:"relative",zIndex:20}}>
            <h1 className="text-center display-4 proHeading" style={{ fontFamily: "Spooktackler", color: "#fff" }}>
                TESTIMONIALS
            </h1>
            <div className="container d-flex justify-content-center ">

                <div className="row">
                    <div className="col-md-6 col-12 py-3">
                        <TestimonialCard/>
                    </div>
                    <div className="col-md-6 col-12 py-3">
                        <TestimonialCard/>
                    </div>
                    <div className="col-md-6 col-12 py-3">
                        <TestimonialCard/>
                    </div>
                    <div className="col-md-6 col-12 py-3">
                        <TestimonialCard/>
                    </div>
                </div>
            </div></div>
    )
}

export default Testimonials