import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

export const HomeCurve = () => (
  <svg
    className="xs:hidden "
    width="100vw"
    height="294"
    viewBox="0 0 375 250"
    fill="#6D28D9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M203.5 133C82.7 167 17.5 254.5 0 294H374.5V0C367.833 30.1667 324.3 99 203.5 133Z"
      stroke="#6D27D9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Progress: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const [tick, setTick] = useState(false);

  useEffect(() => yRange.onChange((v) => setTick(v >= 1)), [yRange]);
  return (
    <svg className="progress-icon" width="90" height="90" viewBox="0 0 60 60">
      <motion.path
        stroke="#6D27D9"
        fill="none"
        strokeWidth="5"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength: scrollYProgress,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1,
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="3"
        stroke="white"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: tick ? 1 : 0 }}
      />
    </svg>
  );
};

export const SmCurve = () => (
  <svg
    className="hidden xs:block"
    width="1006"
    height="443"
    viewBox="0 0 1006 443"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M459.348 242.595C783.847 191.364 958.991 59.5187 1006 0L0 0V443C17.9083 397.545 134.85 293.827 459.348 242.595Z"
      fill="#6D28D9"
    />
  </svg>
);
