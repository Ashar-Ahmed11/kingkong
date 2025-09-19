import React, { useContext } from 'react'
import NavbarLogo from './navbar-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import AppContext from './context/appContext'
const Navbar = () => {
  const [showdesc, setshowdesc] = useState('nav-desc')
  useEffect(() => {
    const link = document.getElementsByClassName('nav-link')
    const links = [...link]
    links.map((e) => {
      e.addEventListener('click', () => {
        setshowdesc('nav-desc')
      })
    })
  }, [])

  const { navbarRef } = useContext(AppContext)
  return (
    <nav style={{ backgroundColor: "rgba(0,0,0,0)" }} class="p-0 navbar  fixed-top navbar-expand-lg d-flex flex-column">

      <div style={{ backgroundColor: 'rgb(0 0 0 / 70%)', backdropFilter: 'blur(25px)'}} class="container-fluid py-2 px-4 d-flex justify-content-between ">

        <div className='d-lg-block d-none d-lg-flex align-items-center'>
          <i class="fa fa-phone text-light" aria-hidden="true"></i>

          <span className="text-light fw-bold px-2">+923374472732</span>
        </div>
        <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="navbar-brand text-center fw-bold" style={{ color: "white" }} to="/">
          {/* <img width={'40px'} src={NavbarLogo} alt="Metatech Official Logo" /> */}
          KING KONG
        </Link>
        <div>
          <a className=' d-block' onClick={() => navbarRef.current.click()} >
            <i class="fa fa-bars fa-2x" style={{ color: "white" }}></i>
          </a>
        </div>



      </div>
      

    </nav>
  )
}

export default Navbar