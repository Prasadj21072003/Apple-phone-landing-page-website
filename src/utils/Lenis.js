import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

const lenisfunction = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default lenisfunction;
