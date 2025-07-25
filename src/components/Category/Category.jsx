import Img from "../LazyLoadImg/Img";

function Category({ range }) {
  return (
    <div className="category-item text-center group cursor-pointer rounded-[10px] py-[23px] px-[13px] shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 hover:bg-blue">
      <div className="mb-4 mx-auto flex items-center justify-center max-w-[82px] max-h-[93px]">
        <Img
          src={range.icon}
          alt={range.title}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors ">
        {range.title}
      </p>
    </div>
  );
}

export default Category;
