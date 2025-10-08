import React, { useContext, useState } from "react";
import AppContext from "./context/appContext.jsx";
import Projects from "./slider";
import Faq from "./faq";
import Prices from "./prices";
import "../darkTheme.css";
import { useEffect } from "react";

const Agency = () => {
  const { getAgencyPage } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [getAgency, setGetAgency] = useState(null);
  const [form, setForm] = useState({
    droneShots: [],
    colorGrades: [],
    allOverEdits: [],
    longFormEdits: [],
    motionGraphics: [],
    thumbnails1: [],
    thumbnails2: [],
    thumbnails3: [],
    thumbnails4: [],
    thumbnails5: [],
    thumbnails6: [],
    thumbnails7: [],
    thumbnails8: [],
    proveSection: [{ stats: "", youtuberImg: "" }], // Always present
  });

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  useEffect(() => {
    const fetchAgency = async () => {
      try {
        setIsLoading(true);
        const data = await getAgencyPage();
        console.log("agency", data);
        setGetAgency(data);

        if (data) {
          setForm({
            droneShots: data.droneShots || [],
            colorGrades: data.colorGrades || [],
            allOverEdits: data.allOverEdits || [],
            longFormEdits: data.longFormEdits || [],
            motionGraphics: data.motionGraphics || [],
            thumbnails1: data.thumbnails1 || [],
            thumbnails2: data.thumbnails2 || [],
            thumbnails3: data.thumbnails3 || [],
            thumbnails4: data.thumbnails4 || [],
            thumbnails5: data.thumbnails5 || [],
            thumbnails6: data.thumbnails6 || [],
            thumbnails7: data.thumbnails7 || [],
            thumbnails8: data.thumbnails8 || [],
            proveSection:
              data.proveSection && data.proveSection.length > 0
                ? data.proveSection
                : [{ stats: "", youtuberImg: "" }],
          });
        }
      } catch (err) {
        console.error("Error fetching agency:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAgency();
  }, []);

  const bgColor = "rgb(14 9 24/var(--tw-bg-opacity,1))";
  const textColor = "white";
  return (
    <div style={{ backgroundColor: bgColor }} className=" pb-4 agency-dark">
      <h1 className="text-center proHeading display-4 py-4">
        REAL ESTATE REEL VIDEO EDITING
      </h1>
      <h1 className="text-center proHeading display-4 py-4">DRONE SHOTS</h1>

      <div className="container position-relative">
        <div className="effect-bg" style={{ zIndex: 10 }}></div>
        <div className="row bg-container">
          {getAgency?.droneShots?.map((imgSrc, i) => (
            <div data-aos="fade-up" className="col-md-2 col-6" key={i}>
              <img
                src={imgSrc}
                alt=""
                className="py-2 rounded-5 card-img-top"
              />
            </div>
          ))}
          {/* <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/15/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/18/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/19/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/20/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/21/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div> */}
        </div>
      </div>

      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        COLOUR GRADES
      </h1>
      <div className="container">
        <div className="row">
          {getAgency?.colorGrades?.map((imgSrc, i) => (
            <div data-aos="fade-up" className="col-md-2 col-6" key={i}>
              <img
                src={imgSrc}
                alt=""
                className="py-2 rounded-5 card-img-top"
              />
            </div>
          ))}
          {/* <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/15/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/18/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/19/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/20/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/21/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div> */}
        </div>
      </div>

      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        ALLOVER EDIT
      </h1>
      <div className="container position-relative">
        <div className="effect-bg" style={{ zIndex: 10 }}></div>
        <div className="row bg-container">
          {getAgency?.colorGrades?.map((imgSrc, i) => (
            <div data-aos="fade-up" key={i} className="col-md-2 col-6">
              <img
                src={imgSrc}
                alt=""
                className="py-2 rounded-5 card-img-top"
              />
            </div>
          ))}
          {/* <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/15/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/18/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/19/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/20/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div>
    <div data-aos="fade-up" className="col-md-2 col-6">
      <img src="https://picsum.photos/id/21/600/1000" alt="" className="py-2 rounded-5 card-img-top" />
    </div> */}
        </div>
      </div>

      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        LONG FORM EDIT VIDEOS
      </h1>
      <div className="container">
        {getAgency?.longFormEdits?.length >= 2 && (
          <div className="row">
            <div data-aos="fade-up" className="col-md-5 col-12">
              <img
                src={getAgency.longFormEdits[0]}
                alt="Before icons"
                className="py-2 rounded-5 card-img-top"
              />
            </div>

            <div data-aos="fade-up" className="col-md-2 col-12 d-md-block">
              <div className="d-flex justify-content-center align-items-center h-100 py-2">
                <i
                  className="fa fa-usd fa-5x proHeading"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-usd fa-5x proHeading"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-usd fa-5x proHeading"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div data-aos="fade-up" className="col-md-5 col-12">
              <img
                src={getAgency.longFormEdits[1]}
                alt="After icons"
                className="py-2 rounded-5 card-img-top"
              />
            </div>
          </div>
        )}
      </div>
      {/* <h1 className="text-center proHeading display-4 py-4" style={{ fontFamily: "Spooktackler" }}>DRONE SHOTS</h1>
            <div className="container position-relative">
                <div className='effect-bg' style={{ zIndex: 10 }}></div>
                
               {getAgency?.longFormEdits?.length >= 2 && ( <div className="row bg-container">
                    <div data-aos="fade-up" className="col-md-5 col-12">
                        <img src="https://picsum.photos/id/13/1000/600" alt="" className="py-2 rounded-5 card-img-top" />
                    </div>
                    <div data-aos="fade-up" className="col-md-2 col-12 d-md-block">
                        <div className="d-flex justify-content-center align-items-center h-100 py-2">
                            <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                            <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                            <i class="fa fa-usd  fa-5x proHeading" aria-hidden="true"></i>

                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-5 col-12">
                        <img src="https://picsum.photos/id/12/1000/600" alt="" className="py-2 rounded-5 card-img-top" />
                    </div>
                </div>)}
            </div>
            <h1 className="text-center proHeading display-4 py-4" style={{ fontFamily: "Spooktackler" }}>COLOUR GRADES</h1>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-up" className="col-md-5 col-12">
                        <img src="https://picsum.photos/id/13/1000/600" alt="" className="py-2 rounded-5 card-img-top" />
                    </div>
                    <div data-aos="fade-up" className="col-md-2 col-12 d-md-block">
                        <div className="d-flex justify-content-center align-items-center h-100 py-2">
                            <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                            <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                            <i class="fa fa-usd  fa-5x proHeading" aria-hidden="true"></i>

                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-5 col-12">
                        <img src="https://picsum.photos/id/12/1000/600" alt="" className="py-2 rounded-5 card-img-top" />
                    </div>
                </div>
            </div> */}
      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        MOTION GRAPHICS
      </h1>
      <div className="container position-relative">
        <div className="effect-bg" style={{ zIndex: 10 }}></div>
        {getAgency?.motionGraphics?.length >= 2 && (
          <div className="row bg-container">
            <div data-aos="fade-up" className="col-md-5 col-12">
              <img
                src={getAgency.motionGraphics[0]}
                alt=""
                className="py-2 rounded-5 card-img-top"
              />
            </div>
            <div data-aos="fade-up" className="col-md-2 col-12 d-md-block">
              <div className="d-flex justify-content-center align-items-center h-100 py-2">
                <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                <i class="fa fa-usd fa-5x proHeading" aria-hidden="true"></i>
                <i class="fa fa-usd  fa-5x proHeading" aria-hidden="true"></i>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-5 col-12">
              <img
                src={getAgency.motionGraphics[1]}
                alt=""
                className="py-2 rounded-5 card-img-top"
              />
            </div>
          </div>
        )}
      </div>

      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        THUMBNAILS
      </h1>
      {getAgency && (
        <>
          <Projects direction={"left"} thumbnails={getAgency?.thumbnails1} />
          <Projects direction={"right"} thumbnails={getAgency?.thumbnails2} />
          <Projects direction={"left"} thumbnails={getAgency?.thumbnails3} />
          <Projects direction={"right"} thumbnails={getAgency?.thumbnails4} />
          <Projects direction={"left"} thumbnails={getAgency?.thumbnails5} />
          <Projects direction={"right"} thumbnails={getAgency?.thumbnails6} />
        </>
      )}

      <h1
        className="text-center proHeading display-4 py-4"
        style={{ fontFamily: "Spooktackler" }}
      >
        PROVE
      </h1>
      <div className="position-relative">
        <div className="effect-bg" style={{ zIndex: 10 }}></div>

        <div className="bg-container">
          {" "}
         { getAgency?.proveSection.map((prove, idx)=>(<div className="row py-2">
            {" "}
            <div className="col-12 col-md-8 d-flex justify-content-center  order-2 order-md-1 py-2">
              {" "}
              <img
                // src="https://marketingartfully.com/wp-content/uploads/2022/01/2021-youtube-stats-1024x583.jpg"
                src={prove.stats}
                alt=""
                className="card-img-top w-75 rounded-4"
              />{" "}
            </div>{" "}
            <div className="col-12 col-md-4 order-1 order-md-2 justify-content-md-start justify-content-center d-flex align-items-center">
              {" "}
              <div className="w-25 d-md-none">
                {" "}
                <img
                  src={prove.youtuberImg}
                  alt=""
                  className="card-img-top w-100 rounded-5 rounded-circle"
                />{" "}
              </div>{" "}
              <div className="w-50 d-none d-md-block">
                {" "}
                <img
                  src={prove.youtuberImg}
                  alt=""
                  className="card-img-top w-100 rounded-5 rounded-circle"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>))}
        </div>
      </div>
      <Prices />
      <div className="position-relative">
        <div className="effect-bg" style={{ zIndex: 10 }}></div>
        <div className="bg-container">
          <Faq />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-2 col-4">
            <div className="d-flex justify-content-center flex-column">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2994"
                style={{ borderRadius: "100%", width: "100px" }}
                alt=""
              />
              <p className="fw-bold">Adam Jac</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary rounded-4 fw-bold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Agency;
