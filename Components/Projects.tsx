import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 text-2xl text-[#808080] uppercase tracking-[20px]">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-10 md:p-44 snap-center"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <Image
                src={urlFor(project.image).url()}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                Case study {index + 1} of {projects.length}:{" "}
                <Link href={project.linkToBuild}>
                  <span className="underline decoration-[#f7ab0a]/50 cursor-pointer">
                    {project.title}
                  </span>
                </Link>
              </h4>
              <div className="flex space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <span
                    className="cursor-pointer hover:text-[#f7ab0a]"
                    key={technology._id}
                  >
                    #{technology.title}
                  </span>
                ))}
              </div>
              <p className="text-lg text-justify">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
