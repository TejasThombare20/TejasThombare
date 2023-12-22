  import { motion } from "framer-motion";
  import React from "react";
  import { useState, useRef } from "react";
  import emailjs from "@emailjs/browser";
  import { Earth } from "./canvas";
  import { SectionWrapper } from "../HOC";
  import { slideIn } from "../utils/motion";

  const Contact = () => {
    const formRef = useRef();

    const [loading, setloading] = useState(false);
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
    // template_2yggq8o
    // service_ywmkuuk
    // LQjeCpoD2h-C8RdJz
    const handleSubmit = (e) => {
      e.preventDefault();
      setloading(true);
      emailjs.send("service_ywmkuuk", "template_2yggq8o", 
      {from_name : form.name ,
      to_name : 'Tejas Thombare',
      from_email : form.email,
      to_email :  'otherfaltuwork23@gmail.com',
      message :  form.message
      },'LQjeCpoD2h-C8RdJz').then(()=>{
        setloading(false);
        alert('Thank You I will get back to you as soon as possible'); 
      }) 

      setForm({
        name : "",
        email : "",
        message : ""
      }) 
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };

    return (
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="text-[14px] sm:text-[18px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h2>
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 "
          >
            <label htmlFor="" className="flex flex-col ">
              <span className="text-white font-medium mb-4 ">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name ? "
                required
                className="bg-tertiary py-4  px-6
              placeholder:text-secondary first-letter:text-white rounded-lg outline-none border-none font-medium "
              />
            </label>

            <label htmlFor="" className="flex flex-col ">
              <span className="text-white font-medium mb-4 ">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email ? "
                required
                className="bg-tertiary py-4  px-6
              placeholder:text-secondary first-letter:text-white rounded-lg outline-none border-none font-medium "
              />
            </label>

            <label htmlFor="" className="flex flex-col ">
              <span className="text-white font-medium mb-4 ">Your email</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say ? "
                required
                className="bg-tertiary py-4  px-6
              placeholder:text-secondary first-letter:text-white rounded-lg outline-none border-none font-medium "
              />
            </label>
            <button
              type="submit "
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
        >
          <Earth />
        </motion.div>
      </div>
    );
  };

  export default SectionWrapper(Contact, "contact");
