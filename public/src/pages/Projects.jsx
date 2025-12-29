import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'
import ProjectBox from '../components/ProjectBox'
import Plag from '../assets/ap1.png'
import Expn from '../assets/dst.png'
import Cook from '../assets/cle.png'

export default function Projects() {
  const projects = [
    {
      title: "SajiloBudget",
      description:
        "A simple and intuitive income and expense management app that helps users track their finances, manage budgets, and gain better control over their spending habits.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      live: "https://sajilo-budget.vercel.app/",
      github: "https://github.com/13kritan/SajiloBudget",
      img: Expn
    },
    {
      title: "Plagiarism Detector App",
      description:
        "An AI-based application that analyzes text similarity to detect plagiarism, helping users identify duplicate content efficiently and accurately.",
      live: "https://plagariasm-detector.onrender.com",
      github: "https://github.com/13kritan/plagariasm_detector",
      img: Plag 
    },
    {
      title: "Cookle",
      description:
        "A user-friendly recipe application that allows users to discover, search, and save recipes, making everyday cooking easier and more enjoyable.",
      tech: ["React", "Tailwind", "Node.js", "Chart.js"],
      live: "https://cookle-f.vercel.app/",
      github: "https://github.com/13kritan/cookle-f",
      img: Cook 
    },
  ];
  return (
    <>
      <div className="bg-zinc-700 flex flex-col items-center overflow-hidden gap-14
      md:flex-col md:gap-8 md:w-full md:items-center
      vsm:flex-col vsm:gap-8 vsm:w-full vsm:text-xs
      px-8 py-24 " id='projects'>

        <motion.div
          variants={fadeIn("up", .1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-1/2 md:w-full md:flex md:items-center md:flex-col vsm:w-full text-left">
          <h2 className='text-reddish-color spartan text-xl
          vsm:text-md
          md:w-2/3 
          tracking-widest font-medium'>FEATURED PROJECTS</h2>
          <p className='text-white 
          vsm:text-lg
          md:w-2/3
          text-3xl font-medium'>Dive into my featured projects that blend Creativity, Functionality and Technical expertise</p>
        </motion.div>

        <div className="card w-3/4 items-center md:w-full vsm:w-full flex flex-col gap-16">
          {
            projects.map((project, index) => {
              return <ProjectBox key={index} index={index} title={project.title} live={project.live} description={project.description} img={project.img} link={project.link} github={project.github} name={project.name} motion={motion} fadeIn={fadeIn} />
            })
          }
        </div>
      </div>
    </>
  )
}
