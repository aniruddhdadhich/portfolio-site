import React, { useState, UseEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { linkgit, navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aniruddh &nbsp;
            <span className="sm:block hidden">Dadhich</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}

          {linkgit.map((item, index) => {
            return (
              <li
                key={index}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <img
                    src={item.icon}
                    alt="img"
                    className="h-[30px] w-[30px] mr-2 object-contain "
                  />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
            {linkgit.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px] "
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
