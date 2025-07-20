import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

function Header() {
  return (
    <header className="sticky z-[111111] top-0">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
