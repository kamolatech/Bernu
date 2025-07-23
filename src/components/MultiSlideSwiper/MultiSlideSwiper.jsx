import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultiSlideSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Sample baby product slides
  const originalSlides = [
    {
      id: 1,
      imgUrl: "/api/placeholder/200/150",
      title: "Baby Bottles",
      category: "Feeding"
    },
    {
      id: 2,
      imgUrl: "/api/placeholder/200/150",
      title: "Happy Baby",
      category: "Photography"
    },
    {
      id: 3,
      imgUrl: "/api/placeholder/200/150",
      title: "Bath Time",
      category: "Hygiene"
    },
    {
      id: 4,
      imgUrl: "/api/placeholder/200/150",
      title: "Swimming Fun",
      category: "Recreation"
    },
    {
      id: 5,
      imgUrl: "/api/placeholder/200/150",
      title: "Baby Care",
      category: "Health"
    },
    {
      id: 6,
      imgUrl: "/api/placeholder/200/150",
      title: "Playtime",
      category: "Development"
    }
  ];

  // Create infinite slides by duplicating slides
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const maxIndex = slides.length - slidesToShow;

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle infinite scroll
  useEffect(() => {
    if (currentIndex >= originalSlides.length * 2) {
      // Reset to middle section
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(originalSlides.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 800);
    } else if (currentIndex < 0) {
      // Reset to middle section from the other direction
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(originalSlides.length - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 800);
    }
  }, [currentIndex, originalSlides.length]);

  // Auto-play functionality (slower)
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Increased from 3000ms to 6000ms (6 seconds)

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const slideWidth = 100 / slidesToShow;

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 px-4">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        style={{ transform: 'translateY(-50%) translateX(-50%)' }}
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        style={{ transform: 'translateY(-50%) translateX(50%)' }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slides Container */}
      <div
        className="overflow-hidden rounded-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-800 ease-in-out' : ''}`}
          style={{ 
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            width: `${(slides.length * 100) / slidesToShow}%`
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={slide.imgUrl}
                    alt={slide.title}
                    className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-pink-600 transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {slide.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-pink-500 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
        <div
          className="bg-gradient-to-r from-pink-400 to-purple-500 h-1 rounded-full transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default MultiSlideSwiper;