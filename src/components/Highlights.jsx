import React from "react";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Videocarousal from "./Videocarousal";

const Highlights = () => {
  /* The `useGSAP` hook in the `Highlights` component is utilizing the `@gsap/react` library to animate
certain elements using GSAP (GreenSock Animation Platform). */
  useGSAP(() => {
    gsap.from("#highlightstitle ", {
      opacity: 0,
      y: 10,
      delay: 0.6,
      duration: 0.8,
    });
    gsap.from(".link", {
      opacity: 0,
      y: 20,
      delay: 1,
      duration: 0.3,
      stagger: 0.35,
    });
  }, []);

  return (
    <div
      id="highlights"
      className="w-full relative h-full pb-[4rem] mt-[3rem]  bg-zinc  flex flex-col max-md:gap-[0rem] md:gap-[2rem] lg:gap-[3rem]  "
    >
      <div className="flex justify-between  lg:pl-[6rem] lg:pr-[1.5rem] xl:px-[3rem] 2xl:px-[4rem] items-center max-md:flex-col max-md:items-start md:px-[4rem]  max-sm:px-[2rem]">
        <div
          id="highlightstitle"
          className="text-gray max-lg:text-[2.5rem] lg:text-[2.8rem] max-sm:text-[1.5rem]  text-start   font-semibold opacity-1"
        >
          <h1>Get the highlights.</h1>
        </div>
        <div className="flex gap-[1rem] text-blue relative max-md:left-[5px]">
          <p
            href=""
            className="cursor-pointer flex gap-[6px] justify-between link  opacity-1"
          >
            Watch the film
            <img src={watchImg} alt="" className="relative top-[1.5px]" />
          </p>
          <p
            href=""
            className="cursor-pointer flex gap-[6px] justify-between link opacity-1"
          >
            Watch the event
            <img src={rightImg} alt="" className="relative top-[1.5px]" />
          </p>
        </div>
      </div>
      <div className=" h-full">
        <Videocarousal />
      </div>
    </div>
  );
};

export default Highlights;
