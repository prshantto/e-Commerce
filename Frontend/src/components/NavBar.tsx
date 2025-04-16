import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-14 mx-3 my-2 flex justify-between items-center px-5">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-semibold cursor-pointer"
      >
        e-Commerce
      </h1>

      <div className="flex gap-5 ">
        <div
          onClick={() => navigate("/track-order")}
          className="cursor-pointer"
        >
          Track Orders
        </div>

        <div
          onClick={() => navigate("/profile")}
          className="flex gap-1 cursor-pointer"
        >
          <User />
          <span>Account</span>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="flex gap-1 cursor-pointer"
        >
          <ShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
