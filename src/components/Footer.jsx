import React from "react";
import { footerLinks } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.to("#footer", {
      y: 0,
      opacity: 1,
      ease: "power2.inout",
      duration: 1,
      scrollTrigger: {
        trigger: "#footer",
        toggleActions: "restart reverse restart reverse ",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div
      id="footer"
      className="flex flex-col px-4 md:px-[2rem] py-4 space-y-4 md:space-y-6 text-gray-100 h-full"
    >
      <div className="text-[0.7rem] md:text-sm text-left">
        <p className="font-semibold text-gray-100">
          More ways to shop:{" "}
          <span className="underline text-blue">Find an Apple Store</span> or{" "}
          <span className="underline text-blue">other retailer</span> near you.
        </p>
        <p className="font-semibold text-gray-100">Or call 000800-040-1966</p>
      </div>
      <div className="bg-neutral-700 my-4 h-px w-full " />
      <div className="flex   flex-col sm:flex-row justify-between  gap-y-[0.2rem] md:gap-y-[1rem]">
        <p className="font-semibold w-fit  text-gray-100 text-xs md:text-sm text-left">
          Copyright © 2024 Apple Inc. All rights reserved.
        </p>
        <div className=" max-md:text-left flex flex-wrap  md:justify-end w-fit md:w-auto gap-x-[0.1rem]">
          {footerLinks.map((link, i) => (
            <p
              key={link}
              className="font-semibold text-gray-100 text-xs md:text-sm"
            >
              {link}
              {i !== footerLinks.length - 1 && <span className="mx-1">|</span>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*
<div id="footer" className=" flex flex-col opacity-[0]  translate-y-[50px]">
      <div className="text-[0.8rem] text-left">
        <p className="font-semibold text-gray ">
          More ways to shop:{" "}
          <span className="underline text-blue">Find an Apple Store </span>
          or <span className="underline text-blue">other retailer</span> near
          you.
        </p>
        <p className="font-semibold text-gray ">Or call 000800-040-1966</p>
      </div>
      <div className="bg-neutral-700 my-[1rem] h-[1px] w-full" />
      <div className="flex justify-between">
        <div className="">
          <p className="font-semibold text-gray text-[0.8rem]">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
        </div>
        <div className="w-fit flex">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-semibold text-gray text-[0.8rem]">
              {link}{" "}
              {i !== footerLinks.length - 1 && (
                <span className="mx-[0.5rem]"> | </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
*/
