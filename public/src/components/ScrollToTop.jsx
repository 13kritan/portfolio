import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

function ScrollToTop() {
    return (
        <>
            <Link className='cursor-pointer' to='home' spy={true} smooth='easeOutQuad' duration={1000}>
                <div className='w-12 h-12 text-white text-xl flex items-center justify-center px-2 py-1 rounded-full bg-reddish-color'>
                    <button><FontAwesomeIcon icon={faArrowUpWideShort} /></button>
                </div>
            </Link>
        </>
    )
}

export default ScrollToTop
