import * as React from "react";
import { Rectangle } from "../../misc/nav";
import {
  AnimatePresence,
  motion,
  motionValue,
  useViewportScroll,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { navOption } from "../../misc/nav";

interface Props {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const boxAnimation = {
  initial: {},
  animate: {
    rotate: "360deg",
    transition: {
      duration: 0.8,
    },
  },
};

const navBarAnimationHide = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: "-80%",
    opacity: 0.5,
    transition: {
      duration: 0.1,
    },
  },
};

const rectangleOuters = {
  initial: {},
  animate: {
    rotate: "45deg",
    y: "-165%",
  },
};

// navbar

const NavBar: React.FC<Props> = ({ openState }) => {
  const { scrollY } = useViewportScroll();
  const navRef = React.useRef<HTMLDivElement>(null);
  let prev = motionValue(0);
  let [show, setShow] = React.useState(true);
  React.useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest == 0) return setShow(true);
      if (latest > prev.get()) {
        if (show != false) setShow(false);
      } else {
        setShow(true);
      }
      prev.set(latest);
    });
  }, []);

  return (
    <motion.nav
      variants={!show ? navBarAnimationHide : undefined}
      initial="initial"
      animate="animate"
      ref={navRef}
      className={`navBar z-50 flex justify-between items-center px-10 bg-black fixed top-0 left-0 right-0 h-20 transition-all transform duration-1000 `}
    >
      <Link to="/">
        <div className="text-white  font-normal text-3xl">Satvik</div>
      </Link>
      <HamBurger openState={openState} />
      <NavElements />
    </motion.nav>
  );
};

export default NavBar;

const NavElements = () => {
  const location = useLocation();
  return (
    <ul className=" hidden md:flex">
      {navOption.map((option) => (
        <Link key={option.id} to={option.path}>
          <li
            className={`mx-4 transition hover:text-white  ${
              location.pathname == option.path
                ? "text-gray-100"
                : "text-gray-400"
            }`}
          >
            {option.name}
          </li>
          {location.pathname === option.path && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%", transition: { duration: 0.6 } }}
              className="mx-auto h-1 bg-purple-700 rounded-full"
            ></motion.div>
          )}
        </Link>
      ))}
    </ul>
  );
};

// Hamburger menu

const HamBurger: React.FC<Props> = ({ openState }) => {
  const [open, setOpen] = openState;
  return (
    <motion.div
      className="hamburger flex flexCol space-y-1 md:hidden"
      onClick={() => setOpen((prev) => !prev)}
      variants={open ? boxAnimation : undefined}
      initial="initial"
      animate="animate"
    >
      <motion.div
        animate={open ? { y: "165%", rotate: "-45deg" } : undefined}
        className="transition-all ease-out"
      >
        <Rectangle />
      </motion.div>
      <motion.div
        animate={open ? { opacity: 0 } : undefined}
        transition={open ? { delay: 0.2 } : undefined}
        className="transition-all ease-out"
      >
        <Rectangle />
      </motion.div>
      <motion.div
        variants={open ? rectangleOuters : undefined}
        className={"transition-all ease-out transform"}
        initial="initial"
        animate="animate"
      >
        <Rectangle />
      </motion.div>
    </motion.div>
  );
};
