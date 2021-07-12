import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { INavOption } from "../../misc/nav";
import { useLocation } from "react-router-dom";

interface Props {
  navOption: INavOption;
}

const NavOption: React.FC<Props> = ({ navOption }) => {
  const location = useLocation();

  return (
    <div className="mt-8 text-lg cursor-pointer transform ">
      <Link to={navOption.path}>
        <div
          className={` mb-1 ${
            location.pathname == navOption.path ? "text-white" : "text-gray-400"
          }`}
        >
          {navOption.name}
        </div>
      </Link>
      <motion.div
        className="line block  h-1 rounded-full "
        initial={{ width: 0 }}
        animate={{ width: "70%", transition: { duration: 1, delay: 1 } }}
        style={{ backgroundColor: "#b638a5" }}
        exit={{ width: "0", transition: { duration: 0.3 } }}
      ></motion.div>
    </div>
  );
};

export default NavOption;
