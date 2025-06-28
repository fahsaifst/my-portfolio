"use client"
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';



const AboutMe = () => {

  return (
    <motion.section
      className="mb-32 leading-8 sm:mb-40 py-14"
      id="about">
      <motion.div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1500">
      <h2 className="text-[1.3rem] text-center font-medium pt-32">About me</h2>
      <p className="text-center font-regular text-gray-600 lg:px-44 pt-5">
        <span>My name is</span>
        <span className="font-semibold"> Thanyakan Maneetool</span>
        <span>, a recent</span>
        <span className="font-semibold"> Computer Science</span>
        <span> graduate from</span>
        <span className="font-semibold"> King Mongkut's University of Technology Thonburi</span>
        <span>. I’m a motivated</span>
        <span className="font-semibold"> software engineer</span>
        <span> with a strong foundation in front-end and mobile development. I specialize in building cross-platform applications using Flutter and have experience in UI/UX design, RESTful API integration, and collaborative development.</span>
        <span> While mobile is my core strength, I’m also expanding into full-stack development with technologies like React and Node.js. I enjoy solving real-world problems and creating user-centric solutions.</span>
        <span className="font-semibold"> I’m now seeking a full-time opportunity where I can continue to grow as a software engineer, contribute to impactful products, and learn from experienced teams.</span>
      </p>
      </motion.div>
      <motion.div 
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-offset="-400"
      data-aos-duration="500">
      <h2 className="text-center text-[1.3rem] font-medium pt-44">Education</h2>
      <div className="grid grid-cols-2 pt-10 lg:px-20 font-regular text-gray-600">
        <div className="grid grid-rows-2 text-center gap-10 font-medium">
          <p>2021 - Present</p>
          <p>2017 - 2020</p>
        </div>
        <div className="grid grid-rows-2 gap-10 ">
            <div>
            <p>
              <span>
                Bachelor of Science in Computer Science (English Program) King Mongkut's University of Technology Thonburi,
                School of Information Technology 
              </span>
              {/* <span className="text-[#ad72cb]">
                <br/>GPAX: 2.92
              </span> */}
            </p>
            {/* <Link target="_blank" href="https://drive.google.com/file/d/11kNqj2rczY8ZW2fq1t5wSPTHjnMFeyG8/view?usp=sharing">
                    <motion.button 
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.2 }}
                        className="px-2 text-gray-500 rounded-full bg-transparent border border-gray-500">
                            Transcript
                    </motion.button>
            </Link> */}
            </div>
          <p>
            <span>
              Talent Enrichment Program (TEP), Bangpakok Wittayakom 
            </span>
            {/* <span className="text-[#ad72cb]">
              <br/>GPAX: 3.90
            </span> */}

          </p>
        </div>
      </div>
      </motion.div>
      
    </motion.section>
  );
};

export default AboutMe;
