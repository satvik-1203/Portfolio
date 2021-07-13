import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const fade = {
  initial: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const usePageFade = () => {
  const [element, view] = useInView({ threshold: 0.4 });
  const controls = useAnimation();
  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls];
};
