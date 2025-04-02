import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../../assets/bgPay.svg";
import { PayMethods } from "../../Constants/PayMethods";

const Hero = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  return (
    <div
      style={{ zIndex: -1000, backgroundImage: `url(${bg})` }}
      className="flex -z-50 px-4 md:px-8 bg-center bg-cover items-center justify-center w-full md:flex-row md:h-screen h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-gray-900 md:text-left text-2xl font-bold md:text-4xl">
          Easy Payment Gateway Solution
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-gray-800">
          Providing businesses with a single, seamless platform, enabling them
          to process all types of payments.
        </p>
        <div className="flex flex-row gap-2 items-center w-full py-4 md:justify-start justify-center">
          <button className=" bg-[#1f33e5] hover:bg-gray-900 text-white px-4 py-1 rounded-2xl hover:scale-105 duration-500">
            Get info
          </button>
        </div>
      </motion.div>

      {/* Hero Animation */}
      <div className="flex w-full bg-white shadow-2xl p-5 md:p-4 rounded-md md:w-1/2 items-center justify-center">
        <div className="grid grid-cols-3 items-center gap-4 md:gap-2 justify-center">
          {PayMethods.map((item, index) => {
            return (
              <div
                className="flex h-32 items-center justify-center"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.image}
                  className={`w-full ${
                    index === 4 ? "object-cover md:h-full h-24 md:w-32" : ""
                  } ${index === 1 ? "h-24" : ""} h-full object-fill`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
