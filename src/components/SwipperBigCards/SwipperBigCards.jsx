import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Swipperimg2 from "../../assets/images/SwipperImg2.png";
import Img from "../LazyLoadImg/Img";

const SwipperBigCards = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const originalSlides = [
    {
      id: 1,
      title: "Развивающие игрушки",
      subtitle: "Для здорового развития малыша",
      imgUrl: Swipperimg2,
      bgColor: "",
    },
    {
      id: 2,
      title: "Развивающие игрушки",
      subtitle: "Для здорового развития малыша",
      imgUrl: Swipperimg2,
      bgColor: "",
    },
    {
      id: 3,
      title: "Развивающие игрушки",
      subtitle: "Для здорового развития малыша",
      imgUrl: Swipperimg2,
      bgColor: "",
    },
  ];

  const slides = [
    { ...originalSlides[originalSlides.length - 1], id: "clone-last" },
    ...originalSlides,
    { ...originalSlides[0], id: "clone-first" },
  ];

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning) {
      setCurrentSlide(index + 1);
    }
  };

  useEffect(() => {
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(originalSlides.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="relative w-full container mx-auto my-8">
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        style={{ height: "400px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-full h-full flex-shrink-0 relative`}
            >
              <div className="container mx-auto h-full flex items-center px-8">
                <div className="flex-1 z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#75c6d8] mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-pink-500 font-medium mb-8 italic">
                    {slide.subtitle}
                  </p>
                  <button className="bg-pink hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg">
                    Перейти в каталог
                  </button>
                </div>

                <div className="flex-1 relative">
                  <div draggable={false} className="relative ">
                    <Img
                      src={slide.imgUrl}
                      alt="Happy family"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray p-3 rounded-full shadow-lg transition-all duration-300 z-20"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray p-3 rounded-full shadow-lg transition-all duration-300 z-20"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {originalSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide - 1 === index ||
                (currentSlide === 0 && index === originalSlides.length - 1) ||
                (currentSlide === slides.length - 1 && index === 0)
                  ? "bg-blue shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipperBigCards;
