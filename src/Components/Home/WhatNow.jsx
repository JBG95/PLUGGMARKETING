import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Items } from "../../Constants/Whatnow";

const WhatNow = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
    <div className="items-center z-0 px-4 md:px-8 py-8 gap-4 h-auto flex w-full flex-col justify-center">
      {/* Title */}
      <div className="py-6 flex w-full items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold">
          Your Brand, Now What?
        </h1>
      </div>
      {Items.map((item, index) => (
        <motion.div
          initial={animationLoaded ? {} : { opacity: 0 }}
          whileInView={animationLoaded ? { opacity: 1 } : {}}
          transition={{ delay: (2 * index) / 10 }}
          className="flex md:w-1/2 shadow-sm md:shadow-none md:gap-10 rounded-md md:py-0 md:px-0 px-2 md:my-0 my-3 w-full gap-3 py-6 flex-col md:flex-row justify-between items-center"
          key={index}
        >
          {/* Icons */}
          <div className="flex md:text-5xl text-2xl text-white bg-[#3e4edf] rounded-full p-6 md:p-12">
            {item.icon}
          </div>

          {/* Typography */}
          <div className="flex w-full">
            <p className="text-gray-600 pt-1 md:pt-3 w-full md:text-left text-center">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WhatNow;
