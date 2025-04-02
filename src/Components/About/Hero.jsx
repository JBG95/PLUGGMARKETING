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
      className="flex -z-50 bg-center bg-cover px-4 md:px-8 gap-5 py-12 items-center justify-center w-full md:flex-row-reverse h-auto flex-col"
    >
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-white md:text-left text-2xl font-bold md:text-4xl">
          About
        </h1>
        <p className=" w-full text-center md:text-left pt-4 text-gray-200">
          Tokpay is the financial technology company empowering the world&#39;s
          small and medium sized businesses and consumers to transact, do
          business and grow globally. Tokpay was founded with the belief that
          talent is equally distributed, but opportunity is not, and access to
          capital markets should be accessible and equitable for sophisticated
          retail investors. It is our mission to enable anyone anywhere to
          participate and succeed in the global digital economy. Since our
          founding, we have built a global financial platform that has already
          made it easier for millions of SMB&#39;s and individuals particularly
          in emerging markets to pay and get paid, manage their funds, and grow
          their business.
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
