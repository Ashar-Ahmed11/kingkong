import React from 'react'

const AgencyCard = () => {
    return (
        <div className="card shadow rounded-4 my-2"  data-aos="fade-right">
            <div className='w-100 d-flex justify-content-center py-4'>
                <i class="fa fa-home proHeading" style={{ fontSize: 150 }} aria-hidden="true"></i>

            </div>
            <div className="card-body text-center">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, libero!</span>
                <h1 className='display-2 proHeading' style={{ fontFamily: "Spooktackler" }}>AGENCY</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, explicabo.
                    Accusantium, sapiente rem amet voluptatum iste sed. Voluptas ullam porro,
                    saepe veniam alias quia temporibus, sapiente earum sit totam error.
                </p>
                <button className="btn btn-success w-100 rounded-4"><h3>GET STARTED</h3></button>
                <div className='d-flex justify-content-center align-items-center py-3'>
                    <div className='align-items-center justify-content-center' style={{ display: "flex" }}>
                        <i className="fa fa-star text-warning fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-star text-warning fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-star text-warning fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-star text-warning fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-star text-warning fa-2x" aria-hidden="true"></i>
                    </div>
                    <span className='px-2'>4.5 Out of 704 Reviews</span>
                </div>
            </div>
        </div>
    )
}

export default AgencyCard
