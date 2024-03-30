import { useState, useEffect } from "react";
import rehydrate from "../assets/water2.jpg";
import stove from "../assets/stove.jpg";
import milk from "../assets/milkpromo.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [rehydrate, stove, milk];
  const slideTexts = [
    "Stay hydrated with our world-class purifying machines",
    "Upgrade your kitchen with gas supplied and weighed by our company",
    "Get your milk fix with our pasteurized milk promotion",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative overflow-hidden mt-2 shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute object-cover top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // Set background opacity here
          />
          <div className="absolute top-5 py-5 w-full text-lg font-light text-white text-center p-2 ">
            <p className="line-clamp-3 tracking-wide">{slideTexts[index]}</p>
            <button className="bg-[#2AB7CA] px-5 py-2 mt-4">Shop now </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCarousel;
