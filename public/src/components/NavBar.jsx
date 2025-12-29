import React, { useState } from 'react'
import ButtonDisplay from './ButtonDisplay'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMenorah } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ isHire, handleHireClick }) {

  const [fix, setFix] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    "Home",
    "Services",
    "Projects",
    "About",
    "Contact"
  ]

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  function scrollFix() {
    if (window.scrollY >= 20) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", scrollFix)

  return (
    <>
      <div className={`flex items-center justify-around px-6 py-4 fixed z-20 w-full
      text-sm 
      vsm:w-full vsm:justify-between
      md:justify-between
      ${fix ? 'bg-transparent backdrop-blur-md text-white' : 'bg-white'}`}>
        <h1 className={`spartan text-4xl font-bold`}>KRITAN<span className='text-reddish-color font-extrabold'>.</span></h1>

        <div className="menu">
          {menuOpen ?
            <div className={`w-2/4 flex flex-col items-center gap-5 fixed top-0 right-0 vsm:px-0 py-4 rounded-md bg-black/40 backdrop-saturate-350`}>

              <div className='w-full absolute top-2 right-2 flex justify-end cursor-pointer'>
                {/* <h1 className='spartan text-4xl font-bold'>KRITAN<span className='text-reddish-color font-extrabold'>.</span></h1> */}
                <FontAwesomeIcon className='vsm:text-xl text-2xl text-white text-right' icon={faClose} onClick={handleMenuClick} />
              </div>

              <div className="items w-full flex flex-col gap-3 items-center list-none text-xl text-white px-3 bg-transparent shadow-sm ">
                <div className={` ${isHire ? '' : ''}`} onClick={() => setMenuOpen(false)}>
                  <ButtonDisplay handleSubmit={handleHireClick} buttonName={!isHire ? "Hire Me" : "Home"} />
                </div>
                {
                  navItems.map((item, index) => {
                    return <Link className='cursor-pointer bg-black/60 backdrop-saturate-350 w-full px-2 py-2 border-2 border-reddish-color text-center font-semibold tracking-wider rounded-md' to={item.toLowerCase()} spy={true} smooth='easeOutQuad' duration={1000} onClick={() => setMenuOpen(false)} key={index}>
                      <li>{item}</li>
                    </Link>
                  })
                }
              </div>
            </div>
            :
            !isHire ?
              <div className='hidden md:block vsm:block cursor-pointer text-lg px-2 py-1' onClick={handleMenuClick} ><FontAwesomeIcon icon={faMenorah} /></div> :
              <div className={`${isHire ? '' : ''}`}>
                <ButtonDisplay handleSubmit={handleHireClick} buttonName={!isHire ? "Hire Me" : "Home"} />
              </div>

          }

        </div>

        <div className={`flex gap-7 list-none text-lg font-medium md:hidden vsm:hidden ${isHire ? 'invisible' : ''}`}>
          <li>
            <Link className='cursor-pointer hover:text-reddish-color' to='home' spy={true} smooth='easeOutQuad' duration={1000}>Home</Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-reddish-color' to='services' spy={true} smooth='easeOutQuad' duration={1000} offset={-75}>Services</Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-reddish-color' to='projects' spy={true} smooth='easeOutQuad' duration={1000} offset={-75}>Projects</Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-reddish-color' to='about' spy={true} smooth='easeOutQuad' duration={1000} spyThrottle={500} offset={-75}>About me</Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-reddish-color' to='contact' spy={true} smooth='easeOutQuad' duration={1000} offset={-75}>Contact</Link>
          </li>
        </div>
        <div className={`vsm:hidden md:hidden ${isHire ? '' : ''}`}>
          <ButtonDisplay handleSubmit={handleHireClick} buttonName={!isHire ? "Hire Me" : "Home"} />
        </div>

      </div>
    </>
  )
}
