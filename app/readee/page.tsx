"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Readee() {
    return (
      <main className="flex min-h-screen flex-col">
                <div className="container mx-auto px-12 py-4 md:py-20">
          <h1 className="font-mono text-[1.5rem] md:text-[5rem] text-center font-bold text-gray-500">Readee 📚</h1>
          <p className="text-[0.9rem] text-center md:text-[1.2rem] pt-2 md:pt-10 text-gray-500">
            A mobile application developed as a senior project, designed to enable users to swap and chat about secondhand books within a community platform. 
            The project focused on delivering a smooth and engaging user experience for matching and communicating with book-swapping partners.
          </p>
          <div className="lg:flex lg:justify-center pt-5 md:pt-10 pt-5 lg:pt-20">
            <img
            className="rounded-lg shadow-md size-full "
            src="/images/projects/readee/rd.png"
            alt="project image"
            />
          </div>
          <div className="lg:flex lg:justify-center pt-5 md:pt-10">
            <img
            className="rounded-lg shadow-md size-full "
            src="/images/projects/readee/demo.png"
            alt="project image"
            />
          </div>
          <div className="flex justify-center lg:pl-10 py-5 lg:pt-10">     
              <Link className="flex justify-center lg:flex lg:justify-start" target="_blank" href="https://seniorproject.sit.kmutt.ac.th/showproject/CS64-RE11">
                <motion.button
                  whileHover={{ scale: [null, 1, 1.1] }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-3 py-1 mt-4 text-black rounded-full bg-transparent border border-gray-500"
                >
                  SIT Portfolio
                 {/* <img
                    className="ml-1"
                    src="/icons/github.svg"
                    alt="GitHub icon"
                    width={20}
                    height={20}
                  /> */}
                </motion.button>
              </Link>
            </div>
        </div>

        <Footer />

      </main>
    );
  }