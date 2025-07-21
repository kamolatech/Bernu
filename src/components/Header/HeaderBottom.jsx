import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className="header-bottom bg-[#f4f5f9]">
      <div className="container mx-auto">
        <div className="catalog"></div>
        <form action=""></form>
        <Link to={"/"} className="catalog"></Link>
        <div className="product-actions">
          <div className="like-btn"></div>
          <div className="cart-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
