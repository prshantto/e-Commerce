import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div
      id={id.toString()}
      className="min-h-72 w-60 bg-gray-200 rounded-lg p-2 overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt="product-image"
        className="w-full h-44 object-contain rounded-lg"
      />

      <h2 className="my-1 font-semibold">{name}</h2>

      <div className="flex justify-between items-end ">
        <div className="flex flex-col gap-1 justify-end">
          <div className="flex items-center text-sm justify-center bg-yellow-500 p-1 text-black rounded-md">
            <FontAwesomeIcon icon={faStar} />
            <h3>{rating}</h3>
            <span className="text-xs text-gray-800">({reviews}+)</span>
          </div>
          <div>
            <div className="mrp line-through text-sm text-gray-800">₹ 999</div>
            <div className="font-semibold">₹ {price}</div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div
            onClick={() => {
              navigate("/product");
            }}
            className="addToCart bg-[#fb641b] p-1 text-white rounded-md flex gap-1 items-center justify-center text-sm"
          >
            <Zap color="white" />
            Buy Now
          </div>

          <div
            onClick={() => {
              alert("item added to cart");
            }}
            className="addToCart bg-[#ff9f00] p-1 text-white rounded-md flex gap-1 items-center justify-center text-sm"
          >
            <ShoppingCart color="white" />
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
