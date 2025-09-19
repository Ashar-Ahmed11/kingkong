import React, { useEffect, useState } from 'react'

// "https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_1700,h_900/https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
const VideoCarousal = ({ pageTitle, videoURL }) => {

    const [scale, setScale] = useState(1);
    console.log(window.scrollY);
    const [innerWidth, setinnerWidth] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let newScale = 1 + scrollY / 150; // growth speed
            if (newScale > 1.75) newScale = 1.75; // cap at 2x (25% → 50%)
            setScale(newScale);
        };
        if (window.innerWidth > 0) {
            setinnerWidth(window.innerWidth)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [window.innerWidth]);
    const [videoLoaded, setVideoLoaded] = useState(false)


    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide bg-black">
                {/* https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/q_60/https://res.cloudinary.com/dextrzp2q/video/upload/v1738362738/xp7pv4rw6tjhlosxnysq.mp4 */}
                <div class="carousel-inner" style={{ transform: "skewY(-11deg)" }}>
                    <div style={{ transform: "skewY(11deg)" }} class="carousel-item active">
                        <div style={{ zIndex: '20' }} className='shade'></div>
                        {/* {images.map((e, i) => {

                            return <img src={e.img} class={`d-block w-100 position-${i == counter ? 'relative' : 'absolute'}`} style={{ opacity: i == counter ? '1' : '0', transition: 'all 1s ease' }} alt="..." />

                        })}
                        <img src={window.innerWidth > 750 ? machinelearningimg : machinelearningimgTwo} style={{ top: '0px', opacity: '0.2' }} class="d-block w-100 position-absolute" alt="..." />
                        <div style={{ top: '0px', bottom: '0px', right: '0px', left: '0px' }} class="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column"> */}
                        <div style={{ backgroundColor: "#000000", paddingBottom: window.innerWidth > 750 ? "52.941%" : "133.3%" }} class="d-block w-100 h-100 position-relative" >


                            <video onPlay={() => setVideoLoaded(true)} loop autoPlay muted style={{ top: 0, objectFit: 'cover', height: "100%" }} className={`card-img-top position-absolute`} src={videoURL} alt="" />
                            {/* <img style={{ transition: "1s all ease", top: 0, objectFit: 'cover', height: "100%", opacity: videoLoaded ? 0 : 1 }} className={`card-img-top position-absolute`} src={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1738884168/dhghu9cke1tqwxnzbut4.png"} alt="" /> */}


                        </div>

                        <div style={{ top: '0px', bottom: '0px', right: '0px', left: '0px', zIndex: '30' }} class="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column">

                            <h1 className='display-1 h1 p-0 m-0 proHeading' style={{ fontFamily: "Spooktackler" }} >{pageTitle}</h1>
                            <span className=' fw-normal p-0 h5'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, natus.</span>
                            {/* <span className=' fw-normal p-0 h5'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, natus.</span> */}
                            
                            <div className="d-flex">
                                {/* {images[counter].iconTwo&&<h1 className='display-1 mx-2' ><i class={`fa-brands ${images[counter].iconTwo} fa-2xl`}></i></h1>} */}

                                {/* <h1 className='display-1 mx-2' ><i class={`${images[counter].icon=='fa-android'?'fa-brands':'fa-solid'} ${images[counter].icon} fa-2xl`}></i></h1> */}
                            </div>
                            {/* <p  style={{fontFamily:"Barranco"}}  className='display-5 pt-5'>{images[counter].offer}</p> */}
                        </div>
                    </div>

                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 0 }} className=' d-flex justify-content-center align-items-center'>
                    <video loop autoPlay muted style={{
                        top: 0, objectFit: 'cover', width: `${window.innerWidth<786?(innerWidth * 0.5):(innerWidth * 0.30)}px`, zIndex: 200,
                        // margin: "10vh auto", // so you have space to scroll
                        transform: `scale(${scale})`,
                        transition: "transform 0.05s linear", // smooth update
                    }} className={`card-img-top rounded-4`} src={"https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4"} alt="" />
                </div>
            </div >
        </>
    )
}

export default VideoCarousal