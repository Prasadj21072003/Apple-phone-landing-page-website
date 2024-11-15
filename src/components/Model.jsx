import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import Lights from "./Lights";

const Iphone = React.lazy(() => import("./Iphone"));
import * as THREE from "three";
import Loader from "./Loader";

const Model = ({
  i,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  const [isloading, setisloading] = useState(true);

  return (
    <View
      i={i}
      id={gsapType}
      className={`   h-full  w-full absolute   ${
        i === 2 ? "right-[-100%]" : ""
      } `}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        rotateSpeed={0.9}
        enableZoom={false}
        enablePan={false}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${i === 1}? "small" : "large" `}
        position={[0, 0, 0]}
      >
        {
          <Suspense
            fallback={
              <Html className=" w-full h-full flex items-center justify-center">
                <Loader />
              </Html>
            }
          >
            <Iphone item={item} size={size} scale={i === 1 ? 15 : 17} />
          </Suspense>
        }
      </group>
    </View>
  );
};

export default Model;
