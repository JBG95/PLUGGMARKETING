import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/tokenHero.svg";
import bg from "../../assets/clearBg.svg";
const Hero = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAnimationLoaded(true);
    };
    img.src = hero;
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex -z-50 bg-center bg-cover px-4 md:px-8 gap-5 py-12 items-center justify-center w-full md:flex-row-reverse h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-white md:text-left text-2xl font-bold md:text-4xl">
          To stay competitive in today&#39;s emerging digital economy, you need
          access to programmable assets and money.
        </h1>
        <p className=" w-full text-center md:text-left pt-4 text-gray-200">
          As more securities processes are digitized and transactions move to
          distributed ledger technology (DLT) platforms, effective asset
          tokenization holds the key to transforming processes across financial
          systems.
        </p>
      </motion.div>

      {/* Hero Animation */}
      <div className="flex w-full bounce md:w-1/2 py-12 items-center justify-center">
        <img
          src={hero}
          className="w-full h-full object-cover -z-50"
          alt="payment"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
