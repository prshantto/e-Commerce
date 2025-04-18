import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 px-4 sm:px-6 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50">
      <h1
        onClick={() => navigate("/")}
        className="text-lg sm:text-xl font-bold text-gray-800 cursor-pointer"
      >
        e-Commerce
      </h1>

      <div className="flex gap-4 sm:gap-6 items-center text-sm sm:text-base">
        <div
          onClick={() => navigate("/track-order")}
          className="cursor-pointer text-gray-600 hover:text-black transition-colors"
        >
          Track Orders
        </div>

        <div
          onClick={() => navigate("/profile")}
          className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors"
        >
          <User size={18} />
          <span className="hidden sm:inline">Account</span>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
