import { React, useState } from 'react'

export default function ProjectBox({ img, link, name, motion, fadeIn, index, title, description, live, github }) {

    const [isHover, setIsHover] = useState(false)
    return (
        <>
            <motion.div
                variants={fadeIn("up", index * .1)}
                initial="hidden"
                whileInView={"show"}
                animate={"rest"}
                whileHover={{ scale: 1.02, borderColor: "#c30927" }}
                viewport={{ once: false, amount: 0.7 }}
                className="w-full md:w-2/3 h-60 border-2 rounded-xl border-zinc-500 relative overflow-hidden"
                onMouseLeave={() => setIsHover(!isHover)}
                onMouseEnter={() => setIsHover(!isHover)}
            >

                <div
                    className="relative w-full h-full bg-zinc-500 bg-cover bg-center mix-blend-darken bg-blend-multiply"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <h2 className="absolute bottom-4 left-4 text-white z-20 text-xl font-semibold">
                        {title}
                        <p className='text-gray-300 text-sm'>
                            {description}
                        </p>
                    </h2>

                </div>

                <div className={`${isHover ? "" : "hidden"} backdrop-blur-md font-medium  h-full 
                    vsm:w-3/4
                    md:2/4
                    w-1/4 absolute right-0 top-0 z-10 flex flex-col items-center gap-5 justify-center transition-[.3s]`}>
                    <motion.a target="_blank"
                        rel="noopener noreferrer"
                        href={live}
                        whileHover={{ borderColor: "#c30927", scale: 1.01, transition: '.2s' }}
                        className="w-3/4 px-5 py-3 border-2 border-white rounded-2xl text-white bg-transparent">
                        {"< Live Demo />"}
                    </motion.a>
                    <motion.a target="_blank"
                        rel="noopener noreferrer"
                        href={github}
                        whileHover={{ borderColor: "#c30927", scale: 1.01, transition: '.2s' }}
                        className="w-3/4 px-5 py-3 border-2 border-white rounded-2xl text-white bg-transparent">
                        {"< Source Code />"}
                    </motion.a>
                </div>

                <div className="text absolute bottom-0 px-4 w-full flex flex-col gap-4">
                    <h3 className='text-white text-lg vsm:text-md font-semibold'>
                        {name}
                    </h3>
                </div>
            </motion.div>
        </>
    )
}
