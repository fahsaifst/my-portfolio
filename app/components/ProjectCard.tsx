import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';


type ProjectCardProps = (typeof projectsData)[number]

function ProjectCard({ image, title, description, tags, gitUrl }: ProjectCardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => { 
    setExpanded(!expanded);
  };
  return (
<div onClick={toggleExpanded} className={`flex flex-col h-full cursor-pointer`}>
      <div
        className="h-52 md:h-58 rounded-t-[1.5rem] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col justify-between rounded-b-[2rem] bg-[#ffffff] py-6 px-4 shadow-lg">
        <div>
          <div className="flex flex-wrap mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-[0.75rem] bg-gray-100 px-2  rounded-full mr-1">
                {tag}
              </span>
            ))}
          </div>
          <h5 className="text-[1.2rem] text-black font-semibold mb-2">{title}</h5>
          {expanded ? (
            <p className="text-[#8b8b8b]">{description}</p>
          ) : (
            <p className="text-[#8b8b8b] overflow-hidden line-clamp-2">{description}</p>
          )}
        </div>
        <Link target="_blank" href={gitUrl}>
          <motion.button
            whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.2 }}
            className="flex items-center px-3 py-1 mt-4 text-black rounded-full bg-transparent border border-gray-500"
          >
            repository
            <img
              className="ml-1"
              src="/icons/github.svg"
              alt="GitHub icon"
              width={20}
              height={20}
            />
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
export default ProjectCard;
