import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/CartStore";

type Props = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
};

const ProductCard: React.FC<Props> = ({
  id,
  name,
  image,
  price,
  rating,
  reviews,
}) => {
  const navigate = useNavigate();

  const { addToCart, cart } = useCartStore();

  return (
    <div
      id={id.toString()}
      className="w-72 h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 flex flex-col gap-2 "
    >
      <div className="w-full h-44 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img
          onClick={() => navigate("/product")}
          src={image}
          alt="product"
          className="object-contain h-full w-full p-2 cursor-pointer"
        />
      </div>

      <h2 className="font-semibold text-base sm:text-lg text-gray-800 line-clamp-2">
        {name}
      </h2>

      <div className="flex flex-col mt-auto">
        <div className="flex flex-col gap-1">
          <div className="w-fit flex items-center text-xs sm:text-sm bg-yellow-400 px-2 py-1 text-black rounded-full gap-1 font-medium shadow-sm">
            <FontAwesomeIcon icon={faStar} />
            <span>{rating}</span>
            <span className="text-gray-700 text-xs">({reviews}+)</span>
          </div>
          <div>
            <div className="line-through text-xs text-gray-500">₹ 999</div>
            <div className="font-bold text-lg text-green-700">₹ {price}</div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 ">
          <button
            onClick={() => navigate("/product")}
            className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 text-white text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
          >
            <Zap size={16} />
            Buy Now
          </button>

          <button
            onClick={() =>
              addToCart({
                id,
                name,
                image,
                price,
                rating,
                reviews,
                category: "",
                currency: "INR",
                description: "",
                brand: "",
                color: "",
                stock: 0,
                discount: 0,
                features: [],
              })
            }
            className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 hover:brightness-110 text-white text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
