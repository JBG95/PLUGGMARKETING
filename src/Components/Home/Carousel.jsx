/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item max-w-screen h-96 items-center" style={{ width: width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
      // newIndex = 0  // swipe because we need infinite scroll
    } else if (newIndex >= React.Children.count(children)) {
      // newIndex = React.Children.count(children) - 1;
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    swipeDuration: 800,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1500);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <div
        {...handlers}
        className="overflow-hidden rounded-md md:mx-8 mx-4 flex-col justify-center items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className=" whitespace-nowrap w-full h-96 items-center transition transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.toArray(children).map((child) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="flex w-full py-4 items-center justify-center md:gap-8 gap-4">
          <button onClick={() => updateIndex(activeIndex - 1)}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
            >
              <path d="M13.939 4.939L6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
            </svg>
          </button>
          {React.Children.toArray(children).map((child, index) => {
            return (
              <button
                key={index}
                className={`${
                  index === activeIndex
                    ? "active bg-gray-500 scale-110"
                    : "bg-slate-300"
                } rounded-full transition duration-300 p-2`}
                onClick={() => {
                  updateIndex(index);
                }}
              ></button>
            );
          })}
          <button onClick={() => updateIndex(activeIndex + 1)}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
            >
              <path d="M10.061 19.061L17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
