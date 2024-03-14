"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <section 
      id="contact"
      className="text-center py-56"
    >
      <motion.div>
      <h1 className="text-[1.3rem] font-medium pt-32">Contact me via</h1>
      <div className="flex flex-wrap justify-center gap-28 sm:px-40 pt-10 pb-20">
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.2] }}
          transition={{ duration: 0.2 }}
        >
          <Link target="_blank" href="https://github.com/fahsaifst">
            <button>
              <img
                src="/icons/github-square.svg"
                alt="Github icon"
                width={100}
                height={100}
              />
            </button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.2] }}
          transition={{ duration: 0.2 }}
        >
          <Link target="_blank" href="https://www.linkedin.com/in/thanyakan-maneetool-913711270/">
            <button>
              <img
                src="/icons/linkedin.svg"
                alt="Linkedin icon"
                width={100}
                height={100}
              />
            </button>

          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.2] }}
          transition={{ duration: 0.2 }}
        >
        <Link target="_blank" href="mailto:your.thanyakanfs.33@gmail.com">
            <button>
              <img
                src="/icons/gmail.svg"
                alt="Gmail icon"
                width={100}
                height={100}
              />
            </button>
        </Link>
        </motion.div>
      </div>
    </motion.div>
      
    </section>
  );
};

export default Contact;
