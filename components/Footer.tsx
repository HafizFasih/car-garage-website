import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const topSearchers = [
  {carName: "BMW X6", link: "/inventory/bmw/bmw-x6"},
  {carName: "Bentley Continental GT", link: "/inventory/bentley/bentley-continental-gt"},
  {carName: "Ford Mustang", link: "/inventory/ford/ford-mustang"},
  {carName: "Mercedes-Benz S-Class", link: "/inventory/mercedes/mercedes-benz-s-class"},
]

const Footer = () => {
  return (
    <footer className="relative z-50 h-auto w-full bg-black text-white/60 shadow-foot px-2">
      <div className="h-[70%] w-full flex flex-wrap items-start justify-center gap-10 border-b-[1px] border-zinc-800 px-5x">

        
        <div className="h-full w-[42vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">MF-Store</h1>
          <p className="pr-4">
          Driven by excellence, fueled by passion.
          </p>
        </div>


        <div className="h-full w-[42vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">Trending Searches</h1>
          <ul>
            {topSearchers.map((val, ind) => (
              <Link key={ind} href={val.link}>
              <li className="my-1 uppercase text-sm hover:text-red-900">{val.carName}</li>
              </Link>
            ))}
          </ul>
        </div>


        <div className="h-full w-[42vh] flex items-start py-7 flex-col">
            <h1 className="font-bold text-2xl capitalize">Quick Links</h1>
            <ul>
            {["home", "about", "contact", "inventory", "cart"].map((val, ind) => (
              <Link key={ind} href={`/${ind > 0 ? val : ""}`}>
                <li className="my-1 uppercase text-sm hover:text-red-900">{val}</li>
              </Link>
            ))}
            </ul>
        </div>


        <div className="h-full w-[42vh] flex items-start py-7 flex-col">
            <h1 className="font-bold text-2xl capitalize ">Follow us</h1>
            <div className="h-16 w-full flex gap-2 items-center justify-start">
                <span className="relative h-10 w-10 inline-block overflow-hidden">
                  <a
                    href="https://www.linkedin.com/in/muhammad-fasih-99023b314/"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaLinkedin className="h-full w-full rounded-sm text-white/60" />
                </span>
                <span className="relative h-10 w-10 inline-block overflow-hidden">
                  <a
                    href="https://www.facebook.com/"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaFacebookSquare className="h-full w-full rounded-sm text-white/60" />
                </span>
                <span className="relative h-10 w-10 inline-block overflow-hidden">
                  <a
                    href="https://www.instagram.com/itz._.fasih_/?__pwa=1"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaInstagram className="h-full w-full rounded-sm text-white/60" />
                </span>
            </div>
        </div>

      </div>
      <div className="w-full py-5 px-5 flex items-center justify-center">
        <h1 className="xs:text-sm text-xs text-center">&copy; 2024 Muhammad Fasih Garage (MF-Garage). All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
