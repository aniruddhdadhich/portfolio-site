import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="flex  flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex flex-wrap" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="mx-auto">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
