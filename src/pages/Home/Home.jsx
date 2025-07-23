import Categories from "../../components/Categories/Categories";
import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import { productsRange } from "../../data/data";

function Home() {
  return (
    <main>
      <SwipperBigCards />
      <Categories ranges={productsRange} />
    </main>
  );
}

export default Home;
