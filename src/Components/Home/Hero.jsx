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
      className="flex px-4 md:px-8 items-center justify-center w-full md:flex-row md:h-screen h-auto flex-col bg-gray-100"
    >
      {/* Header Intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-start justify-center md:pt-0 pt-12 space-y-6"
      >
        <h1 className="w-full text-left text-3xl md:text-5xl font-bold uppercase tracking-wide text-gray-900">
          Elevate Your Brand with Expert Digital Marketing.
        </h1>
        <p className="w-full text-left py-4 text-gray-700 text-lg">
          Plug Marketing empowers your brand with comprehensive digital solutions—from social media management and content creation to paid advertising and influencer marketing. Our innovative approach ensures maximum engagement and growth.
        </p>
        <div className="flex flex-row gap-4 items-center w-full py-4">
          <button className="bg-[#3e4edf] hover:bg-[#2034e7] text-white px-6 py-2 rounded-2xl hover:scale-105 duration-500">
            Discover More
          </button>
          <button className="bg-gray-900 hover:bg-gray-600 text-white px-6 py-2 rounded-2xl hover:scale-105 duration-500">
            Our Services
          </button>
        </div>
      </motion.div>

      {/* Hero Animation */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <Player
          autoplay
          loop
        src="https://lottie.host/c90e37a3-83f7-40ea-bf5f-8d8f7bac8e11/YZan1Ttbuo.json"

          className="w-full h-full object-cover"
          id="player"
        ></Player>
      </div>
    </div>
  );
};

export default Hero;
