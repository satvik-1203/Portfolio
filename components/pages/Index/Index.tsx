import React, { createContext, useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { motion, AnimatePresence } from "framer-motion";
import { usePageFade, fade } from "#/hooks/usePageFade";
import CardContent from "./CardContent";

interface Props {}

export const IndexPageContext = createContext({} as any);

const Index: React.FC<Props> = () => {
  const [elementOne, controlsOne] = usePageFade();
  const [elementTwo, controlsTwo] = usePageFade();
  const [content, setContent] = useState({ state: false, content: <></> });

  return (
    <IndexPageContext.Provider value={{ content, setContent }}>
      <div className="relative">
        <motion.div
          ref={elementOne as any}
          variants={fade}
          animate={controlsOne as any}
        >
          <PageOne />
        </motion.div>

        <motion.div
          ref={elementTwo as any}
          variants={fade}
          animate={controlsTwo as any}
        >
          <PageTwo />
        </motion.div>
        <AnimatePresence>{content.state && <CardContent />}</AnimatePresence>
      </div>
    </IndexPageContext.Provider>
  );
};

export default Index;
