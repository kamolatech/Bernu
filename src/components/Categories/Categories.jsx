import Category from "../Category/Category";

function Categories({ ranges = [] }) {
  return (
    <section className="bg-[#f4f5f9] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[27px]">
          <h1 className="text-[28px] md:text-3xl rubik font-bold text-dark mb-2">
            Широкий ассортимент товаров
          </h1>
          <p className="text-[22px] italic font-light pacifico text-pink">
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
