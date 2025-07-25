import Img from "../LazyLoadImg/Img";

function Category({ range }) {
  return (
    <div className="category-item text-center group cursor-pointer rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 hover:bg-blue">
      <div className=" p-6 mb-4  mx-auto w-24 h-24 flex items-center justify-center">
        <Img 
          src={range.icon} 
          alt={range.title} 
          className="w-12 h-12 object-contain" 
        />
      </div>
      <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
        {range.title}
      </p>
    </div>
  );
}

export default Category;