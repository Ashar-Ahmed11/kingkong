import React from 'react'
import { Element } from 'react-scroll'
const VideoEditing = () => {
    return (
        <Element name='Video'>
            <div className="upGradient">
                <div className="container">
                    <h1 className="text-center py-5 fw-bold display-4 text-light">Video Editing</h1>
                    <video className='card-img-top' controls loop muted autoPlay src='https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://res.cloudinary.com/dextrzp2q/video/upload/v1757767869/video_lsui1q.mp4' />
                </div>
            </div>
        </Element>
    )
}

export default VideoEditing