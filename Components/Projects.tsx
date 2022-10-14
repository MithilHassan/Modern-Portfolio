import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import project_img from "../public/project.png";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 snap-center"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <Image src={project_img} alt="" objectFit="cover" />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case study {index + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit id eveniet enim labore nisi, praesentium officiis
                impedit deserunt facere, quo inventore ratione consequatur quam
                provident amet? Quas cupiditate placeat veritatis.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
