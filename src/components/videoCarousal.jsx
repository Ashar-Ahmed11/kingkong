import React, { useEffect, useState } from 'react'

// "https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_1700,h_900/https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
const VideoCarousal = ({ pageTitle, videoURL1, videoURL2 }) => {

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


              <video onPlay={() => setVideoLoaded(true)} loop autoPlay muted style={{ top: 0, objectFit: 'cover', height: "100%" }} className={`card-img-top position-absolute`} src={videoURL1} alt="" />
              {/* <img style={{ transition: "1s all ease", top: 0, objectFit: 'cover', height: "100%", opacity: videoLoaded ? 0 : 1 }} className={`card-img-top position-absolute`} src={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1738884168/dhghu9cke1tqwxnzbut4.png"} alt="" /> */}


            </div>

            <div
              style={{ top: '0', bottom: '0', right: '0', left: '0', zIndex: 30,paddingBottom:"20%" }}
              className="carousel-caption h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center"
            >
              <h1 className="display-1 h1 m-0 proHeading" style={{ fontFamily: "Spooktackler" }}>
                {pageTitle}
              </h1>
              <span className="fw-normal h5 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, natus.
              </span>

              {/* Email input + Button (Responsive) */}
              <div
                className="mb-3 w-100 text-center"
                style={{
                  position: "relative",
                  zIndex: 9999, // ✅ sits above the ribbons
                }}
              >
                <div
                  className="position-relative rounded-pill p-1 shadow-lg mx-auto d-block d-md-none"
                  style={{
                    width: "90%",
                    maxWidth: "350px",
                    position: "relative",
                    zIndex: 9999,
                  }}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control border-0 rounded-pill ps-4 pe-5 py-3"
                      placeholder="Enter your email..."
                    />
                    <button
                      type="button"
                      className="btn btn-warning position-absolute end-0 top-50 translate-middle-y me-2 rounded-pill fw-bold px-4 py-2 arrow-btn"
                      style={{
                        backgroundColor: "#c8ff00",
                        border: "none",
                        zIndex: 10000,
                      }}
                    >
                      Doit <span className="ms-1 arrow-anim" style={{ fontSize: "18px" }}>→</span>
                    </button>
                  </div>
                </div>





                {/* ✅ Desktop View */}
                <div className="position-relative rounded-pill p-1 shadow-lg mx-auto d-none d-md-block" style={{ width: "50%", maxWidth: "600px" }}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control border-0 rounded-pill ps-4 pe-5 py-3"
                      placeholder="Enter your email..."
                    />
                    <button
                      type="button"
                      className="btn btn-warning position-absolute end-0 top-50 translate-middle-y me-2 rounded-pill fw-bold px-4 py-2 arrow-btn"
                      style={{ backgroundColor: '#c8ff00', border: 'none', zIndex: 10 }}
                    >
                      Doit <span className="ms-1 arrow-anim" style={{ fontSize: "20px" }}>→</span>
                    </button>
                  </div>
                </div>
              </div>


              {/* Arrow animation + hover effect */}
              <style>{`
    @keyframes arrowSlide {
      0% { opacity: 0; transform: translateX(-10px); }
      10% { opacity: 1; transform: translateX(0); }
      80% { opacity: 1; transform: translateX(12px); }
      100% { opacity: 0; transform: translateX(25px); }
    }

    .arrow-anim {
      display: inline-block;
      animation: arrowSlide 1.5s linear infinite;
    }

    .arrow-btn:hover {
      filter: brightness(1.05);
      transform: scale(1.02);
      transition: all 0.2s ease;
    }
  `}</style>
            </div>

          </div>

        </div>
        <div style={{ position: "absolute", width: "100%", bottom: 0 }} className=' d-flex justify-content-center align-items-center'>
          <video loop autoPlay muted style={{
            top: 0, objectFit: 'cover', width: `${window.innerWidth < 786 ? (innerWidth * 0.5) : (innerWidth * 0.30)}px`, zIndex: 200,
            // margin: "10vh auto", // so you have space to scroll
            transform: `scale(${scale})`,
            transition: "transform 0.05s linear", // smooth update
            // }} className={`card-img-top rounded-4`} src={"https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4"} alt="" />
          }} className={`card-img-top rounded-4`} src={videoURL2} alt="" />
        </div>
      </div >
    </>
  )
}

export default VideoCarousal