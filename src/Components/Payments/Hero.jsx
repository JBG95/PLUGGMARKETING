import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/heropay.svg";
import bg from '../../assets/bgPay.svg'
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
      style={{backgroundImage:`url(${bg})` }}
      className="flex -z-50 bg-center bg-cover px-4 md:px-8 gap-5 py-12 items-center justify-center w-full md:flex-row md:h-screen h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center md:text-left text-2xl font-bold md:text-4xl">
          Payments
        </h1>
        <p className=" w-full text-center md:text-left pt-4 text-gray-600">
          Payments is ready for major transformation. Payments between companies
          represent nearly 40% of the global economy-but they mostly rely on
          outdated manual processes
        </p>
        <p className=" w-full text-center md:text-left py-4 text-gray-600">
          Current cross-border payments can cost upwards of 7% of the amount
          transferred and take nearly a week to process, PLUGG MARKETING empowers
          customers to send these payments instantly at a fraction of the price.{" "}
          <br /> We launched our consumer-facing app for instant transfers
          between friends and family worldwide, while also targeting financial
          institutions and fintechs.
        </p>
      </motion.div>
      
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
