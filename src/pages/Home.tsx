import Offers from "../components/Offers";
import ProductCard from "../components/ProductCard";
import { Headphones, Mobiles } from "../data";

const Home = () => {
  return (
    <div className="px-3 sm:px-5">
      <Offers />

      <section className="my-6">
        <h1 className="text-lg sm:text-xl font-semibold mb-3">
          Top Deals on Headphones
        </h1>
        <div className=" flex gap-4 md:gap-20 overflow-x-auto no-scrollbar scroll-smooth -mx-1 px-1 sm:px-2">
          {Headphones.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[75vw] sm:w-[220px]">
              <ProductCard
                id={item.id}
                price={item.price}
                name={item.name}
                image={item.image}
                rating={item.rating}
                reviews={item.reviews}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="my-6">
        <h1 className="text-lg sm:text-xl font-semibold mb-3">
          Trending Deals on Mobiles
        </h1>
        <div className="flex gap-4  md:gap-20 overflow-x-auto no-scrollbar scroll-smooth -mx-1 px-1 sm:px-2">
          {Mobiles.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[75vw] sm:w-[220px]">
              <ProductCard
                id={item.id}
                price={item.price}
                name={item.name}
                image={item.image}
                rating={item.rating}
                reviews={item.reviews}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
