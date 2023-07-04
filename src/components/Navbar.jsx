import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const LeftNavbar = () => {
    return (
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img
          src="./ik_logo.png"
          alt="logo"
          className="sm:w-9 w-6 sm:h-9 h-6 object-contain"
        />
        <p className="flex text-[18px] items-center justify-center">
          Imran &nbsp;
          <span className="sm:block hidden h-full">
            |&nbsp;&nbsp;Software Engineer
          </span>
        </p>
      </Link>
    );
  };

  const RightNavbar = () => {
    return (
      <ul className="sm:flex hidden gap-10 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            }
              } hover:text-white`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={`${styles.paddingX} w-full   py-5 fixed bg-[#050815] z-20 `}>
      {/*"w-full flex items-center py-5 fixed top-0 z-20"*/}
      <div className="flex justify-between items-center py-2">
        <LeftNavbar />
        <RightNavbar />
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7"
            onClick={() => setToggle((prevState) => !prevState)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-100 rounded-xl `}
          >
            <ul className={`flex flex-col gap-4`}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
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
