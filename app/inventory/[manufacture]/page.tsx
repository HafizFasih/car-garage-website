"use client"
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { bentleyCarData, bmwCarData, fordCarData, mercedesCarData } from "../carData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface carDataType {
  name: string;
  price: string;
  features: string;
  pictures: string[];
  route: string;
  brand:string;
}

interface Params {
  manufacture: string;
}

export default function Page({ params }: { params: Params }) {
  const [carArray, setCarArray] = useState<carDataType[]>(bmwCarData);
  const [logo, setLogo] = useState<string>("");
  useEffect(() => {
    switch(params.manufacture){
      case "bmw": setCarArray(bmwCarData);setLogo("/bmw-logo1.png"); break;
      case "bentley": setCarArray(bentleyCarData);setLogo("/bentley-logo1.png"); break;
      case "ford": setCarArray(fordCarData);setLogo("/ford-logo1.png"); break;
      case "mercedes": setCarArray(mercedesCarData);setLogo("/mercedes-logo1.png"); break;
    }
  }, []);
  return (
    <div
      className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg4.jpg)",
      }}
    >
      {/* <Navbar /> */}
      <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
        {params.manufacture} garage
      </h1>
      <div className="flex gap-8 flex-wrap items-center justify-center p-5">
        {carArray.map((val, ind) => (
          <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-car rounded-xl">
          <motion.div 
          initial={{transform:"translateY(100%)"}}
          animate={{transform:"translateY(0%)"}}
          transition={{duration:0.5, delay:ind * 0.15}}
          className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/d.jpg')] border-2 border-black">
            <div className={`relative h-[60%] w-full bg-no-repeat bg-center bg-contain ${val.pictures[0]} rounded-md bg-transparent`}>
            </div>
            <div className="relative">
              <img src={logo} alt="logo" className="absolute right-5 bottom-2 h-12" />
            <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
            <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
            <Link href={`/inventory/${params.manufacture}/${val.route}`}>
            <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
              view car
            </button>
            </Link>
            </div>
          </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
