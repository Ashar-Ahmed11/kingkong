import React from 'react'
import { Element } from 'react-scroll'
import { useKeenSlider } from 'keen-slider/react.js'
const Reviews = () => {
    const animation = { duration: 5000, easing: (t) => t }
    const color = "#ffd054"
    const [testimonialSliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            origin: "center",
            perView: window.innerWidth < 768 ? 1 : 2.5,

        },

        created(s) {
            s.moveToIdx(1, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 1, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 1, true, animation)
        },
    })
    return (
        <>
            <Element name="Reviews">
                <div className=' pb-3 upGradient'>
                    <h1 className="text-center text-light py-5 display-4 fw-bold">Reviews</h1>

                    {/* <p className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>Our Testimonials</p> */}
                    <div ref={testimonialSliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background: 'none' }} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background:"none"}} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background:"none"}} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background:"none"}} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background:"none"}} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide">
                            <div style={{ background:"none"}} className="card h-100 border-0 shadow-0">
                                <div className="card-body text-light">
                                    <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut nihil suscipit et modi reprehenderit temporibus fuga sequi rem. Laboriosam libero aperiam officiis magni deserunt culpa odio consequuntur soluta praesentium. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                    <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                                        <div className="ratings">
                                            {/* <span className="mx-1">4.5</span> */}
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            <i class="fa fa-star rating-color"></i>
                                            {/* <i class="fa fa-star"></i> */}
                                        </div>
                                        <span style={{ color: color }}>
                                            Shahid Khan
                                            <span style={{ fontSize: "15px" }} className="text-light d-block">Business Man</span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Element>
        </>
    )
}

export default Reviews