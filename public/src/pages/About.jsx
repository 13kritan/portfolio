import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Potrait from '../assets/sit.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

export default function About() {

  const handles = [
    {
      className: 'text-lb-color',
      icon: faFacebook
    },
    {
      className: 'text-pink-500',
      icon: faInstagram
    },
    {
      className: 'text-white',
      icon: faLinkedin
    }
  ]
  return (
    <>
      <div className='w-full bg-zinc-600 flex justify-around
      vsm:flex-col vsm:gap-10 vsm:pt-10
sm:pt-32
md:pt-20
      pt-40 p-10 ' id='about'>
        <div className="img h-full w-1/3 vsm:w-2/3 md:w-1/3 flex items-center justify-center">
          <div className="fancyBorderRadius relative shadow-md shadow-[#7d7b7b]">
            <img className='absolute potraitDrop z-10 bg-blend-multiply bottom-[0%]' src={Potrait} alt="" />
          </div>

        </div>

        <div className="about w-1/3
        vsm:w-full
        flex flex-col gap-10">
          <motion.h3
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl vsm:text-md font-medium tracking-widest spartan text-white">About <span className='text-reddish-color'>.</span> KRITAN</motion.h3>
          <motion.h4
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-3xl vsm:text-lg md:text-xl font-semibold tracking-wide text-white'>
            Get a website that will make a lasting impression on your audience!!!
          </motion.h4>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-zinc-300 tracking-wide vsm:text-xs md:text-sm'>
            I'm Kritan Adhikari, a passionate Full-Stack Web Developer with expertise in building responsive frontend interfaces and robust backend systems. Skilled in technologies like React, Express and MongoDB, I create scalable, user-centric web applications. Let's bring your ideas to life.
          </motion.p>

          <div className="handles flex text-2xl gap-5">
            {
              handles.map((handle, index) => {
                return <motion.div
                  variants={fadeIn("left", index * .1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className='border-2 border-zinc-400 rounded-md
                  vsm:text-sm
                  md:text-lg
                  py-1 px-2'>
                  <FontAwesomeIcon key={index} className={handle.className} icon={handle.icon} />
                </motion.div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
