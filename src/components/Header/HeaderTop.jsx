import Img from "../LazyLoadImg/Img";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

function HeaderTop({ selectedLang, setSelectedLang }) {
  return (
    <div className="headerTop">
      <div className="container">
        <div className="logo">
          <Img src={logo} alt="Bernu logo" />
        </div>
        <nav>
          <ul>
            <Link to={"/"}>О нас</Link>
            <Link to={"/"}>Оплата и доставка</Link>
            <Link to={"/"}>Отзывы</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Блог</Link>
            <Link to={"/"}>Контакты</Link>
          </ul>
        </nav>
        <div className="contacts">
          <div className="phone_num">
            <Link to={"/"} className="flex items-center gap-2">
              <ImPhone />
              <h3>+38 097 435 6743</h3>
            </Link>
          </div>
          <div className="email">
            <Link to={"/"} className="flex items-center gap-2">
              <IoIosMail />
              <h3>Kidsshop@gmail.com</h3>
            </Link>
          </div>
          <ChangeLanguage
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
