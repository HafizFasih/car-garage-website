"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Inventory = () => {
  const [blur, setBlur] = useState(false);
  const [index, setIndex] = useState(-1);

  const [lights, setLights] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLights(true)
    }, 1300);
  }, []);

  const carData = [
    {
      car: "bg-[url('/bmw-car.jpg')]",
      logo: "bg-[url('/bmw-logo.png')]",
      link: "/inventory/bmw",
    },
    {
      car: "bg-[url('/bentley-car.webp')]",
      logo: "bg-[url('/bent-logo.png')]",
      link: "/inventory/bentley",
    },
    {
      car: "bg-[url('/ford-car.jpeg')]",
      logo: "bg-[url('/ford-logo.png')]",
      link: "/inventory/ford",
    },
    {
      car: "bg-[url('/mercedes-car.webp')]",
      logo: "bg-[url('/merc-logo.png')]",
      link: "/inventory/mercedes",
    },
  ];
  return (
    <div className="w-full bg-black pt-16">
      <div
        className="relative w-full xxs:px-5 px-0 py-8 bg-black overflow-hidden flex flex-col gap-5 items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bg4.jpg)",
        }}
      >
        <h1 className="txt text-red sm:text-7xl xxs:text-5xl text-4xl text-center uppercase font-bold text-transparent drop-shadow-txt bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-red-800">
          Choose your car brand
        </h1>
        <div className="flex gap-4 flex-wrap items-center justify-center overflow-hidden py-10">
          {carData.map((val, ind) => (
            <motion.div
              key={ind}
              initial={{
                transform:
                  blur && ind === index ? "translateY(0%)" : "translateY(120%)",
              }}
              animate={{
                transform:
                  blur && ind === index ? "translateY(-10%)" : "translateY(0%)",
              }}
              transition={{
                delay: blur && ind === index ? 0 : ind * 0.1,
                duration: blur && ind === index ? 0.4 : 0.5,
              }}
              className={`relative h-96 w-72 bg-black shadow-car border-black border-2 rounded-xl cursor-pointer bg-no-repeat bg-center bg-cover duration-700 ${
                val.car
              } ${blur && ind !== index && `blur-[8px]`} overflow-hidden`}
              onMouseEnter={() => {
                setBlur(true);
                setIndex(ind);
              }}
              onMouseLeave={() => {
                setBlur(false);
                setIndex(-1);
              }}
             >
              <div
                className={`absolute h-full w-full bg-no-repeat bg-black/80 top-0 left-0 bg-center bg-contain ${val.logo}`}
              ></div>
              <div
                className={`absolute bottom-0 h-[40%] w-full bg-black/80 flex flex-col gap-5 items-center justify-center ${
                  blur && ind === index ? "translate-y-0" : "translate-y-[150%]"
                }  duration-500`}
                  onMouseLeave={() => setLights((val) => !val)}
                  onClick={() => setLights((val) => !val)}
              >
                <div className="relative h-[40%] w-full">
                  <div
                    className={`flex items-center justify-center w-full h-full absolute top-1/2 right-0 -translate-y-1/2 duration-1000 cursor-pointer`}
                    onMouseEnter={() => setLights(true)}
                  >
                    <img
                      src={"/with-lights.png"}
                      alt=""
                      className={`w-1/2 z-10 duration-1000 absolute`}
                    />
                    <img
                      src={"/without-lights.png"}
                      alt=""
                      className={`w-1/2 z-50 absolute ${
                        lights ? "opacity-0 duration-[2s]" : "opacity-100"
                      }`}
                    />
                    <div
                      className={`h-full w-full absolute top-0 right-0 z-20 flex`}
                    >
                      <div
                        className={`h-[60%] w-1/2 bg-black/90 ${
                          lights
                            ? "-translate-x-full duration-[1s]"
                            : "translate-x-0"
                        } `}
                      ></div>
                      <div
                        className={`h-[60%] w-1/2 bg-black/90 ${
                          lights
                            ? " translate-x-full duration-[1s]"
                            : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
                <Link href={val.link}>
                <button className="bg-red-900 z-[100] py-1 px-3 rounded-md uppercase font-semibold text-sm text-white">
                  visit garage
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
