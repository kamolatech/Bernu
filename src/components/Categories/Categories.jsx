import Category from "../Category/Category";

function Categories({ ranges = [] }) {
  return (
    <section className="bg-[#f4f5f9] h-auto">
      <div className="container">
        <div className="text">
          <h3>Широкий ассортимент товаров</h3>
          <p>для малышей и мам</p>
        </div>
        <div className="products-main grid grid-cols-6">
          {ranges.map((range) => (
            <Category key={range.id} range={range} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
