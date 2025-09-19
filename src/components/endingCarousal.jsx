import React from 'react'

const EndingCarousal = () => {
    return (
        <div className='bg-black overflow-hidden' style={{ height: "100vh", position: "relative" }}>
            <div className='animateIcon' style={{ position: "absolute", top: "10%", left: 0 }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png" alt="" />
            </div>
            <div className='animateIcon' style={{ position: "absolute", bottom: "10%", left: 0 }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-700x394.png" alt="" />
            </div>
            <div className='animateIcon d-flex justify-content-center align-items-center' style={{ position: "absolute", top: "50%", right: 0 }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-700x394.png" alt="" />
            </div>
            <div className='animateIcon d-flex justify-content-center align-items-center' style={{ position: "absolute", top: "30%", right: "20%" }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/04/TikTok-Logo-700x394.png" alt="" />
            </div>
            <div className='animateIcon d-flex justify-content-center align-items-center' style={{ position: "absolute", top: "40%", left: "20%" }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo-700x394.png" alt="" />
            </div>

            <div className='animateIcon d-flex justify-content-end' style={{ position: "absolute", top: "10%", right: 0 }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-500x281.png" alt="" />
            </div>
            <div className='animateIcon d-flex justify-content-end' style={{ position: "absolute", bottom: "10%", right: 0 }}>
                <img className='card-img-top p-2' style={{ width: window.innerWidth < 768 ? "25%" : "10%" }} src="https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo-700x394.png" alt="" />
            </div>

            <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column' style={{ position: "absolute", top: 0 }}>
                <div className="container px-3">
                    <h1 className="display-2 text-light text-center" style={{ fontFamily: "Spooktackler" }}>I GUESS WHAT WE'RE TRYING TO SAY IS THAT YOU SHOULD PRESS THE DAMN BUTTON</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success w-100  rounded-3" ><span style={{ fontFamily: "Spooktackler", fontSize: 30 }}>HIT THE DAMN BUTTON</span></button>
                 
                </div>
            </div>
            
        </div>
    )
}

export default EndingCarousal