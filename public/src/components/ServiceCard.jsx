import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

export default function ServiceCard({ icon, title, description, index }) {
    return (
        <>
            <motion.div
             variants={fadeIn("left", index*.1)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className="w-full md:w-2/3 h-2/6  border-2 rounded-xl border-zinc-500 flex px-6 py-4">
                <div className="icon text-2xl vsm:text-md text-white">
                    <div className='bg-black p-2 rounded-lg'><FontAwesomeIcon icon={icon} /></div>
                </div>

                <div className="text px-4 w-full flex flex-col gap-4">
                    <h3 className='text-white text-lg vsm:text-md font-semibold'>
                        {title}
                    </h3>
                    <p className='text-slate-100 vsm:text-xs'>
                        {description}
                    </p>
                </div>
            </motion.div>
        </>
    )
}
