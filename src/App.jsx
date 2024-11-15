import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";
import lenisfunction from "./utils/Lenis";
import Loader from "./components/Loader";
import Modeldiv from "./components/Modeldiv";
import * as Sentry from "@sentry/react";
//const Modeldiv = lazy(() => import("./components/Modeldiv"));

function App() {
  useEffect(() => {
    lenisfunction();
  }, []);

  return (
    <main className="bg-black h-full text-white relative   max-sm:py-[1rem] flex flex-col gap-[0.2rem] overflow-x-hidden ">
      <div className="lg:px-[7rem] h-full">
        <Nav />
      </div>
      <div className="lg:px-[7rem] mb-[2rem] flex items-center justify-center h-full">
        <Hero />
      </div>
      <div className="2xl:px-[7rem] lg:px-[4rem]  bg-zinc h-full">
        <Highlights />
      </div>
      <div className=" 2xl:px-[7rem] lg:px-[4rem] py-[1rem] mt-[5rem] h-full ">
        <Modeldiv />
      </div>
      <div className="2xl:px-[7rem] lg:px-[4rem] py-[1rem] mt-[10rem] h-full">
        <Features />
      </div>
      <div className="2xl:px-[7rem] lg:px-[4rem]  mt-[15rem] h-full ">
        <Howitworks />
      </div>
      <div className="2xl:px-[10.3rem] xl:px-[7.2rem] lg:px-[6rem]  mt-[5rem] mb-[0.1rem] h-full">
        <Footer />
      </div>
    </main>
  );
}

export default Sentry.withProfiler(App);
