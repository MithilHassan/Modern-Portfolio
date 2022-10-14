import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../public/hero_img.jpg";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 space-y-7 w-full max-h-[80vh] md:w-[600px] xl:w-[900px] rounded-lg snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="min-h-[120px] max-h-[120px] max-w-[120px] rounded-full xl:max-w-[200px] xl:min-h-[200px] object-cover object-top overflow-hidden"
      >
        <Image src={img} alt="" />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl font-light">CEO of PAPAFAM</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image width={40} height={40} objectFit="contain" src={html} alt="" />
          <Image width={40} height={40} objectFit="contain" src={css} alt="" />
          <Image
            width={40}
            height={40}
            objectFit="contain"
            src={javascript}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 md:text-lg">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </article>
  );
}
