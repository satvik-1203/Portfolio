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

      <div className="max-w-[1600px] mx-auto lg:pl-16">
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
      </div>
    </motion.div>
  );
};

export default index;
