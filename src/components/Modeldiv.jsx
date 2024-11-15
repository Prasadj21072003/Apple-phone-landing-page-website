import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
//import Model from "./Model";
const Model = lazy(() => import("./Model"));

import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { Animate } from "./Animation";
import { ScrollTrigger } from "gsap/all";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const Modeldiv = () => {
  const [size, setsize] = useState("small");
  const [model, setmodel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  //camera control for the model view
  const cameracontrolsmall = useRef();
  const cameracontrollarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallrotation, setsmallrotation] = useState(0);
  const [largerotation, setlargerotation] = useState(0);

  /* This code snippet is utilizing GSAP (GreenSock Animation Platform) for animations in a React
component. */
  useGSAP(() => {
    gsap.from("#viewtitle ", {
      opacity: 0,
      y: 13,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: "#viewtitle",
        toggleActions: "play none none none",
        start: "top 90%",
      },
    });
  }, []);

  /* This code snippet is using GSAP (GreenSock Animation Platform) to create a timeline (`tl`) and an
 effect that runs when the `size` state changes. */
  const tl = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      Animate(tl, small, smallrotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    } else {
      Animate(tl, large, largerotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  return (
    <div id="view" className="flex flex-col gap-[1rem] h-full">
      <div>
        <p
          id="viewtitle"
          className="text-gray-100 px-[4rem] opacity-[1] text-left max-lg:text-[2.5rem] lg:text-[2.8rem] font-semibold"
        >
          Take a Closer Look
        </p>
      </div>
      <div
        id="modeldiv"
        className="w-full h-fit flex flex-col items-center mt-[1.5rem] "
      >
        <div className="w-full h-[90vh] max-md:h-[75vh] relative overflow-hidden flex  ">
          <Model
            i={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameracontrolsmall}
            setRotationState={setsmallrotation}
            item={model}
            size={size}
          />
          <Model
            i={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameracontrollarge}
            setRotationState={setlargerotation}
            item={model}
            size={size}
          />

          <Canvas
            className="w-full h-full  "
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            eventSource={document.getElementById("root")}
          >
            <View.Port />
          </Canvas>
        </div>
        <div className="  w-full flex justify-center items-center">
          <div className="flex flex-col gap-[20px] w-fit h-fit">
            <div className="w-full">
              <p className="text-light relative ">{model.title}</p>
            </div>
            <div className="flex gap-[1rem]  ">
              <div className="flex gap-[15px] max-sm:gap-[10px] bg-gray-300 rounded-full px-[2rem] py-[1rem] ">
                {models.map((l, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: l.color[0] }}
                    className={`w-[30px]  h-[30px] rounded-full  cursor-pointer ${
                      model.color === l.color
                        ? "border-[2px] border-white"
                        : "border-none"
                    }`}
                    onClick={() => setmodel(l)}
                  />
                ))}
              </div>
              <div className="flex items-center">
                {
                  <div className="flex gap-[15px] max-sm:gap-[10px]">
                    {sizes.map((l) => (
                      <button
                        onClick={() => {
                          setsize(l.value);
                        }}
                        key={l.value}
                        className={`border w-[50px] h-[50px] cursor-pointer rounded-full ${
                          size === l.value
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeldiv;
