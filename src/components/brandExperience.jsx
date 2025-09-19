import React from 'react'
import LogoSlider from './logoSlider'

const BrandExperience = () => {
  return (
    <div>
         <h1 className="text-center display-4 proHeading" style={{fontFamily:"Spooktackler"}}>BRAND EXPERIENCE</h1>
         <LogoSlider direction={"left"}/>
         <LogoSlider direction={"right"}/>
         <LogoSlider direction={"left"}/>
    </div>
  )
}

export default BrandExperience