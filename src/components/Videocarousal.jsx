import React, { memo, useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Videocarousal = memo(() => {
  const videoref = useRef([]);
  const videodivref = useRef([]);
  const videospanref = useRef([]);
  const [metadata, setmetadata] = useState([]);
  const [thevideo, setvideo] = useState({
    videoid: 0,
    isplaying: false,
    startplaying: false,
    videoended: false,
    lastvideo: false,
  });

  const { videoended, videoid, lastvideo, isplaying, startplaying } = thevideo;
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoid}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",

        toggleActions: "restart none none none",
        start: "top 35%",
      },
      onComplete: () => {
        setvideo((prev) => ({
          ...prev,
          startplaying: true,
          isplaying: true,
        }));
      },
    });
  }, [videoended, videoid]);

  useEffect(() => {
    if (metadata.length > 3) {
      if (!isplaying) {
        videoref.current[videoid].pause();
      } else {
        if (videoref.current[videoid]) {
          startplaying && videoref.current[videoid].play();
        }
      }
    }
  }, [startplaying, videoid, isplaying, metadata]);

  useEffect(() => {
    // Progressbar of the video
    let currentprogress = 0;
    let spanref = videospanref.current;
    let divref = videodivref.current;

    if (spanref[videoid] && divref[videoid] && videoref.current[videoid]) {
      let anim = gsap.to(spanref[videoid], {
        /* The `onUpdate` function in the code snippet is responsible for updating the progress bar of
      the video being played. Here's a breakdown of what it does: */
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (isplaying) {
            if (progress != currentprogress) {
              currentprogress = progress;

              gsap.to(divref[videoid], {
                width: "50px",
              });

              gsap.to(spanref[videoid], {
                width: `${currentprogress}%`,
                backgroundColor: "white",
              });
            }
          }
        },
        /* The `onComplete` function in the code snippet is responsible for updating the styling of the
    progress bar of the video being played once the animation is completed. */
        onComplete: () => {
          if (isplaying) {
            gsap.to(divref[videoid], {
              width: "10px",
            });

            gsap.to(spanref[videoid], {
              backgroundColor: "gray",
            });
          }
        },
      });

      if (videoid === 0) {
        anim.restart();
      }

      /**
       * The `animupdate` function updates the progress of an animation based on the current time of a
       * video relative to its total duration.
       */
      const animupdate = () => {
        anim.progress(
          videoref.current[videoid].currentTime /
            hightlightsSlides[videoid].videoDuration
        );
      };

      /* The code snippet `if (isplaying) {
          gsap.ticker.add(animupdate);
        } else {
          gsap.ticker.remove(animupdate);
        }` is responsible for adding or removing the `animupdate` function to the GSAP ticker based
  on the value of the `isplaying` state variable. */
      if (isplaying) {
        gsap.ticker.add(animupdate);
      } else {
        gsap.ticker.remove(animupdate);
      }
    }
  }, [videoid, startplaying]);

  /**
   * The function `handleprocess` updates state variables related to video playback based on the event
   * `e` and index `i`.
   */
  const handleprocess = (e, i) => {
    if (e === "video-reset") {
      setvideo((prev) => ({ ...prev, lastvideo: false, videoid: 0 }));
    } else if (e === "lastvideo") {
      setvideo((prev) => ({ ...prev, lastvideo: true }));
    } else if (e === "videoended") {
      setvideo((prev) => ({ ...prev, videoended: true, videoid: i + 1 }));
    } else if (e === "play") {
      setvideo((prev) => ({ ...prev, isplaying: true, startplaying: true }));
    } else if (e === "pause") {
      setvideo((prev) => ({ ...prev, isplaying: false, startplaying: false }));
    }
  };

  return (
    <div className="h-full w-fit  flex flex-col max-md:gap-[0rem] lg:gap-[3rem] 2xl:gap-[1.5rem]  ">
      <div className="h-[70vh] flex items-center w-fit gap-[1rem] max-sm:gap-[0rem]  ">
        {hightlightsSlides.map((l, i) => (
          <div
            key={i}
            id="slider"
            className="   flex justify-center items-center h-fit  w-[90vw] object-fill max-sm:w-[100vw] "
          >
            <div
              key={i}
              className={`${
                videoid === 3
                  ? "xl:translate-x-[-50px] sm:translate-x-[-0px] "
                  : videoid === 1
                  ? "xl:translate-x-[-20px] sm:translate-x-[25px]"
                  : videoid === 0
                  ? "xl:translate-x-[-11px] sm:translate-x-[40px]"
                  : videoid === 2 && "xl:translate-x-[-45px]"
              } rounded-3xl  flex justify-end items-center  w-[90%] max-sm:w-[95%] max-lg:h-[300px]   xl:h-[550px]  lg:h-[500px]  py-[2rem]  relative  bg-black `}
            >
              <video
                key={i}
                onEnded={() => {
                  i === 3
                    ? handleprocess("lastvideo")
                    : handleprocess("videoended", i);
                }}
                ref={(el) => {
                  videoref.current[i] = el;
                }}
                id="video"
                className="rounded-3xl  w-full h-full object-cover "
                playsInline={true}
                muted
                preload="auto"
                onPlay={() =>
                  setvideo((prev) => ({ ...prev, isplaying: true }))
                }
                onLoadedMetadata={(e) => setmetadata((prev) => [...prev, e])}
              >
                <source key={i} src={l?.video} type="video/mp4" />
              </video>
              <div className="z-[1000] font-medium absolute top-[25px] left-[25px] text-[1.5rem] max-xl:text-[1.2rem] max-lg:text-[1rem] max-sm:text-[0.6rem] max-sm:top-[15px] max-sm:left-[15px] text-left">
                {l.textLists.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100vw] flex justify-center items-center  ">
        <div className="z-[1000] items-center relative lg:right-[70px]  flex gap-[15px] h-fit w-fit py-[15px] px-[20px] bg-gray-300 rounded-full">
          {[0, 1, 2, 3].map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                videodivref.current[i] = el;
              }}
              className="bg-gray  h-[10px] w-[10px] rounded-full cursor-pointer relative"
            >
              <span
                key={i}
                ref={(el) => {
                  videospanref.current[i] = el;
                }}
                className="bg-gray  h-full w-full rounded-full absolute left-[0px]"
              />
            </span>
          ))}
          <div>
            <img
              className="cursor-pointer"
              src={lastvideo ? replayImg : !isplaying ? playImg : pauseImg}
              onClick={
                lastvideo
                  ? () => {
                      handleprocess("video-reset");
                    }
                  : !isplaying
                  ? () => {
                      handleprocess("play");
                    }
                  : () => {
                      handleprocess("pause");
                    }
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Videocarousal;
