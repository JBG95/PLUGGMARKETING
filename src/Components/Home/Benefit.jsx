import { Player } from "@lottiefiles/react-lottie-player";
import { Benefits } from "../../Constants/Benefits";
const Benefit = () => {
  return (
    <div className>
      {Benefits.map((benefit,index)=>(
    <div
        key={index}
      style={{ zIndex: -1000 }}
      className={`flex -z-50 px-4 md:px-8 items-center h-auto md:h-screen justify-center w-full ${index %2 ===0?"md:flex-row-reverse":"md:flex-row"} h-auto flex-col`}
    >
      {/* Header intro */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center md:pt-0 pt-12">
        <h1 className=" w-full text-center md:text-left text-2xl font-bold md:text-5xl">
          {benefit.header}
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-gray-600">
          {benefit.description}
        </p>
        <div className="flex flex-row gap-2 items-center w-full py-4 md:justify-start justify-center">
          <button className=" bg-gray-300 hover:bg-gray-900 font-bold text-black hover:text-white px-4 py-1 rounded-2xl hover:scale-105 duration-500">
            More
          </button>
        </div>
      </div>

      {/* Hero Animation */}
      <div className="flex w-full -z-50 md:w-1/2 items-center justify-center">
        <Player
          autoplay
          loop
          src={benefit.url}
          className="w-full h-full object-cover -z-50"
          id="player"
        ></Player>
      </div>
    </div>
    ))}
    </div>
  );
};

export default Benefit;
