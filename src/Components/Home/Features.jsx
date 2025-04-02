import { Feature } from "../../Constants/Feature";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Features = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8 md:h-screen h-auto w-full">
      {Feature.map((feature, index) => (
        <motion.div
          initial={animationLoaded ? {} : { opacity: 0 }}
          whileInView={animationLoaded ? { opacity: 1 } : {}}
          transition={{ delay: (2 * index) / 10 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:w-1/2 w-full border border-[#3e4edf] rounded-md py-6 px-4 shadow-sm"
          key={index}
        >
          {/* Icon */}
          <div className="flex items-center justify-center md:text-5xl text-2xl text-[#3e4edf] bg-[#e9efff] rounded-full p-6 md:p-12">
            {feature.icon}
          </div>

          {/* Typography */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="md:text-2xl text-xl font-bold text-[#2034e7] uppercase tracking-wide">
              {feature.title}
            </h1>
            <p className="text-gray-700 pt-1 md:pt-3">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
