import React from 'react'
import LogoSlider from './logoSlider'

const BrandExperience = () => {
  return (
    <div className='position-relative'>
      <div className='effect-bg' style={{ zIndex: 10 }}></div>
      <div className="bg-container">
        <h1 className="text-center display-4 proHeading" style={{ fontFamily: "Spooktackler" }}>BRAND EXPERIENCE</h1>
        <LogoSlider direction={"left"} />
        <LogoSlider direction={"right"} />
        <LogoSlider direction={"left"} />
      </div>
    </div>
  )
}

export default BrandExperience