"use client"
import React from 'react'
import { developmentData, languagesData, librariesData, toolData } from '@/lib/data'
import { Variants, motion } from 'framer-motion';


const Skills = () => {

      
  return (
    <motion.div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-offset="-1000"
        data-aos-duration="500"
        className="leading-8 sm:mb-40 py-14" id="skills">
        <motion.h2 
        className="text-[1.5rem] text-center font-medium pt-32 pb-10">My skills</motion.h2>
      <motion.div>
        <h4 className="py-10 font-semibold text-[1.2rem] text-gray-600">Programming Languages</h4>
        <div className="grid sm:grid-cols-4 gap-6 items-center">
            {languagesData.map(language => (
                <div key={language.name} className="flex items-center">
                <img 
                    src={language.image} 
                    alt={language.name} 
                    className="" 
                    width={35}
                    height={35}/>
                <p className="text-sm text-gray-600 pl-3">{language.name}</p>
                </div>
        ))}
        </div>
      </motion.div>
      <motion.div>
      <h4 className="py-10 font-semibold text-[1.2rem] text-gray-600">Developments</h4>
      <div className="grid md:grid-cols-4 gap-6 items-center">
        {developmentData.map(development => (
          <div key={development.name} className="flex items-center">
            <img 
              src={development.image} 
              alt={development.name} 
              className="" 
              width={35}
              height={35}/>
            <p className="text-sm text-gray-600 pl-3">{development.name}</p>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div>
      <h4 className="py-10 font-semibold text-[1.2rem] text-gray-600">Libraries</h4>
      <div className="grid md:grid-cols-4 gap-6 items-center">
        {librariesData.map(library=> (
          <div key={library.name} className="flex items-center">
            <img 
              src={library.image} 
              alt={library.name} 
              className="" 
              width={35}
              height={35}/>
            <p className="text-sm text-gray-600 pl-3">{library.name}</p>
          </div>
        ))}
      </div>
      </motion.div>
      <div>
      <h4 className="py-10 font-semibold text-[1.2rem] text-gray-600">Tools</h4>
      <div className="grid md:grid-cols-4 gap-6 items-center">
        {toolData.map(tool=> (
          <div key={tool.name} className="flex items-center">
            <img 
              src={tool.image} 
              alt={tool.name} 
              className="" 
              width={35}
              height={35}/>
            <p className="text-sm text-gray-600 pl-3">{tool.name}</p>
          </div>
        ))}
      </div>
      </div>
      
    </motion.div>
  )
}

export default Skills