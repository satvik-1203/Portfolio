import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./Projects";
import Contact from "./Contact";
import { HomeCurve, SmCurve } from "../misc/icons";

const index = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={` overflow-hidden ${open && "overflow-hidden h-screen"}`}
    >
      <NavBar openState={[open, setOpen]} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
};

export default index;
