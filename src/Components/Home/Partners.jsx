import Carousel, { CarouselItem } from "./Carousel";

const Partners = () => {
  return (
    <div className="py-8">
      <div className="flex px-4 md:px-8 w-full flex-col items-center py-8 justify-center">
        <span className="text-xl md:text-3xl font-bold">Trusted Partners</span>
        <p className="pt-4 text-gray-800 text-center">
          Below is a list of our highly reputable trusted partners
        </p>
      </div>
      <Carousel>
        <CarouselItem>
          <a
            href="https://www.klapton.com/"
            className="relative md:shadow-xl shadow-md w-full md:w-[40%] rounded-md items-center flex-col bg-white h-96 flex"
          >
            <div className="flex items-center w-full justify-center">
              <img
                src="https://www.klapton.com/wp-content/uploads/2021/12/KlaptonRe-team.png"
                alt="KlaptonLogo"
                loading="lazy"
                className="object-cover flex-1 flex rounded-t-md object-top w-96 h-56"
              />
            </div>
            <div className="absolute md:flex my-4 inset-x-0 items-center bottom-0 w-full">
              <img
                src="https://www.klapton.com/wp-content/uploads/2023/05/cropped-KIC-KlaptonLogo-forWEBSITE-1.png"
                alt="Klapton"
                loading="lazy"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            href="https://www.zambezicapital.org/"
            className="md:shadow-xl shadow-md w-full rounded-md flex-col items-center bg-blue-800 h-full lg:max-w-lg max-w-sm md:max-w-md flex"
          >
            <div className="flex w-full items-center justify-center">
              <img
                src="https://static.wixstatic.com/media/aed157_43f80ac0b10041f4b9b31bc92ec8765f~mv2.png/v1/fill/w_1470,h_827,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/PITCH%20DEMO%20DAY%20(24).png"
                alt="KlaptonLogo"
                loading="lazy"
                className="object-cover object-top w-96 p-4 h-56"
              />
            </div>
            <div className="">
              <img
                src="https://static.wixstatic.com/media/aed157_b8287aeb78104860a83987917e75920c~mv2.png/v1/fill/w_362,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20Logo_edited.png"
                alt="Klapton"
                loading="lazy"
                className="object-cover flex object-center pb-12 w-full h-full"
              />
            </div>
          </a>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Partners;
