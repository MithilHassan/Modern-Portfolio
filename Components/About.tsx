import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left xl:flex-row min-h-screen max-w-7xl px-10  justify-center items-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 text-2xl text-[#808080] uppercase tracking-[20px]">
        About
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-5 md:text-left">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex-shrink-0 w-40 h-auto rounded-full md:w-96 md:rounded-lg xl:w-[500px] overflow-hidden"
        >
          <Image
            src={urlFor(pageInfo?.profilePicture).url()}
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt=""
          />
        </motion.div>
        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-lg text-justify">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
