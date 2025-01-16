import React, { lazy, memo, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/index";

const Hero = memo(() => {
  const [dataload, setdataload] = useState(false);

  const [videosrc, setvideosrc] = useState(
    window.innerWidth < 1024 ? smallHeroVideo : heroVideo
  );
  const handlevideo = () => {
    if (window.innerWidth < 1200) {
      setvideosrc(smallHeroVideo);
    } else {
      setvideosrc(heroVideo);
    }
  };

  /* The `useGSAP` hook in the provided code snippet is utilizing the `gsap` library to animate the
elements with the IDs "title" and "btn". It is using the `gsap.from` method to animate these
elements with specific properties such as opacity, delay, and duration. */
  useGSAP(() => {
    gsap.from("#title ", {
      opacity: 0,

      delay: 2,
      duration: 1.5,
    });
    gsap.from("#btn ", {
      opacity: 0,
      y: 20,
      delay: 2,
      duration: 1.5,
    });
  }, []);

  /* The `useEffect` hook in the provided code snippet is responsible for adding and removing an event
listener for the `resize` event on the window object. */
  useEffect(() => {
    window.addEventListener("resize", handlevideo);

    return () => {
      window.removeEventListener("resize", handlevideo);
    };
  }, [window.innerWidth]);

  return (
    <section className="h-screen max-md:h-fit relative   w-full   flex max-lg:mb-[10rem] max-md:mb-[1rem]  lg:py-[1.125rem] sm:mt-[2rem]   ">
      <div className="w-full flex flex-col gap-[1.125rem] ">
        <p
          id="title"
          className="text-gray-100 opacity-1 text-center max-lg:text-[2.5rem] lg:text-[2.8rem] font-semibold"
        >
          Iphone 15 Pro
        </p>
        <div className="w-full  ">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videosrc}
            className="mx-auto"
          >
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
        <div
          className=" flex flex-col items-center gap-[1rem] opacity-1  "
          id="btn"
        >
          <a
            href="#highlights"
            className=" mx-auto px-[1.5rem] relative left-[2px] py-[0.5rem] rounded-3xl border-blue border bg-blue w-fit hover:text-white hover:bg-black hover:border hover:border-white  duration-500"
          >
            Buy
          </a>
          <p className="mx-auto">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
});

export default Hero;
