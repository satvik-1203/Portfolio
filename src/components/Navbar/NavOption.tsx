import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { INavOption } from "../../misc/nav";

interface Props {
  navOption: INavOption;
}

const NavOption: React.FC<Props> = ({ navOption }) => {
  return (
    <div className="mt-8 text-lg cursor-pointer transform hover:">
      <Link to={navOption.path} className="text-center mb-3">
        {navOption.name}
      </Link>
      <motion.div
        className="line block  h-1 rounded-full "
        initial={{ width: 0 }}
        animate={{ width: "60%", transition: { duration: 1, delay: 1 } }}
        style={{ backgroundColor: "#b638a5" }}
        exit={{ width: "0", transition: { duration: 0.3 } }}
      ></motion.div>
    </div>
  );
};

export default NavOption;
