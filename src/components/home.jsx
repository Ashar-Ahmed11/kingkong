import React, { useContext, useRef } from 'react'
import Slider from './slider.jsx'
import Samples from './samples'
import Thumbnails from './thumbnails'
import Prices from './prices'
import Faq from './faq'
import { useState } from 'react'
import VideoEditing from './videoEditing.jsx'
import Reviews from './reviews.jsx'
import { useEffect } from 'react'
import VideoCarousal from './videoCarousal.jsx'
import LogoSlider from './logoSlider.jsx'
import AgencyCard from './agencyCard.jsx'
import SiderVideoCarousal from './sliderVideoCarousal.jsx'
import SliderVideoCarousal from './sliderVideoCarousal.jsx'
import Projects from './slider.jsx'
import VideoSlider from './videoSlider.jsx'
import EndingCarousal from './endingCarousal.jsx'
import BrandExperience from './brandExperience.jsx'
import AppContext from './context/appContext.jsx'
const Home = () => {
    const ref = useRef()
    const [theRef, setTheRef] = useState(null)
    useEffect(() => {
        setTheRef(ref);

    }, [ref])



    // console.log(ref);

    return (
        <>
            <VideoCarousal pageTitle={"REAL ESTATE"} videoURL={`https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4`} />


            <div className="container-fluid" style={{ marginTop: -theRef?.current?.clientHeight }} ref={ref}>
                <div className="row" style={{ transform: "skewY(-11deg)", zIndex: 100, position: "relative" }}>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div className="col-2   p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>


                </div>
            </div>


            <div className='' style={{ marginTop: window.innerWidth > 768 ? (theRef?.current?.clientHeight) : (theRef?.current?.clientHeight * 0.25) }} >
                <LogoSlider direction={"left"} />
                <div className="pt-5">
                    <h1 className="text-center">More Time With Your Family</h1>
                    <h1 className="text-center fw-normal">More business-class flights with your spouse to places that result in more sand between your toes.</h1>
                    <h1 className="text-center fw-normal">It all starts by “choosing your own adventure” below…</h1>
                </div>

                {/* <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in molestiae quaerat quae aut earum eaque non libero aperiam fugit.</h1> */}
            </div>



            <div className="container-fluid">
                <div className="row" style={{ transform: "skewY(-11deg)", zIndex: 100, position: "relative", marginTop: window.innerWidth > 768 ? (theRef?.current?.clientHeight) : (theRef?.current?.clientHeight * 0.25) }}>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-right" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div className="col-2   p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2  p-4"></div>

                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2  p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>
                    <div data-aos="fade-left" style={{ backgroundColor: "#326AF0" }} className="col-2 p-4"></div>


                </div>
            </div>
            <div style={{ marginTop: window.innerWidth > 768 ? (theRef?.current?.clientHeight) : (theRef?.current?.clientHeight * 0.25) }} >
                {/* <LogoSlider direction={"left"} /> */}
                <div className="py-5">
                    <h1 className="text-center proHeading display-4 pb-5" style={{ fontFamily: "Spooktackler" }}>PROOF!</h1>
                    <img src="https://kingkong.co/wp-content/uploads/2021/05/facebook-ads-more-proof-1920x5371.jpg" className='card-img-top' alt="" />
                </div>
                <div className="py-5">
                    <h1 className="text-center proHeading display-4 pb-5" style={{ fontFamily: "Spooktackler" }}>OUR OFFERING</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <AgencyCard />

                            </div>
                            <div className="col-md-6 col-12">
                                <AgencyCard />

                            </div>
                        </div>

                    </div>

                </div>
                <div className="py-5">
                    <LogoSlider />
                </div>
                {/* <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in molestiae quaerat quae aut earum eaque non libero aperiam fugit.</h1> */}
            </div>
            <div className="bottomGradient">
                <div className='container'>
                    <h1 className="text-center fw-thin">Lorem ipsum dolor sit amet.</h1>
                    <div className="w-100 d-flex justify-content-center text-center">
                        <h1 className="display-2 proHeading fw-bold text-center w-75">THE POWER IS IN THE MARKETING</h1>
                    </div>
                    <div className="text-center">
                        <p className="display-6 fw-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque error ut maiores recusandae praesentium. Nisi iusto quidem dolorum fuga illo?</p>
                        <p className="display-6 fw-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque error ut maiores recusandae praesentium. Nisi iusto quidem dolorum fuga illo?</p>
                        <p className="display-6 fw-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque error ut maiores recusandae praesentium. Nisi iusto quidem dolorum fuga illo?</p>
                        <p className="display-6 fw-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque error ut maiores recusandae praesentium. Nisi iusto quidem dolorum fuga illo?</p>
                    </div>
                    <div className="d-flex justify-content-center py-5">
                        <video loop autoPlay muted style={{

                        }} className={`card-img-top rounded-4 w-75 d-md-block d-none`} src={"https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4"} alt="" />
                        <video loop autoPlay muted style={{

                        }} className={`card-img-top rounded-4 d-block d-md-none`} src={"https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4"} alt="" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success w-50 d-none d-md-block rounded-3" ><span style={{ fontFamily: "Spooktackler", fontSize: 30 }}>HIT THE DAMN BUTTON</span></button>
                        <button className="btn btn-success w-100 d-block d-md-none rounded-3" ><span style={{ fontFamily: "Spooktackler", fontSize: 30 }}>HIT THE DAMN BUTTON</span></button>
                    </div>
                </div>
            </div>

            <div className='py-5 topGradient'>
                <div style={{ position: "relative" }}  >

                    <SliderVideoCarousal pageTitle={"REAL ESTATE"} videoURL={`https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4`} />
                    <div style={{ position: "absolute", bottom: 0 }} className='h-100 w-100'>

                        <VideoSlider />
                    </div>
                </div>
            </div>
            <BrandExperience />
            <Faq />

            <EndingCarousal />

            {/* <div style={{ position: "relative", backgroundColor: "black" }}>
                <div style={{ zIndex: 500 }} className="shade"></div>
                <div className='justify-content-center align-items-center d-flex' style={{ position: "absolute", height: "100%", width: "100%", zIndex: 600, pointerEvents: "none" }}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className="text-light text-center display-3 fw-bold">We Make the</h1>
                        <h1 className="text-light text-center  display-3 fw-bold">Best.</h1>
                        <h1 className="text-light text-center  display-5 ">Make history with us</h1>
                        <button className="btn btn-outline-light text-light rounded-4 my-2"><h3 className='m-0 p-4'>Contact Us</h3></button>
                    </div>
                </div>
                <Slider direction={"left"} />
                <Slider />
                <Slider direction={"left"} />

            </div> */}
            {/* <div className="bg-black">
                <Samples />
                <Reviews />
                <Thumbnails />
                <VideoEditing />
                <Prices />
                <Faq />

            </div> */}
        </>
    )
}

export default Home