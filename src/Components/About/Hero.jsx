import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/aboutHero.svg";
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
      className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full py-12 px-4 md:px-8 gap-5 bg-center bg-cover"
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="relative flex flex-col w-full md:w-1/2 items-start justify-center space-y-4 p-8"
      >
        <h1 className="text-white text-4xl font-bold uppercase tracking-wider">
          About
        </h1>
        <p className="text-gray-200 text-lg leading-relaxed">
          Plug Marketing is a forward-thinking digital marketing agency committed to helping brands grow and engage with their audience. We specialize in creating innovative strategies that combine social media, content creation, and digital advertising to drive impactful results. Our team is dedicated to building strong, recognizable brands and fostering meaningful connections with consumers, ensuring our clients stand out in today’s competitive market.
        </p>
      </motion.div>

      {/* Hero Animation */}
      <div className="relative flex w-full md:w-1/2 py-12 items-center justify-center">
        <img
          src={hero}
          alt="Digital marketing"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
