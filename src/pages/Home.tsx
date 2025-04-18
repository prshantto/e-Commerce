import Offers from "../components/Offers";
import ProductCard from "../components/ProductCard";
import { Headphones, Mobiles } from "../data";

const Home = () => {
  return (
    <div>
      <Offers />

      <div className="my-5 mx-5">
        <h1 className="my-2 text-xl font-semibold">Top Deals on Headphones</h1>
        <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-1">
          {Headphones.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[250px]">
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
      </div>

      <div className="my-5 mx-5">
        <h1 className="my-2 text-xl font-semibold">
          Trending Deals on Mobiles
        </h1>
        <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-1">
          {Mobiles.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[250px]">
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
      </div>
    </div>
  );
};

export default Home;
