import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  return (
    <div
      style={{ zIndex: -1000 }}
      className="flex -z-50 px-4 md:px-8 items-center justify-center w-full md:flex-row md:h-screen h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center md:text-left text-2xl font-bold md:text-4xl">
          QUICK AND SECURE INTERNATIONAL PAYMENTS STARTS HERE.
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-gray-600">
          Everything you need to pay and get paid by international marketplaces and direct clients on one secure platform.
        </p>
        <div className="flex flex-row gap-2 items-center w-full py-4 md:justify-start justify-center">
          <button className=" bg-[#3e4edf] hover:bg-[#2034e7] text-white px-4 py-1 rounded-2xl hover:scale-105 duration-500">
            Find out more
          </button>
          <button className=" bg-gray-900 hover:bg-gray-600 text-white px-4 py-1 rounded-2xl hover:scale-105 duration-500">
            Get the app
          </button>
        </div>
      </motion.div>

      {/* Hero Animation */}
      <div className="flex w-full -z-50 md:w-1/2 items-center justify-center">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_GXS1DssMnR.json"
          className="w-full h-full object-cover -z-50"
          id="player"
        ></Player>
      </div>
    </div>
  );
};

export default Hero;
