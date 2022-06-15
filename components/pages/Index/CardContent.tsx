import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IndexPageContext } from "./Index";

interface Props {}

const CardContent: React.FC<Props> = () => {
  const mainRef = useRef<HTMLElement>(null);
  const {
    setContent,
    content: { content },
  } = useContext(IndexPageContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    if (mainRef.current) mainRef.current.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <motion.main
      ref={mainRef}
      initial={{ scale: 0.9 }}
      animate={{
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="fixed min-h-screen  z-20 inset-0 bg-gray-900 md:px-16 bg-gradient-to-tl from-gray-800 px-10"
    >
      <div
        className="fixed top-16 left-5 cursor-pointer text-gray-300 z-10 "
        onClick={() => {
          setContent({ state: false, content: <></> });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
          />
        </svg>
      </div>
      <div className="px-10 mx-auto max-w-[1200px] ">{content}</div>
    </motion.main>
  );
};

export default CardContent;
