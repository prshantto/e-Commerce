import { useState } from "react";

const Checkout = () => {
  const cartItems = [
    {
      id: 1,
      name: "Sony Pro Headphones",
      image:
        "https://m.media-amazon.com/images/I/21F6MKKV6EL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 231.48,
      quantity: 1,
    },
    {
      id: 2,
      name: "iPhone 14",
      image:
        "https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg",
      price: 999.99,
      quantity: 1,
    },
  ];

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Additional Charges
  const taxRate = 0.18; // 18% GST
  const platformFee = 50; // Flat fee in ₹
  const deliveryCharge = 40; // Flat delivery fee in ₹

  const taxes = subtotal * taxRate;
  const total = subtotal + taxes + platformFee + deliveryCharge;

  const handleCheckout = () => {
    if (cardNumber && expiryDate && cvv && nameOnCard) {
      alert("Checkout processed successfully!");
    } else {
      alert("Please fill in all the required details.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left Side: Cart Details */}
      <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain rounded-md"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">₹ {item.price}</p>
              <p className="text-sm text-gray-800">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
        <h2 className="text-lg font-semibold mt-4">Billing Summary</h2>
        <div className="mt-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes (18% GST):</span>
            <span>₹ {taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee:</span>
            <span>₹ {platformFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge:</span>
            <span>₹ {deliveryCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total:</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Right Side: Checkout Details */}
      <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Checkout Details</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Name on Card</label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              placeholder="Enter name on card"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 w-full bg-[#fb641b] text-white py-2 rounded-md"
        >
          Pay ₹ {total.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
