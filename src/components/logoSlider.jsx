import React from 'react'
import NukhbaPreview from './nukhbapreview.png'
import MoabPreview from './moabpreview.PNG'
import TripPreview from './tripagain.PNG'
import EstellasPreview from './estellaspreview.PNG'
import MetachatPreview from './metachatpreview.PNG'
import CloudbookPreview from './cloudbook.png'

import stakingFocusedToken from './sftpreview.png'
import vertexChain from './vertexpreview.png'
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import { useState } from 'react'
import ResizePlugin from './ResizePlugin'
import MutationPlugin from './mutationPlugin'
const LogoSlider = ({direction}) => {

  const images = [
    { url: "https://logos-world.net/wp-content/uploads/2021/08/Forbes-Logo-700x394.png", link: 'https://nukhba-2.web.app/' },
    { url: "https://logos-world.net/wp-content/uploads/2022/02/CNBC-Logo-500x281.png", link: 'https://moab-386be.web.app/' },
    { url:"https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo-700x394.png", link: 'https://trip-00.web.app/' },
    { url: "https://logos-world.net/wp-content/uploads/2020/11/Fox-News-Channel-Logo-700x394.png", link: 'https://estellas-v1.web.app/' },
    { url: "https://logos-world.net/wp-content/uploads/2022/01/USA-Today-Logo-700x394.png", link: 'https://cloudbo0k.web.app/' },
  
    { url: "https://logos-world.net/wp-content/uploads/2023/02/Standard-Chartered-Logo-500x281.png", link: 'https://www.sft.com.pk/' },
    { url: "https://logos-world.net/wp-content/uploads/2020/08/George-Mason-Patriots-Logo-500x281.png", link: 'https://vertexchain.world/' },
    { url: "https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo-700x394.png", link: 'https://metachatt.web.app/' }
    // "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  ]

  const [details, setDetails] = React.useState(null)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const animation = { duration: 50000, easing: (t) => t }

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(direction=="left"?(s.track.details.abs - 5):(s.track.details.abs + 5), true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(direction=="left"?(s.track.details.abs - 5):(s.track.details.abs + 5), true, animation)
    },
    initial: 0,
    
    slides: {
      origin: 'center',
      perView: window.innerWidth < 750 ? 3 : 6,
spacing:10

    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  }, [ResizePlugin, MutationPlugin])



  // function scaleStyle(idx) {
  //   if (!details) return {}
  //   const slide = details.slides[idx]
  //   const scale_size = 0.7
  //   const scale = 1 - (scale_size - scale_size * slide.portion)
    // return {
  //     transform: `scale(${scale})`,
  //     WebkitTransform: `scale(${scale})`,
  //   }


  // }

  const [containerHeight, setcontainerHeight] = useState(null)

  return (
    <>
      <div id='portfolio' className='mb-5'>
        <div className="text-center py-2">
          {/* <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>RECENT PROJECTS</h2> */}
        </div>
        {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div class="card my-2"style={{border:'1px solid #F4B92D'}}  >
                            
                                <img alt="Failed to Load !" src={NukhbaPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div class="card my-2" style={{borderColor:"#a10302"}}  >
                             
                                <img alt="Failed to Load !" src={MoabPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div class="card my-2"  >
                               
                                <img alt="Failed to Load !" src={TripPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                    </div>
                </div> */}
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, idx) => (
            <a href={src.link} target='_blank' key={idx} style={{ height: containerHeight ? containerHeight : 'auto' }} className="keen-slider__slide zoom-out__slide">
              <div>
                {/* https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://metatech-official.co/${src.url} */}
                <img className='card-img-top rounded-4 ' style={{objectFit:"contain",height:"100%"}} alt="An interactive image for the preview of our one of the most recent portfolio website." onLoad={(e) => console.log(e.target.clientHeight)} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/${src.url}`} />
              </div>
            </a>
          ))}
          {/* {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )} */}
        </div>
    

      </div>
    </>
  )
}



function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default LogoSlider