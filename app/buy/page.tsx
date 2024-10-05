"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiHandshake } from "react-icons/pi";
import Link from "next/link";
interface carDataType {
  name: string;
  price: string;
  features: string;
  pictures: string[];
  route: string;
  brand: string;
}

const Buy = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [data, setData] = useState<carDataType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartData = JSON.parse(localStorage.getItem("cartData")!);
      if (cartData) {
        setData(cartData);
      }
    }
  }, []);

  const setTotal = () => {
    let total: number = 0;
    data.forEach((val: carDataType) => {
      const purePrice: number = Number(
        val.price.slice(1).replace(",", "")
      );
      total += purePrice;
    });
    const priceArr: string[] = total.toString().split("").reverse();
    let count: number = 0;
    let price: string = "";
    priceArr.forEach((val) => {
      if (count === 3) {
        price += ",";
        price += val;
        count = 1;
      } else {
        ++count;
        price += val;
      }
    });
    const finalAmount: string = "$"+price.split("").reverse().join("");
    return finalAmount;
  };

  const emptyCarData = () => {
    try {
      localStorage.setItem("cartData", "[]");
    } catch (error) {
      console.error(error);
    }
    setOrderPlaced(false);
  };

  const sumbitHandler = async (event: any) => {
    setOrderPlaced(true);
    setName("");
    setEmail("");
    setMsg("");
    setAddress("");
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cdbf0204-4b37-49e1-8597-311e3d5697b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <main
        id="contact"
        className="relative h-auto w-full bg-no-repeat bg-center bg-cover flex flex-col pt-16 sm:px-0 px-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg4.jpg)",
        }}
      >
        <div
          className={`fixed xs:h-[400px] h-[350px] xs:w-[350px] w-[300px] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-no-repeat bg-center bg-cover ${orderPlaced ? "flex" : "hidden"} flex-col items-center justify-between text-white py-8 px-4 shadow-car`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg4.jpg)",
          }}
        >
          <div className="flex flex-col items-center justify-start w-full">
            <h1 className="txt font-bold text-4xl uppercase mb-2">
              mf-garage
            </h1>
            <h2 className="opacity-60 xs:mb-5 mb-2 xs:text-[16px] text-[14px]">
              Driven by excellence, fueled by passion.
            </h2>
            <p className="uppercase text-red-800">thank you for choosing us</p>
            <p className="text-white xs:text-xl text-lg text-center">
              Your order has been placed successfully.
            </p>
            <span className="h-14 w-14 mt-4">
                <PiHandshake className="h-full w-full text-white"/>
            </span>
          </div>
          <Link href="/">
          <button className="text-xs font-semibold uppercase bg-red-800 rounded-md py-2 px-4"
          onClick={() => emptyCarData()}
          >close</button>
          </Link>
        </div>
        <div
          className={`fixed h-screen w-screen backdrop-blur-glass z-[80] ${orderPlaced ? "flex" : "hidden"}`}
        ></div>
        <h1 className="txt xs:text-6xl text-5xl drop-shadow-txt uppercase w-full text-center py-5 font-bold xxs:translate-y-0 translate-y-5">
          complete order
        </h1>
        <div className="h-auto w-full flex md:flex-row flex-col items-center">
          {/* LEFT SECTION */}
          <section className="h-auto md:w-1/2 xs:w-4/5 w-full flex items-center justify-center">
            <div className="h-screen md:w-[90%] relative w-full bg-black shadow-car rounded-lg text-white px-4 py-5 flex flex-col my-10 gap-2 border-[0.5px] border-red-950 ">
              <h1 className="xs:text-4xl text-3xl capitalize font-semibold">
                MF-Store
              </h1>
              <p className="xs:text-sm text-xs text-white/60 font-semibold">
                Driven by excellence, fueled by passion.
              </p>
              <h1 className="text-white">
                <b>Total Amount:</b> {setTotal()}
              </h1>
              <div className="flex flex-wrap overflow-y-auto items-center justify-center gap-5 py-5 px-4">
                {data.map(
                  (val: carDataType, ind: number) => (
                    <div
                      key={ind}
                      className="h-[220px] w-[180px] overflow-hidden shadow-car rounded-xl"
                    >
                      <motion.div
                        initial={{ transform: "translateY(100%)" }}
                        animate={{ transform: "translateY(0%)" }}
                        transition={{ duration: 0.5, delay: ind * 0.15 }}
                        className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/d.jpg')] border-2 border-black"
                      >
                        <div
                          className={`relative h-[60%] w-full bg-no-repeat bg-center bg-contain ${val.pictures[0]} rounded-md bg-transparent`}
                        ></div>
                        <div className="relative">
                          <h1 className="text-xs font-semibold my-2">
                            {val.name}
                          </h1>
                          <h2 className="text-xs my-2 text-white/70">
                            {val.price}
                          </h2>
                        </div>
                        <img
                          src={`/${val.brand}-logo1.png`}
                          className="absolute bottom-2 left-5 mt-8 h-[10%]"
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* RIGHT SECTION */}
          <section className="h-auto md:w-1/2 xs:w-4/5 w-full py-10 flex items-center justify-center text-white ">
            <div className="h-full md:w-[90%] px-0 py-[4px] w-full bg-black shadow-car flex items-center justify-center rounded-lg border-[0.5px] border-red-950 xxs:translate-y-0 -translate-y-10">
              <form
                onSubmit={sumbitHandler}
                className="h-[98.5%] w-[98.5%] bg-black rounded-lg px-10 py-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xl capitalize font-semibold"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(data) => setName(data.target.value)}
                    required
                    className="rounded-md h-14 w-full bg-zinc-900 px-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className=" text-xl capitalize font-semibold"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(data) => setEmail(data.target.value)}
                    required
                    className="rounded-md h-14 w-full bg-zinc-900 px-2 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className=" text-xl capitalize font-semibold"
                  >
                    address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(data) => setAddress(data.target.value)}
                    required
                    className="rounded-md h-14 w-full bg-zinc-900 px-2 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className=" text-xl capitalize font-semibold"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={msg}
                    onChange={(data) => setMsg(data.target.value)}
                    required
                    className="rounded-md sm:h-32 h-24 w-full bg-zinc-900 px-2 py-1"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="text-xs py-2 px-4 rounded-md text-red-800/50 border-red-800/50 font-bold  border-2 uppercase flex gap-2 items-center justify-center overflow-hidden"
                    type="submit"
                  >
                    place order
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Buy;
