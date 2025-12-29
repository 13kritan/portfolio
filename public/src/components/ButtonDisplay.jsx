import { React, useState } from 'react'
import { easeIn, motion } from 'framer-motion'

export default function ButtonDisplay({buttonName, handleSubmit}) {
  const [isHover, setIsHover] = useState(false)

  return (
    <>
      <motion.button className='relative px-5 py-2 font-medium text-lg overflow-clip'
      onClick={handleSubmit}
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
        animate={{
          backgroundColor: isHover ? '#3a3153' : '#C30927'
        }} >
        <motion.div animate={{
          scale: isHover ? 20 : 1
        }}
          transition={{
            duration: .2,
            ease: easeIn
          }}
          className="h-3 w-3 bg-grayish-color absolute bottom-0 right-0">
        </motion.div>

        <motion.div animate={{
          color: "#ffffff",
          z: 1
        }} >
          <p className='z-10'>{buttonName}</p>
        </motion.div>
      </motion.button>
    </>
  )
}
