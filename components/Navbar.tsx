"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "inventory", link: "/inventory" },
  { name: "contact", link: "/contact" },
  { name: "cart", link: "/cart" },
];

const Navbar = () => {
  const [index, setIndex] = useState(-1);
  const [height, setHeight] = useState(false);
  const [elem, setElem] = useState(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setScrollingDown(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  const navbarElem = (
    <>
      {navLinks.map((val, ind) => (
        <Link href={val.link} key={ind}>
          <li
            className={`relative uppercase text-sm px-4 font-semibold h-[45px] flex items-end justify-start pb-1 cursor-pointer ${
              val.name === "home" && "tracking-tighter"
            }`}
            onMouseEnter={() => setIndex(ind)}
            onMouseLeave={() => setIndex(-1)}
            onClick={() => {window.innerWidth <= 640 && animateSlider()}}
          >
            {val.name}
            <div
              className="h-[2px] duration-300 bottom-0 bg-red-800 absolute"
              style={{
                width: index === ind ? `${val.name.length * 9}px` : `0px`,
              }}
            ></div>
          </li>
        </Link>
      ))}
    </>
  );
  const animateSlider = () => {
    setHeight((val) => !val);
    if (elem) {
      setElem(false);
    } else {
      setTimeout(() => {
        setElem(true);
      }, 500);
    }
  };
  return (
    <div className={`fixed top-0 z-[1000] border-b-[1px] border-zinc-800 h-16 w-full backdrop-blur-glass text-red-800 flex justify-between items-center px-8 duration-500 ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
      <div
        className={`logo font-bold text-xl text-red-800 uppercase`}
      >
        MF-Garage
      </div>
      <ul className="h-full sm:flex hidden">{navbarElem}</ul>
      <div
        className="h-6 w-8 cursor-pointer sm:hidden flex flex-col items-start justify-between"
        onClick={() => animateSlider()}
      >
        <div
          className={`h-[2px] w-full bg-red-800 rounded-full [transform-origin:left] duration-300 ${
            height ? "rotate-[43deg]" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-[2px] w-full bg-red-800 rounded-full duration-300 ${
            height ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"
          }`}
        ></div>
        <div
          className={`h-[2px] w-full bg-red-800 rounded-full [transform-origin:left] duration-300 ${
            height ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>
      <div
        className={`absolute right-0 bottom-0 translate-y-full flex flex-col items-center justify-start duration-500 ${
          height ? "h-60" : "h-0"
        } w-32 backdrop-blur-glass bg-black/80 rounded-bl-md`}
      >
        {elem && navbarElem}
      </div>
    </div>
  );
};

export default Navbar;
