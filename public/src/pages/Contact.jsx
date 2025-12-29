import React from 'react'
import ContactInfoBox from '../components/ContactInfoBox'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import Form from '../components/Form'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'
import { ToastContainer } from 'react-toastify';

export default function Contact() {
  const contactInfos = [
    {
      icon: faEnvelope,
      header: 'Mail',
      info: '13kritan@gmail.com'
    },
    {
      icon: faPhone,
      header: 'Phone',
      info: '+977 9708124060'
    },
    {
      icon: faLocation,
      header: 'Location',
      info: 'Pokhara, Nepal'
    },
  ]
  return (
    <>
      <div className=' w-full bg-zinc-900 flex justify-around
       md:flex-col md:gap-8 md:w-full
       vsm:flex-col vsm:gap-8 vsm:w-full
      p-14' id='contact'>
        <div className="flex flex-col items-center gap-10 vsm:w-full w-1/4 md:w-2/3">
          <h3 className='text-3xl font-semibold tracking-wide text-white spartan vsm:text-lg'>Let's Discuss Your Project</h3>
          {
            contactInfos.map((contactInfo, index) => {
              return <motion.div
                variants={fadeIn("right", index*.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='w-full '
                key={index}>
                <ContactInfoBox icon={contactInfo.icon} header={contactInfo.header} info={contactInfo.info} />
              </motion.div>
            })
          }
        </div>
        <div className="right w-2/4 vsm:w-full md:w-full flex items-center justify-center">
          <Form />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
