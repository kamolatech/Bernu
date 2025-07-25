import AlreadyWatched from "../../components/AlreadyWatched/AlreadyWatched";
import Categories from "../../components/Categories/Categories";
import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import { productsRange, sampleProducts } from "../../data/data";

function Home() {
  return (
    <main>
      <SwipperBigCards />
      <Categories ranges={productsRange} />
      <AlreadyWatched products={sampleProducts}/>
    </main>
  );
}

export default Home;
