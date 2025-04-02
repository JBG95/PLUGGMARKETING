import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/payFeatHero.svg";
import { reasons } from "../../Constants/Reasons";
const PayFeat = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  return (
    <div className="flex -z-50 px-4 md:px-8 bg-center bg-cover md:py-12 py-20 items-center justify-center w-full md:flex-row flex-col">
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-gray-900 md:text-left text-2xl font-bold md:text-4xl">
          Why Tokpay?
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-gray-800">
          Collect easy mobile money payments in Zambia, Tanzania, Ghana, Kenya,
          Rwanda, Cameroon, Senegal, Benin, and Ivory Coast. All your money will
          be settled in a single account, saving you the stress of tracking or
          reconciling payments.
        </p>
        {reasons.map((item, index) => (
          <motion.div
            initial={animationLoaded ? {} : { opacity: 0 }}
            whileInView={animationLoaded ? { opacity: 1 } : {}}
            transition={{ delay: (2 * index) / 10 }}
            className="flex shadow-sm md:shadow-none rounded-md md:py-2 md:px-0 px-2 md:my-0 my-3 w-full gap-3 py-6 flex-col md:flex-row justify-between items-center"
            key={index}
          >
            {/* Icons */}
            <div className="flex md:text-4xl text-2xl text-white bg-[#3e4edf] rounded-full p-6">
              {item.icon}
            </div>

            {/* Typography */}
          <div className="flex w-full flex-col">
            <h1 className="md:text-xl text-base font-bold w-full md:text-left text-center">
              {item.title}
            </h1>
            <p className="text-gray-600 text-sm pt-1 w-full md:text-left text-center">
              {item.description}
            </p>
          </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex w-full md:w-1/2 items-center justify-center">
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

export default PayFeat;
