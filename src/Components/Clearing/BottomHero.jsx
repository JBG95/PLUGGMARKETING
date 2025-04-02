import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/payment.svg";

const BottomHero = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAnimationLoaded(true);
    };
    img.src = hero;
  }, []);
  return (
    <div className="flex -z-50 bg-center bg-cover px-4 md:px-8 gap-5 py-12 items-center justify-center w-full md:flex-row md:h-screen h-auto flex-col">
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12"
      >
        <h1 className=" w-full text-center text-black md:text-left text-2xl font-bold md:text-4 xl">
          PLUGG MARKETING application development platform enables issuers to:
        </h1>
        <p className=" w-full text-center md:text-left pt-4 text-gray-600">
          Access committed and simultaneous settlements that break each complex
          transaction into components, allowing for real-time settlement and
          asset locking. Securely deliver assets and data only to intended
          recipients via a framework that clearly defines the rights and
          obligations for every transaction. Keep an immutable record of all
          transactions across all accounts without compromising on participant’s
          strict privacy needs. Allow each entity to net its obligations and
          grant participants access to real-time information that is pertinent
          to them.
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

export default BottomHero;
