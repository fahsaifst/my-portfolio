"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'

const headerVariants = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        }
    }
}

export default function Intro() {
  return (
    <motion.section 
        id="home"
        variants={headerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-12 lg:p-10 scroll-mt-28">
        <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2
            }}
            className="col-span-7 place-self-center">
            <h1 className="text-[#8772cb] text-3xl sm:text-4xl text-center lg:text-left lg:text-5xl font-bold">
                Hi, I'm Fahsai 🌤
            </h1>
            <p className="mt-5 font-medium text-center text-black">A 3rd year student of Computer Science at KMUTT.</p>
            <div className="flex justify-center lg:justify-start mt-6 mb-10">           
                <Link target="_blank" href="https://github.com/fahsaifst">
                    <motion.button
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.3 }}>                   
                        <img
                            src="/icons/github.svg"
                            alt="GitHub icon"
                            width={34}
                            height={34}
                        />
                    </motion.button>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/thanyakan-maneetool-913711270/">
                    <motion.button 
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.3 }}
                        className="ml-2">
                        <img
                            src="/icons/social-linkedin.svg"
                            alt="LinkedIn icon"
                            width={30}
                            height={30}
                        />
                    </motion.button>
                </Link>
                <Link target="_blank" href="https://drive.google.com/file/d/1qMXU30fQUcHOHb3yFkq7DGmHmnw59Z5f/view?usp=drive_link">
                    <motion.button 
                        whileHover={{ scale: [null, 1, 1.1] }}
                        transition={{ duration: 0.3 }}
                        className="px-3 py-1 ml-3 text-gray-500 rounded-full bg-transparent border border-gray-500
                                    hover:text-black hover:border-black">
                            Resume
                    </motion.button>
                </Link>
            </div>
        </motion.div>
        <motion.div
            className="col-span-5 place-self-center lg:mt-0"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2
            }}>
            <Image
                src="/images/profile.jpg"
                alt="profile image"
                width={300}
                height={300}
                className="rounded-full shadow-xl shadow-black/15"
            />
        </motion.div>
    </motion.section>
  )
}

