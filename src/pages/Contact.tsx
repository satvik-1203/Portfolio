import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../misc/pageAnimation";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Contact
    </motion.div>
  );
};

export default Contact;
