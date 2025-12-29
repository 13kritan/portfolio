import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { faCloud, faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

export default function Services() {

  const cards = [
    {
      icon: faCode,
      title: "Custom Web Applications",
      description: "Design and develop tailored web solutions to meet unique business needs. From idea to deployment, I build Scalable, user-friendly and responsive applications that deliver exceptional user experiences."
    },
    {
      icon: faNetworkWired,
      title: "API Integration",
      description: "Seamlessly connect web applications with third-party services like payment gateways, social media platforms and cloud tools ensuring efficient data exchange and enhanced functionality."
    },
    {
      icon: faCloud,
      title: "Hosting and Deployment",
      description: "Deploy and manage applications on reliable cloud platforms like AWS, Google Cloud, Azure. Ensure smooth launches, scalability and secure hosting environments for optimal performances."
    },
  ]

  return (
    <>
      <div className="bg-zinc-800 flex justify-around overflow-hidden
      md:flex-col md:gap-8 md:w-full md:items-center
      vsm:flex-col vsm:gap-8 vsm:w-full vsm:text-xs
      px-8 py-24 " id='services'>
        <motion.div
          variants={fadeIn("up", .1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-1/3 md:w-full md:flex md:items-center md:flex-col vsm:w-full">
          <h2 className='text-reddish-color spartan text-xl
          vsm:text-md
          md:w-2/3 
          tracking-widest font-medium'>SERVICES</h2>
          <p className='text-white 
          vsm:text-lg
          md:w-2/3
          text-3xl font-medium'>Get a powerful website that delivers results with an all-in-one solution</p>
        </motion.div>

        <div className="card w-2/5 items-center md:w-full vsm:w-full flex flex-col gap-10">
          {
            cards.map((card, index) => {
              return <ServiceCard key={index} index={index} icon={card.icon} title={card.title} description={card.description} />
            })
          }
        </div>
      </div>
    </>
  )
}
