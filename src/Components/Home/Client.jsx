import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Stars from "./Stars";

// Updated sample feedback content for Plug Marketing
const Feedback = [
  {
    title: "OUTSTANDING SERVICE",
    description:
      "Plug Marketing transformed our digital presence. Their innovative strategies boosted our engagement and expanded our reach significantly.",
    name: "Jane Doe, CEO",
  },
  {
    title: "EXCEPTIONAL RESULTS",
    description:
      "Thanks to Plug Marketing, our brand's social media impact has soared. Their creative approach and dedicated support are unparalleled.",
    name: "John Smith, Marketing Director",
  },
  {
    title: "INNOVATIVE SOLUTIONS",
    description:
      "The team at Plug Marketing provided cutting-edge solutions that elevated our brand. We couldn’t be happier with the results.",
    name: "Alice Johnson, Brand Manager",
  },
];

const Client = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
    <div className="border-t-2 border-b-2 border-[#3e4edf] py-16 flex flex-col w-full items-center px-4 md:px-8 h-auto">
      {/* Title */}
      <div className="pb-6 flex w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2034e7] uppercase tracking-wide">
          CLIENT TESTIMONIALS
        </h1>
      </div>
      {/* Feedback Cards */}
      <div className="flex md:flex-row flex-col justify-evenly w-full items-center gap-6">
        {Feedback.map((feedback, index) => (
          <motion.div
            initial={animationLoaded ? {} : { opacity: 0, translateY: 50 }}
            whileInView={animationLoaded ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.2 * index }}
            className="flex flex-col max-w-sm border border-[#3e4edf] p-4 rounded-md bg-white shadow-lg"
            key={index}
          >
            {/* 5 Stars */}
            <Stars />
            {/* Details */}
            <div className="flex flex-col mt-4">
              <h1 className="font-bold text-gray-900">{feedback.title}</h1>
              <p className="text-gray-700 line-clamp-2">{feedback.description}</p>
              <p className="text-gray-500 mt-2">{feedback.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
