import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 space-y-7 w-full max-h-[80vh] md:w-[600px] xl:w-[900px] rounded-lg snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative min-h-[120px] w-[120px] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center overflow-hidden"
      >
        <Image
          src={urlFor(experience.companyImage).url()}
          layout="fill"
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              width={40}
              height={40}
              objectFit="contain"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          {`${new Date(experience.dateStarted).toDateString()} - ${
            experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded)
          }`}
        </p>
        <ul className="list-disc space-y-4 ml-5 md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
