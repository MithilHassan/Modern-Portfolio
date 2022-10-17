import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left xl:flex-row min-h-screen max-w-7xl justify-center items-center xl:space-y-0 mx-auto px-10"
    >
      <h3 className="absolute top-24 text-2xl text-[#808080] uppercase tracking-[20px]">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#808080] text-xs md:text-lg">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
