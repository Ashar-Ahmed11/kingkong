import React from 'react'
import LogoSlider from './logoSlider'

const BrandExperience = ({thumbnails3, thumbnails4, thumbnails5}) => {
  return (
    <div className='position-relative'>
      <div className='effect-bg' style={{ zIndex: 10 }}></div>
      <div className="bg-container">
        <h1 className="text-center display-4 proHeading" style={{ fontFamily: "Spooktackler" }}>BRAND EXPERIENCE</h1>
        <LogoSlider direction={"left"} thumbnails={thumbnails3} />
        <LogoSlider direction={"right"} thumbnails={thumbnails4}/>
        <LogoSlider direction={"left"} thumbnails={thumbnails5}/>
      </div>
    </div>
  )
}

export default BrandExperience