import { Outlet, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// const NavbarBottom = lazy(() =>
//   import("../../components/NavbarBottom/NavbarBottom")
// );
const Footer = lazy(() => import("../components/Footer/Footer"));

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div tabIndex={-1} className="min-h-screen flex flex-col bg-[#fff]">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default MainLayout;
