import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  return (
    <nav>
      {/*To-do*/}
      <div>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />{" "}
          {/* Generate logo from logo.com */}
          <p>
            Adrian <span className="sm:block hidden">| Javascript Mastery</span>{" "}
            {/*problem with css*/}
          </p>
        </Link>
        {/* <p className="text-red-500">asdsa</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
