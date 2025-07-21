import Img from "../LazyLoadImg/Img";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import Navbar from "../Navbar/Navbar";

function HeaderTop({ selectedLang, setSelectedLang }) {
  return (
    <div className="header-top">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Link to={"/"} className="img-wrapper w-full object-contain h-auto max-w-[105px] md:max-w-[116px] ">
            <Img
              src={logo}
              className="h-auto w-full object-contain flex-shrink-0 "
              alt="Bernu logo"
            />
          </Link>
          <Navbar />
          <div className="contacts flex items-center gap-14">
            <div className="phone_num">
              <Link to={"/"} className="flex items-center gap-2">
                <ImPhone className="text-[20px] text-gray"/>
                <h3 className="noto text-dark font-medium">+38 097 435 6743</h3>
              </Link>
            </div>
            <div className="email">
              <Link to={"/"} className="flex items-center gap-2">
                <IoIosMail className="text-[25px] text-gray" />
                <h3 className="noto text-dark font-medium">Kidsshop@gmail.com</h3>
              </Link>
            </div>
            <ChangeLanguage
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
