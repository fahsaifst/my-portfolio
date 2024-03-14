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
        <span>, a third-year</span>
        <span className="font-semibold"> Computer Science</span>
        <span> student at</span>
        <span className="font-semibold"> King Mongkut's University of Technology Thonburi</span>
        <span>. Currently</span>
        <span className="font-semibold"> seeking internship opportunities</span>
        <span>, I'm eager to apply my skills in a real-world setting, and further hone my abilities. 
                As I embark on this journey, I'm not just looking for an internship,</span>
        <span className="font-semibold"> I'm excited about the chance to learn, develop, and make meaningful contribution</span>
      </p>
      </motion.div>
      <motion.div 
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom">
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
              <span className="text-[#ad72cb]">
                <br/>GPAX: 2.92
              </span>
            </p>
            <Link target="_blank" href="https://drive.google.com/file/d/11kNqj2rczY8ZW2fq1t5wSPTHjnMFeyG8/view?usp=sharing">
                    <motion.button 
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.2 }}
                        className="px-2 text-gray-500 rounded-full bg-transparent border border-gray-500">
                            Transcript
                    </motion.button>
            </Link>
            </div>
          <p>
            <span>
              Talent Enrichment Program (TEP), Bangpakok Wittayakom 
            </span>
            <span className="text-[#ad72cb]">
              <br/>GPAX: 3.90
            </span>

          </p>
        </div>
      </div>
      </motion.div>
      
    </motion.section>
  );
};

export default AboutMe;
