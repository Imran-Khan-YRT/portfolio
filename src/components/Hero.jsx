import { motion } from "framer-motion";
import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-5`}
      >
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm <span className="text-[#915eff]">Adrian</span>
          </h1>
          <p className={`${styles.heroSubText}`}>I develop 3-d visuals, user <br className="sm:block hidden"/> interfaces and web applications</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="xs:bottom-10">
        <a href="#about">
          <div>
    
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
