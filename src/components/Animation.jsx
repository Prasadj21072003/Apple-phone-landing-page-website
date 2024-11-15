export const Animate = (
  tl,
  rotationref,
  rotationstate,
  firsttarget,
  secondtarget,
  animationprops
) => {
  tl.to(rotationref.current.rotation, {
    y: rotationstate,

    duration: 1,
    ease: "power2.inOut",
  });

  tl.to(
    firsttarget,
    {
      ...animationprops,
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(
    secondtarget,
    {
      ...animationprops,
      ease: "power2.inOut",
    },
    "<"
  );
};
