"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
export default function Home() {
  const [lights, setLights] = useState(false);
  const [start, setStart] = useState(true);
  const aboutRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      window.innerWidth > 900 && setLights(true);
    }, 1300);
    setTimeout(() => {
      setStart(false)
    }, 400);    
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.innerWidth < 900) {
          setLights(true); 
        }else{
          setLights(false)
        }
      },
      { threshold: 0.1 } 
    );
  
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <>
    <div className="relative h-auto w-full bg-black overflow-hidden flex md:flex-row flex-col-reverse">
      <div className="md:absolute relative h-screen w-full">
      <div className={`flex bg-black items-center justify-center md:w-[60vw] sm:w-[900px] w-[150vw] h-screen absolute top-1/2 -translate-y-1/2 md:right-0 left-1/2 md:-translate-x-0 -translate-x-1/2 ${start && "scale-[0]"} duration-1000 cursor-pointer`}
       onMouseEnter={() => setLights((val) => !val)}
       onClick={() => setLights(val => !val)}
       >
        <img
          src={"/with-lights.png"}
          alt=""
          className={`w-full z-10 duration-1000 absolute`}
        />
        <img
          src={"/without-lights.png"}
          alt=""
          className={`w-full z-50 absolute ${
            lights ? "opacity-0 duration-[2s]" : "opacity-100"
          }`}
        />
        <div className={`h-full w-full absolute top-0 right-0 z-20 flex`}>
        <div className={`h-[60%] w-1/2 bg-black/90 ${lights ? "-translate-x-full duration-[1s]" : "translate-x-0"} `}></div>
        <div className={`h-[60%] w-1/2 bg-black/90 ${lights ? " translate-x-full duration-[1s]" : "translate-x-0"}`}></div>
        <div ref={aboutRef} className="absolute bottom-0 h-2/5 w-2/5"></div>
        </div>
      </div>
      </div>
      <div className={`relative md:h-screen h-auto mmd:w-[600px] md:w-[500px] w-screen md:mt-0 mt-12 ${start && "-translate-x-[120%]"} duration-700 py-20 px-10 bg-no-repeat bg-cover bg-center`}
       style={{backgroundImage:"linear-gradient(to right, rgb(55 9 9 / 70%), rgb(0 0 0 / 70%)), url(/bg4.jpg)"}}>
        <h1 className="txt sm:drop-shadow-txt drop-shadow-txt2 sm:text-6xl text-4xl font-bold uppercase z-10 relative md:mt-20 leading-tight tracking-tighter md:my-3">Welcome to <br /> MF-garage</h1>
        <h2 className="sm:text-3xl xxs:text-xl text-lg  md:mt-0 mt-3 mb-5 text-white/60 font-semibold">Driven by excellence, fueled by passion.</h2>
        <button className="sm:py-2 py-1 sm:px-5 px-3 sm:rounded-xl rounded-md smt:ext-lg text-sm font-bold text-red-800 uppercase border-red-800 border-2 ">
         <Link href="/inventory" className="h-full w-full">shop now</Link>
          </button>
      </div>
    </div>
    <About/>
    <Contact/>
    </>
  );
}
