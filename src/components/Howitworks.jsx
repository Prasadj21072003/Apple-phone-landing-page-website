import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Howitworks = () => {
  const videoref1 = useRef();

  /* The `useGSAP` hook in the provided code snippet is utilizing the GSAP (GreenSock Animation Platform)
library to create animations triggered by scrolling actions on the webpage. Here's a breakdown of
what the code inside `useGSAP` is doing: */
  useGSAP(() => {
    gsap.from("#chipimg1", {
      scale: 2,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#chipimg1",
        toggleActions: "play none none none",
        start: "top 45%",
      },
    });

    gsap.from("#videoref1", {
      scrollTrigger: {
        trigger: "#videoref1",
        toggleActions: "restart pause restart restart",
        start: "top 50%",
      },
      onComplete: () => {
        videoref1.current.play();
      },
    });

    gsap.to(".g_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inout",
      duration: 1,
      scrollTrigger: {
        trigger: ".g_fadeIn",
        toggleActions: "restart reverse restart reverse ",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className=" xl:px-[4rem] max-md:px-[1rem] md:px-[2.5rem]  h-full  ">
      <div className=" h-full ">
        <div className="w-full  flex justify-center ">
          <img id="chipimg1" src={chipImg} alt="" height={200} width={200} />
        </div>
        *
        <div className="flex flex-col items-center mt-12 md:mt-[3rem] gap-6 md:gap-[2.5rem] text-center">
          <h2 className="font-semibold text-4xl md:text-[5rem] leading-tight md:leading-[4.5rem] ">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="text-gray-100 font-semibold text-lg md:text-[1.7rem]">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="relative   h-fit mt-[7rem] gap-[2.5rem] max-md:mt-[4rem]  flex justify-center">
          <div className="relative object-cover  flex justify-center items-center   overflow-hidden max-sm:w-[600px] max-sm:h-[160px] max-sm:rounded-[2rem] sm:w-[600px] sm:h-[300px] sm:rounded-[1rem] md:w-[900px] md:h-[340px] md:rounded-[4rem] lg:w-[900px] lg:h-[390px] xl:w-[1100px] xl:h-[480px] 2xl:w-[1200px] 2xl:h-[550px] xl:rounded-[5.2rem] ">
            <div className="relative    h-[100%] w-[100%]  object-cover  flex justify-center items-center ">
              <img
                src={frameImg}
                alt=""
                className=" absolute h-[100%] w-[100vw] max-sm:w-[95%] max-sm bg-transparent z-[10]    "
              />
            </div>

            <video
              id="videoref1"
              ref={videoref1}
              playsInline
              muted
              autoPlay
              className=" absolute max-sm:w-[93%] mx-auto my-auto object-cover h-[95%] left-[0px]  right-[0px] rounded-[8vw]  md:w-[97.5%]  sm:rounded-[3rem]  md:rounded-[4rem]  xl:rounded-[5.2rem]  2xl:rounded-[5.5rem] 2xl:h-[97%] "
            >
              <source src={frameVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="text-gray font-semibold text-center mt-[1rem] md:mt-[2rem] text-lg md:text-xl">
            Honkai: Star Rail
          </p>
        </div>
        <div className="w-full  mt-8 md:mt-[2rem] ">
          <div className="flex  md:px-[1.2rem]  flex-col md:flex-row text-left justify-between text-[1rem] gap-4 md:gap-0">
            <p className="text-gray-100 font-semibold  md:w-[16%] lg:w-[10%] g_fadeIn ">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="text-gray-100 font-semibold  md:w-[55%] g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>

            <div className="font-semibold w-full  md:w-[12%] lg:w-[8%] flex flex-col gap-2 md:gap-[0.5rem] g_fadeIn  text-left  md:text-left">
              <p className="text-gray-100">New</p>
              <p className="font-bold text-2xl md:text-[2.5rem] leading-tight md:leading-[2.6rem]">
                Pro-class GPU
              </p>
              <p className="text-gray-100">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
