import React, { useEffect, useState } from 'react'
import Projects from './slider';

const SliderVideoCarousal = ({ pageTitle, videoURL }) => {
    const [scale, setScale] = useState(1);
    const [innerWidth, setinnerWidth] = useState(0)
    const [videoLoaded, setVideoLoaded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let newScale = 1 + scrollY / 150;
            if (newScale > 1.75) newScale = 1.75;
            setScale(newScale);
        };
        setinnerWidth(window.innerWidth);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <div style={{ position: "relative" }}>
                <div id="carouselExampleCaptions" className="carousel slide bg-black">
                    <div className="carousel-inner position-relative">
                        <div className="carousel-item active" style={{ position: "relative" }}>
                            <div style={{ zIndex: '20' }} className="simpleShade"></div>

                            <div
                                style={{
                                    backgroundColor: "#000000",
                                    paddingBottom: innerWidth > 750 ? "52.941%" : "133.3%"
                                }}
                                className="d-block w-100 h-100 position-relative"
                            >
                                <video
                                    onPlay={() => setVideoLoaded(true)}
                                    loop
                                    autoPlay
                                    muted
                                    style={{ top: 0, objectFit: 'cover', height: "100%" }}
                                    className="card-img-top position-absolute"
                                    src={videoURL}
                                    alt=""
                                />
                                <img
                                    style={{
                                        transition: "1s all ease",
                                        top: 0,
                                        objectFit: 'cover',
                                        height: "100%",
                                        opacity: videoLoaded ? 0 : 1
                                    }}
                                    className="card-img-top position-absolute"
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1738884168/dhghu9cke1tqwxnzbut4.png"
                                    alt=""
                                />
                            </div>

                            <div
                                style={{
                                    top: '0px',
                                    bottom: '0px',
                                    right: '0px',
                                    left: '0px',
                                    zIndex: '30'
                                }}
                                className="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column"
                            >
                                <h1
                                    className="display-1 h1 p-0 m-0 text-light"
                                    style={{ fontFamily: "Spooktackler" }}
                                >
                                    {pageTitle}
                                </h1>
                                <span className="fw-normal p-5 h5">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta architecto ad. Voluptate, velit! Obcaecati rerum quia repellendus ratione maxime.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    )
}

export default SliderVideoCarousal
