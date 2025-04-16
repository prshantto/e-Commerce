import Offers from "../components/Offers";
import ProductCard from "../components/ProductCard";
import { Headphones, Mobiles } from "../data";

const Home = () => {
  return (
    <div>
      <Offers />

      <div className="my-5 mx-5">
        <h1 className="my-2 text-xl font-semibold">Top Deals on Headphones</h1>
        <div className="flex gap-6 flex-wrap">
          {Headphones.map((item) => {
            return (
              <ProductCard
                id={item.id}
                key={item.id}
                price={item.price}
                name={item.name}
                image={item.image}
                rating={item.rating}
                reviews={item.reviews}
              />
            );
          })}
        </div>
      </div>

      <div className="my-5 mx-5">
        <h1 className="my-2 text-xl font-semibold">
          Treanding Deals on Mobiles
        </h1>
        <div className="flex gap-6 flex-wrap">
          {Mobiles.map((item) => {
            return (
              <ProductCard
                id={item.id}
                key={item.id}
                price={item.price}
                name={item.name}
                image={item.image}
                rating={item.rating}
                reviews={item.reviews}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
