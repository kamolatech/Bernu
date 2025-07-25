import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Img from "../LazyLoadImg/Img";

function AlreadyWatched({ products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const displayProducts = products.length > 0 ? products : sampleProducts;
  const itemsPerView = 4;
  const maxIndex = Math.max(0, displayProducts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] md:text-3xl rubik font-bold text-dark text-center mb-[30px]">
          Вы уже смотрели
        </h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {displayProducts.map((product) => (
                <div key={product.id} className="flex-none w-1/4 min-w-0">
                  <div className="bg-white border border-[#EEF0F4] rounded-lg p-4 hover:shadow-lg transition-shadow group relative cursor-pointer">
                    <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                      {product.discount && (
                        <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                          -{product.discount}%
                        </span>
                      )}
                      {product.badge && (
                        <span
                          className={`text-white text-xs font-bold px-2 py-1 rounded ${
                            product.badgeColor === "pink"
                              ? "bg-pink"
                              : product.badgeColor === "orange"
                              ? "bg-orange-500"
                              : "bg-gray-500"
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 right-2 z-10 p-3 rounded-full bg-[#f5f7f9] transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-[#B7B8C5] "
                        }`}
                      />
                    </button>

                    <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain "
                      />
                    </div>

                    <div className="mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-dark">
                          {product.price} €
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-[#B7B8C5] line-through">
                            {product.originalPrice} €
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-sm text-gray-700 line-clamp-2 leading-tight noto">
                      {product.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              1116 × 410
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlreadyWatched;
