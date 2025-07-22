import { BsPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className="header-bottom bg-[#f4f5f9] border border-[#e6e9ef]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="catalog border-x-[1px] border-[#e6e9ef] w-full">
            <button className="catalog-wrapper flex items-center gap-3 py-[24px] pl-[20px]">
              <LuMenu className="text-2xl" />
              <h2 className="noto text-dark text-[16px] uppercase font-semibold">
                Каталог товаров
              </h2>
            </button>
          </div>
          <div className="form-wrap w-full ml-[24px]">
            <form
              action=""
              className="border border-[#B7B8C5] rounded-[30px] flex items-center bg-white overflow-hidden max-w-md mx-auto"
            >
              <button
                type="button"
                className="bg-transparent pl-[15px] pr-[10px] "
              >
                <IoMdSearch className="text-[20px] text-gray-600" />
              </button>
              <input
                className="outline-none w-full h-full bg-transparent py-3 pr-2 text-gray-700 placeholder-gray-400"
                type="text"
                placeholder="Введите запрос для поиска"
              />
              <button
                type="submit"
                className="bg-[#74ccd8] text-white px-6 py-3 rounded-r-[30px] hover:bg-[#74ccd8] transition-colors duration-200 font-medium"
              >
                Найти
              </button>
            </form>
          </div>
          <div className="flex items-center ">
            {" "}
            <div className="registration flex items-center gap-[8px] w-full mx-[34px]">
              <Link className="icon-wrapper rounded-full p-[8px] bg-[#B7B8C5]">
                <BsPersonFill className="text-xl text-white" />
              </Link>
              <div className="flex flex-col">
                {" "}
                <Link className="text-[#B7B8C5] noto text-[13px]">Войти</Link>
                <button className="flex items-center noto text-[16px] font-semibold text-dark">
                  Регистрироватся <MdKeyboardArrowDown />
                </button>
              </div>
            </div>
            <div className="product-actions flex gap-7 text-[#B7B8C5]">
              <button className="like-btn text-[23px]">
                <GoHeart />
              </button>
              <button className="cart-btn text-[23px]">
                <GiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
