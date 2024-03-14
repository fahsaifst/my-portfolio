"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from '@/lib/data';
import clsx from 'clsx';




const Navbar = () => {
  
      const [activeSection, setActiveSection] = useState("/");
      useEffect(() => {
        const viewportHeignt = window.innerHeight;
        const amount = viewportHeignt * 2;
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.25,
          amount: amount,
        };
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              const link = links.find(link => link.hash === `#${sectionId}`);
              if (link) {
                setActiveSection(link.name);
              }
            }
          });
        }, observerOptions);
      

        links.forEach(link => {
          const section = document.getElementById(link.hash.slice(1));
          section && observer.observe(section);
        });
      
        return () => {
          observer.disconnect();
        };
      }, []);
      

  return (
    <header className="z-[900] relative">
      <motion.div className="fixed top-0 left-1/2 h-[4rem] w-full rouned-none border border-white border-opacity-10 bg-white bg-opacity-50
                            shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[2.75rem] sm:w-[29rem] sm:rounded-full"
                  initial={{ y: -100, x: "-50%", opacity: 0 }}
                  animate={{ y: 0,x:"-50%", opacity: 1 }}>
      </motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-between text-[0.9rem] font-medium text-gray-500
                        sm:w-[initial]">
          {
            links.map(link => (
              <motion.li className="h-3/4 flex items-center justify-center "
                  key={link.hash}
                  initial={{ y: -100, opacity: 0}}
                  animate={{ y: 0, opacity: 1}} >
                <Link className={clsx ("flex w-full items-center justify-center px-3 py-2 hover:text-gray-950 transition", 
                {
                  "font-semibold text-gray-950": activeSection === link.name,
                }
                )}
                      href={link.hash}
                      onClick={() => setActiveSection(link.name)}
                      >{link.name}</Link>

              </motion.li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
