import React from 'react'
import { easeIn, easeInOut, easeOut, motion, stagger } from 'framer-motion'
import { charVariant } from '../utils/motionVariants'
import potrait from '../assets/done.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

export default function Home() {
    const name = "Kritan"
    const profession = "Developer"
    const expertise = "My Expertise: "

    return (
        <>
            <div className="flex items-center w-full justify-around py-20
            vsm:flex-col-reverse vsm:gap-10
            bg-zinc-900" id='home'>
                <div className="texts flex flex-col gap-10 justify-around h-full">
                    <div className='flex flex-col gap-5 h-3/5 justify-end'>
                        <h1 className='text-6xl font-bold spartan text-white'>I'm <span className='text-reddish-color'>
                            {name.split("").map((char, index) => {
                                return <motion.span
                                    initial="hidden"
                                    whileInView="reveal"
                                    variants={charVariant}
                                    transition={{
                                        duration: 1,
                                        delay: index * .1
                                    }}
                                    key={index}>{char}</motion.span>
                            })}
                        </span>
                        </h1>
                        <div className="text-4xl font-semibold text-white">
                            <h3>
                                I'm a {profession.split("").map((char, index) => {
                                    return <motion.span
                                        className='text-reddish-color'
                                        initial="hidden"
                                        whileInView="reveal"
                                        variants={charVariant}
                                        animate={{
                                            color: "#ffffff"
                                        }}
                                        exit={{
                                            color: "#ffffff"
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: index * .2,
                                            repeat: Infinity,
                                            repeatDelay: 6,
                                            ease: easeInOut
                                        }}
                                        key={index}>{char}</motion.span>
                                })}
                            </h3>
                        </div>
                    </div>
                    <Link className='cursor-pointer' to='contact' spy={true} smooth='easeOutQuad' duration={1000} >
                    <button className='w-full px-5 py-3 bg-transparent border-2 text-white text-md border-reddish-color transition-[.3s] hover:bg-reddish-color'>
                        Get In Touch
                    </button>
                    </Link>

                    <div className="text text-white">
                        <motion.h4
                            initial="hidden"
                            whileInView="reveal"
                            variants={charVariant}
                            transition={{
                                duration: .4,
                                staggerChildren: 1,
                                ease: easeIn
                            }}
                            className='text-md tracking-wide'>{expertise.split("").map((element, index) => {
                                return <motion.span
                                    initial="hidden"
                                    whileInView="reveal"
                                    variants={charVariant}
                                    transition={{
                                        duration: .2,
                                        staggerChildren: stagger,
                                        delay: index * .2,
                                        ease: easeIn
                                    }}
                                    key={index}>{element}</motion.span>
                            })}
                            &nbsp; <motion.span
                                initial="hidden"
                                whileInView="reveal"
                                variants={charVariant}
                                transition={{
                                    duration: 3,
                                    staggerChildren: stagger,
                                    ease: easeIn
                                }}
                                className='text-blue-500'><FontAwesomeIcon icon={faReact} /></motion.span>
                            &emsp; <motion.span
                                initial="hidden"
                                whileInView="reveal"
                                variants={charVariant}
                                transition={{
                                    duration: 3,
                                    staggerChildren: stagger,
                                    ease: easeIn
                                }} className='text-yellow-500'><FontAwesomeIcon icon={faJs} /></motion.span>
                            &emsp; <motion.span
                                initial="hidden"
                                whileInView="reveal"
                                variants={charVariant}
                                transition={{
                                    duration: 3,
                                    staggerChildren: stagger,
                                    ease: easeIn
                                }} className='text-blue-300'><FontAwesomeIcon icon={faCss3} /></motion.span>

                        </motion.h4>
                    </div>
                </div>
                <div className="relative img w-1/3
                vsm:w-2/3
                flex items-center justify-center p-5 pt-12 bg-zinc-900">
                    <img className="w-full imgDrop z-10 bg-blend-multiply rounded-b-full" src={potrait} alt="" />
                    <div className=" absolute w-full fancyBorder h-3/6 bottom-0 bg-blend-darken shadow-md shadow-reddish-color">
                    </div>
                </div>
            </div>
        </>
    )
}
