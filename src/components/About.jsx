import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../Constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-lg  shadow-card  "
      >
        <div option={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col   ">
          <img src={icon } alt="icon" 
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center "   >
            {title}
          </h3>
        </div>  
      </motion.div>
    </Tilt>  
  );
};

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}>
        <p className="text-[14px] sm:text-[18px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I'm skiled software developer with Experience in TypeScript and
        JavaScript and experties in frameworks like React, Next.js and Three.js.
        I'm quick learner and collaborator closely with clients to create
        efficent ,scalale and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life !
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10  ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about");
