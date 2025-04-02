import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/payFeatHero.svg";

const reasons = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "We help brands grow and engage with their audience on social media platforms through content creation, management, and advertising."
  },
  {
    icon: "🎨",
    title: "Brand Strategy & Identity",
    description: "Create a strong, recognizable brand identity with custom logos, branding guidelines, and messaging strategies."
  },
  {
    icon: "📷",
    title: "Content Production",
    description: "Quality content is king. We produce high-quality videos, graphics, and photos to make brands stand out."
  },
  {
    icon: "🎤",
    title: "Event Marketing & Publicity",
    description: "We create buzz around events to ensure maximum attendance and media coverage through promotions, influencer partnerships, and ticket management."
  },
  {
    icon: "⭐",
    title: "Celebrity & Influencer Marketing",
    description: "Connect with top influencers and celebrities to maximize brand exposure through collaborations and endorsements."
  },
  {
    icon: "📈",
    title: "Marketing Consultation & Training",
    description: "Get expert guidance on digital strategies, business growth coaching, and social media marketing training."
  }
];

const PayFeat = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
    <div className="flex px-6 md:px-12 bg-center bg-cover md:py-20 py-24 items-center justify-center w-full md:flex-row flex-col">
      {/* Header intro */}
      <motion.div
        initial={animationLoaded ? {} : { opacity: 0, translateX: -50 }}
        whileInView={animationLoaded ? { opacity: 1, translateX: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full md:w-1/2 items-start justify-center md:pt-0 pt-12"
      >
        <h1 className="w-full text-primary text-center md:text-left text-4xl font-bold md:text-6xl leading-tight">
          Drive More Sales with PLUGG MARKETING
        </h1>
        <p className="w-full text-center md:text-left py-6 text-gray-700 leading-relaxed md:text-lg">
          Unlock new opportunities and boost revenue with our cutting-edge marketing and sales solutions. We empower businesses to enhance engagement, streamline transactions, and expand their customer base effortlessly.
        </p>
        {reasons.map((item, index) => (
          <motion.div
            initial={animationLoaded ? {} : { opacity: 0 }}
            whileInView={animationLoaded ? { opacity: 1 } : {}}
            transition={{ delay: (2 * index) / 10 }}
            className="flex shadow-lg rounded-xl p-6 my-4 w-full gap-6 flex-col md:flex-row justify-between items-center bg-white"
            key={index}
          >
            {/* Icons */}
            <div className="flex text-4xl text-white bg-accent rounded-full p-6">
              {item.icon}
            </div>
            
            {/* Typography */}
            <div className="flex w-full flex-col">
              <h1 className="md:text-3xl text-xl font-semibold w-full md:text-left text-center text-primary">
                {item.title}
              </h1>
              <p className="text-gray-600 text-lg pt-2 w-full md:text-left text-center">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center mt-8 md:mt-0">
        <img
          src={hero}
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
          alt="Marketing Solutions"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PayFeat;
