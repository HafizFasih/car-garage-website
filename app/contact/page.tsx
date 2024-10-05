"use client";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const [btnHover, setbtnHover] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = React.useState("");

  const sumbitHandler = async (event: any) => {
    setName("");
    setEmail("");
    setMsg("");
    setBtnClick(true);
    event.preventDefault();
    setTimeout(() => {
      setBtnClick(false);
    }, 1500);

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
        className="h-auto w-full bg-no-repeat bg-center bg-cover flex flex-col pt-16 sm:px-0 px-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg4.jpg)",
        }}
      >
        <h1 className="txt xs:text-6xl text-5xl drop-shadow-txt uppercase w-full text-center py-5 font-bold xxs:translate-y-0 translate-y-5">
          contact us
        </h1>
        <div className="h-auto w-full flex md:flex-row flex-col items-center">
          {/* LEFT SECTION */}
          <section className="h-auto md:w-1/2 xs:w-4/5 w-full flex items-center justify-center">
            <div className="h-auto md:w-[90%] w-full bg-black shadow-car rounded-lg text-white px-4 py-5 flex flex-col my-10 gap-2 border-[0.5px] border-red-950 ">
              <h1 className="xs:text-4xl text-3xl capitalize font-semibold">
                contact details
              </h1>
              <p className="xs:text-lg text-sm text-white/60 font-semibold">
                Feel free to contact us
              </p>
              <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
                <b>Name:</b> Muhammad Fasih
              </h2>
              <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
                <b>Email:</b> programmer.fasih.18@gmail.com
              </h2>
              <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
                <b>Phone:</b> +92 310 2137075
              </h2>
              <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
                <b>Address: </b> Karachi, Pakistan
              </h2>
              <div className="h-16 xs:mt-8 mt-2 w-full flex gap-3 items-center justify-center">
                <span className="relative h-10 w-10  inline-block overflow-hidden">
                  <a
                    href="https://www.linkedin.com/in/muhammad-fasih-99023b314/"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaLinkedin className="h-full w-full rounded-sm text-red-800/50" />
                </span>
                <span className="relative h-10 w-10  inline-block overflow-hidden">
                  <a
                    href="https://www.facebook.com/"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaFacebookSquare className="h-full w-full rounded-sm text-red-800/50" />
                </span>
                <span className="relative h-10 w-10  inline-block overflow-hidden">
                  <a
                    href="https://www.instagram.com/itz._.fasih_/?__pwa=1"
                    className="absolute h-full w-full"
                    target="_blank"
                  ></a>
                  <FaInstagram className="h-full w-full rounded-sm text-red-800/50" />
                </span>
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
                    className="text-sm mt-2 h-10 w-28 rounded-md text-red-800/50 border-red-800/50 font-bold  border-2 uppercase flex gap-2 items-center justify-center overflow-hidden"
                    onMouseEnter={() => setbtnHover(true)}
                    onMouseLeave={() => setbtnHover(false)}
                    type="submit"
                  >
                    <h3>send</h3>
                    <span className="h-5 w-5 flex items-center justify-center">
                      <MdSend
                        className={`h-full w-full ${
                          btnHover && "scale-125 duration-300"
                        }  ${
                          btnClick && "translate-x-20 opacity-0 duration-700"
                        }`}
                      />
                    </span>
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

export default Contact;
