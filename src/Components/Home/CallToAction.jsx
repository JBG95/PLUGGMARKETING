import { Cta } from "../../Constants/Cta";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";

const CallToAction = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  return (
    <div className="flex flex-col px-4 md:px-8 w-full h-auto md:h-screen justify-center items-center">
      <div>
        <h1 className="md:text-3xl text-2xl font-extrabold py-8">What now?</h1>
      </div>
      <div className="flex w-full flex-col gap-6 md:flex-row items-center justify-evenly">
        {Cta.map((cta,index) => (
          <div
            key={index}
            className="text-center shadow-sm rounded-md bg-gray-200 mx-2 border pb-6 flex flex-col"
          >
            <div className=" py-7 flex justify-center items-center w-full">
              <span className="rounded-full bg-gray-300 py-4 text-[#3e4edf] font-bold px-6">
                {cta.id}
              </span>
            </div>
            <h1 className=" font-bold">{cta.title}</h1>
            <p className=" px-4 text-gray-600">{cta.description}</p>
          </div>
        ))}
      </div>
      <motion.div initial={animationLoaded?{}:{opacity:0,translateY:60}} whileInView={animationLoaded?{opacity:1,translateY:0}:{}} transition={{delay:.7}} className=" w-full justify-center my-8 md:my-16 flex items-center">
        <button className=" bg-[#3e4edf] hover:bg-[#2034e7] text-white px-4 py-1 rounded-2xl hover:scale-105 duration-500">
          Get the app now
        </button>
      </motion.div>
    </div>
  );
};

export default CallToAction;
