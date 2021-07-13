import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";

const index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">Contact</Route>
        </Switch>
      </main>
    </motion.div>
  );
};

export default index;
