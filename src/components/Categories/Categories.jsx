import Category from "../Category/Category";

function Categories({ ranges = [] }) {
  return (
    <section className="bg-[#f4f5f9] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Широкий ассортимент товаров
          </h3>
          <p className="text-pink-400 text-lg italic font-light">
            для малышей и мам
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {ranges.map((range) => (
            <Category key={range.id} range={range} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;