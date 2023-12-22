  import { motion } from "framer-motion";
  import React from "react";
  import { fadeIn, textVariant } from "../utils/motion";
  import { testimonials } from "../Constants";
  import { SectionWrapper } from "../HOC";

  const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }) => {
    return (
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1">
          <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col ">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} of {company}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const Feedbacks = () => {
    return (
      <>
        <div className="mt-12 bg-black-100 rounded-md ">
          <div className="sm:p-16 p-16 bg-tertiary rounded-2xl min-h-[300px]">
            <motion.div variants={textVariant()}>
              <p className="text-[14px] sm:text-[18px] text-secondary uppercase tracking-wider">
                What others say
              </p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Testimonials
              </h2>
            </motion.div>
          </div>
          <div className="sm:px -mt-16 px-16 flex flex-wrap gap-7 justify-between  ">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  export default SectionWrapper(Feedbacks, "");
