import { Feature } from "../../Constants/Feature";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";

const Features = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  
  return (
    <div className="items-center z-0 px-4 md:px-8 gap-4 md:h-screen h-auto flex w-full flex-col justify-center">
      {Feature.map((feature,index) => (
        <motion.div
          initial={animationLoaded?{}:{opacity:0}}
          whileInView={animationLoaded?{opacity:1}:{}}
          transition={{delay:2*index/10}}
          className="flex md:w-1/2 md:border-0 shadow-lg md:shadow-none md:gap-10 rounded-md border md:py-0 md:px-0 px-2 md:my-0 my-3 w-full gap-3 py-6 flex-col md:flex-row justify-between items-center"
          key={index}
        >
          {/* Icons */}
          <div className="flex md:text-5xl text-2xl text-[#3e4edf] bg-gray-300 rounded-full p-6 md:p-12">
            {feature.icon}
          </div>

          {/* Typography */}
          <div className="flex flex-col">
            <h1 className="md:text-2xl text-xl font-bold w-full md:text-left text-center">
              {feature.title}
            </h1>
            <p className="text-gray-600 pt-1 md:pt-3 w-full md:text-left text-center">
              {feature.description}
            </p>
          </div>
          
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
