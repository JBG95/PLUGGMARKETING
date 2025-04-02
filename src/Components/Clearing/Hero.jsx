import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/clearHero.svg";
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
      className="flex -z-50 bg-center bg-cover px-4 md:px-8 gap-5 py-12 items-center justify-center w-full md:flex-row-reverse md:h-screen h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-white md:text-left text-3xl font-bold md:text-5xl">
          Clearing and settlement
        </h1>
        <p className=" w-full text-center md:text-left pt-4 text-gray-200">
          Traditional clearing and settlement systems are stodgy, siloed, and
          fraught with risk for all participants. In legacy settlement systems,
          actions and obligations are exercised sequentially and there is no way
          for every party to have a complete view of real-time information and
          status. This causes expensive manual reconciliation and baked-in
          latencies, stunting innovation and locking potential value across
          markets.Our technology significantly reduces the need for
          reconciliation, accelerates and optimizes timelines for delivery and
          payment across all transactions, and dramatically improves overall
          data use and quality for any market or asset class.
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
