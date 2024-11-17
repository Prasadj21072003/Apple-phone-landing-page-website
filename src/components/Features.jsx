import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

import { ScrollTrigger } from "gsap/all";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoref = useRef();
  useGSAP(() => {
    gsap.from("#featuretitle ", {
      opacity: 0,
      y: 10,
      delay: 0.4,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#featuretitle",
        toggleActions: "restart none none reverse",
        start: "top 85%",
      },
    });
    gsap.from("#featuretext ", {
      opacity: 0,
      y: 10,
      delay: 0.4,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#featuretext",
        toggleActions: "restart none none reverse",
        start: "top 65%",
      },
    });

    if (window.innerWidth > 640) {
      gsap.to(".img-grow", {
        opacity: 1,
        scale: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".img-grow",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
          end: "top 30%",
          scrub: 5.5,
        },
      });
    } else {
      /*  gsap.to(".img-grow", {
        opacity: 1,
        scale: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".img-grow",
          toggleActions: "restart reverse restart reverse",
          start: "top 79%",
          end: "top 25%",
          scrub: 5.5,
        },
      }); */

      gsap.to("#explore1Img", {
        opacity: 1,
        scale: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#explore1Img",
          toggleActions: "restart reverse restart reverse",
          start: "top 70%",
          end: "top 25%",
          scrub: 5.5,
        },
      });

      gsap.to("#explore2Img", {
        opacity: 1,
        scale: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#explore2Img",
          toggleActions: "restart reverse restart reverse",
          start: "top 65%",
          end: "top 25%",
          scrub: 5.5,
        },
      });
    }

    gsap.from(".g_text ", {
      opacity: 0,
      y: 13,
      delay: 0.3,
      duration: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".g_text ",
        toggleActions: "restart none none reverse",
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play none none restart",
        start: "top 70%",
        end: "bottom 40%",
      },
      onComplete: () => {
        videoref.current.play();
      },
    });
  }, []);

  return (
    <div className="bg-zinc  flex flex-col gap-24 py-[3rem] h-full">
      <div
        id="featuretitle"
        className="text-gray-100 text-start px-8 py-4 font-semibold opacity-1 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        <h1>Explore the full story.</h1>
      </div>

      <div className="px-4 md:px-16 lg:px-40">
        <div
          id="featuretext"
          className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left leading-tight pl-4 mb-12"
        >
          <h1>iPhone.</h1>
          <h1>Forged in titanium</h1>
        </div>
        <div className=" h-[300px] mb-[0.5rem]">
          <video
            ref={videoref}
            id="exploreVideo"
            playsInline
            muted
            autoPlay
            className="object-cover h-full w-full object-top"
          >
            <source src={exploreVideo} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mb-[3.5rem]">
          <div className="w-full md:w-1/2   h-[350px] overflow-hidden  ">
            <img
              id="explore1Img"
              src={explore1Img}
              alt="Image 1"
              className=" scale-[0.9]  w-full opacity-0 object-cover img-grow"
            />
          </div>
          <div className="w-full md:w-1/2  h-[350px] overflow-hidden   ">
            <img
              id="explore2Img"
              src={explore2Img}
              alt="Image 2"
              className="scale-[0.9] w-full h-full opacity-0  object-cover img-grow"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:justify-around max-sm:text-[1rem] text-lg md:text-[1.2rem]">
          <div className="w-full md:w-[40%]">
            <p className="text-left font-semibold text-gray-100 g_text">
              iPhone 15 Pro is{" "}
              <span className="text-white">
                the first iPhone to feature an aerospace-grade titanium design
              </span>
              , using the same alloy that spacecrafts use for missions to Mars.
            </p>
          </div>

          <div className="w-full md:w-[43%]">
            <p className="text-left font-semibold text-gray-100 g_text">
              Titanium has one of the best strength-to-weight ratios of any
              metal, making these our{" "}
              <span className="text-white">lightest Pro models ever.</span>{" "}
              You'll notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
// max-xl:h-[275px]
