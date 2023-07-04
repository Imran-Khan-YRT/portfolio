import { motion } from "framer-motion";
import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const PerpetualIcon = () => {
    return (
      <div className="absolute xs:bottom-10 bottom-32 w-full  flex justify-center items-center ">
        {" "}
        {/*problem*/}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    );
  };

  const DescriptionBarIcon = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
    );
  };

  const DescriptionText = () => {
    return (
      <div>
        <h1 className={`${styles.heroHeadText} `}>
          Hi, I'm <span className="text-[#915eff]">Imran</span>
        </h1>
        <p className={`${styles.heroSubText}`}>
          I like to create solid and scalable
          <br className="sm:block hidden" />
          &nbsp;products with great user experiences
        </p>
      </div>
    );
  };

  const Description = () => {
    return (
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-5`}
      >
        <DescriptionBarIcon />
        <DescriptionText />
      </div>
    );
  };

  return (
    <section className="w-full h-screen">
      <Description />
      <ComputersCanvas />
      <PerpetualIcon />
    </section>
  );
};

export default Hero;
