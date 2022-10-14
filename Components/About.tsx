import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import about_img from "../public/about_img.jpg";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen text-center max-w-7xl mx-auto p-10 overflow-y-auto"
    >
      <h3 className="my-16 text-2xl text-[#808080] uppercase tracking-[20px]">
        About
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-5 md:text-left">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex-shrink-0 w-40 rounded-full md:w-96 md:rounded-lg xl:w-[500px] overflow-hidden"
        >
          <Image src={about_img} alt="" />
        </motion.div>
        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-lg text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
            reiciendis optio eum mollitia hic incidunt fuga ea labore aut.
            Itaque repudiandae incidunt consequuntur possimus repellat dolores
            reiciendis error expedita odio! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tempore, reiciendis optio eum mollitia
            hic incidunt fuga ea labore aut. Itaque repudiandae incidunt
            consequuntur possimus repellat dolores reiciendis error expedita
            odio!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
