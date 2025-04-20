import { useCartStore } from "../Store/CartStore";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, increment, decrement } =
    useCartStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">₹ {item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <h3 className="text-xl font-semibold">
              Total: ₹ {totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-2 px-4 py-2 bg-[#fb641b] text-white rounded-md cursor-pointer"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="ml-4 mt-2 px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
