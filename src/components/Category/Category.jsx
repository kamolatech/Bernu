import Img from "../LazyLoadImg/Img";

function Category({ range }) {
  return (
    <div className="category-item text-center shadow-sm hover:shadow-md transition">
      <Img 
        src={range.icon} 
        alt={range.title} 
        className="mx-auto mb-2 w-12 h-12" 
      />
      <p className="text-sm font-medium">{range.title}</p>
    </div>
  );
}

export default Category;