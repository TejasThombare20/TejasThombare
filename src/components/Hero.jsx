  import React from "react";
  import { motion } from "framer-motion";
  import { styles } from "../styles";
  import { Computers } from "./canvas";

  const Hero = () => {
    return (
      <section className="relative w-full h-screen mx-auto  ">
        <div
          className={`sm:px-16 px-10 absolute inset-0 top-[120px] max-w-7xl mx-auto  flex flex-row items-start gap-5 `}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-purple-400  " />

            <div className="w-1 sm:h-80 h-40 violet-gradient " />
          </div>

          <div>
            <h1 className="font-bold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I'm <span className="text-purple-500 ">Tejas</span>
            </h1>
            <p className=" text-white/95  font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              I am Full Stack Developer and <br className="sm:block hidden" />
              currently perceiving my B.Tech and MBA from ABV-IIITM Gwalior
            </p>
          </div>
        </div>
        <Computers />

        <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center  ">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2  ">
              <motion.dev
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1 "
              />
            </div>
          </a>
        </div>
      </section>
    );
  };

  export default Hero;
