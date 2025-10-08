import React from 'react';
// import logo from './LOGO.png'
const FullScreenLoader = () => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark"
      style={{ zIndex: 9999 }}
    >
      <img
        src="https://ahmadesigns.com/_next/image?url=%2Fprofile-pic.jpeg&w=640&q=75"
        alt="Loading..."
        className="img-fluid mb-4 rounded-circle"
        style={{ maxWidth: '200px' }}
      />
      <div className="spinner-border " role="status" style={{color:"#3c1ac6ff"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default FullScreenLoader;
