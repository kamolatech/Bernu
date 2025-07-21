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
          <div className="catalog border-x-[1px] border-[#e6e9ef] w-[356px] ">
            <div className="catalog-wrapper flex items-center gap-3 py-[24px] pl-[20px]">
              <LuMenu className="text-2xl"/>
              <h2 className="noto text-dark text-[16px] uppercase font-semibold">Каталог товаров</h2>
            </div>
          </div>
          <form action="" className="border rounded-[30px] flex ">
            <button><IoMdSearch /></button>
            <input className="w-full" type="text" placeholder="Введите запрос для поиска" />
            <button className="">Найти</button>
          </form>
          <Link to={"/"} className="registration flex items-center ">
            <div className="icon-wrapper rounded-full p-[5px] bg-[#B7B8C5]">
              <BsPersonFill className="text-xl text-white"/>
            </div>
            <div className="flex flex-col">
              {" "}
              <span>Войти</span>
              <button className="flex items-center">
                Регистрироватся <MdKeyboardArrowDown />
              </button>
            </div>
          </Link>
          <div className="product-actions flex gap-7 text-[#B7B8C5]">
            <div className="like-btn text-[23px]">
              <GoHeart />
            </div>
            <div className="cart-btn text-[23px]">
              <GiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
