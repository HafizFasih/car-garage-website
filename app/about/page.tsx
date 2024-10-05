import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
      <>
      <main className='h-auto w-full bg-no-repeat bg-cover bg-center flex items-center justify-center text-white md:flex-row flex-col'
      style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg4.jpg)"}}>
        <section className='md:w-1/2 w-[90%] sm:px-8 px-2 py-5 flex flex-col gap-5 md:mt-0 mt-16'>
        <h1 className='txt drop-shadow-txt xs:text-6xl text-5xl uppercase font-bold'>about us</h1>
        <p className='sm:text-sm text-xs'>Welcome to MF-Garage, where passion meets quality! We specialize in offering a diverse selection of high-quality vehicles, ensuring you find the perfect match for your needs and budget. Explore our collection and experience exceptional service as you discover your next car at MF-Garage!</p>
        <button className='sm:w-28 w-24 px-2 py-2 sm:text-sm text-xs bg-red-800 rounded-md font-semibold capitalize'>
          <Link href ="/contact">get in touch</Link>
          </button>
        </section>
        <section className="md:h-screen h-auto md:w-1/2 xxs:w-[90%] w-full py-5 flex md:items-center items-start justify-center">
        <div className="md:h-[65%] sm:h-[60vh] h-[40vh] w-[90%] shadow-car bg-no-repeat bg-center bg-cover bg-[url('/showroom.avif')] rounded-xl"></div>
        </section>
      </main>
      </>
    )
}

export default About
