import { Feedback } from "../../Constants/Feedback";
import Stars from "./Stars";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Client = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
  useEffect(() => {
    setAnimationLoaded(true);
  }, []);
  return (
    <div className="border-t-2 border-b-2 py-16 flex flex-col w-full items-center px-4 md:px-8 h-auto">
      {/* Title */}
      <div className=" pb-6 flex w-full">
        <h1 className="text-xl md:text-3xl font-bold">
          Client&#39;s feedback:
        </h1>
      </div>
      {/* Feedback Cards */}
      <div className="flex md:flex-row flex-col justify-evenly w-full items-center gap-3">
        {Feedback.map((feedback, index) => (
          <motion.div
            initial={animationLoaded ? {} : { opacity: 0, translateY: 50 }}
            whileInView={animationLoaded ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 2 * index/10 }}
            className="flex flex-col max-w-sm border p-3 rounded-md bg-gray-200"
            key={index}
          >
            {/* 5 stars */}
            <Stars />

            {/* Details */}
            <div className="flex flex-col">
              <h1 className=" font-bold">{feedback.title}</h1>
              <p className=" text-gray-800 line-clamp-2">{feedback.description}</p>
              <p className=" text-gray-500 py-2">{feedback.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
