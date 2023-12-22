import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../Constants";
import { logo, menu, close, T } from "../assets";

const Navbar = () => {
  const [active, setactive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setactive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={T} alt="alt" className="w-9 h-9 object-contain" />
          <p className="text-white font-semibold cursor-pointer text-[18]">
            Tejas <span className="sm:block hidden">Thombare</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18] font-medium cursor-pointer`}
              onClick={() => setactive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center  ">
          <img
            src={toggle ? menu : close  }
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "hidden " : "flex"
            }p-6 bg-gradient-to-l from-black via-gray-900  to-slate-800 absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl  `}
          >
            <ul className="list-none flex flex-col justify-end items-start px-2 gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setactive(link.title)}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
