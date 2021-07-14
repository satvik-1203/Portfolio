import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import Projects from "./Projects";

const index = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={` overflow-hidden ${open && "overflow-hidden h-screen"}`}
    >
      <NavBar openState={[open, setOpen]} />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">Contact</Route>
      </Switch>
    </motion.div>
  );
};

export default index;
