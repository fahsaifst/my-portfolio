"use client"
import React from 'react';
import { projectsData } from '@/lib/data';
import { motion, useInView, } from "framer-motion";
import { useState, useRef } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';




const Projects = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }
  return (
    <motion.section
        initial="hidden"
        whileInView="show"
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175}}
        viewport={{ once: false, amount: 0.25}}
        className="mb-28 leading-8 sm:mb-40 pt-14" id="projects">
        <motion.h2 className="text-[1.3rem] text-center font-medium pt-32">Projects</motion.h2>
        <ul ref={ref}
            className="grid lg:grid-cols-3 gap-10 pt-12">
                {projectsData.map((project, index) => (
                  <React.Fragment
                  key={index}
                >
                  <ProjectCard {...project}/>

                </React.Fragment>
                ) )}
        </ul>
    </motion.section>
  )
}

export default Projects