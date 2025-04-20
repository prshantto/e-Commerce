import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  brand: string;
  rating: number;
  reviews: number;
  color: string;
  image: string;
  stock: number;
  discount: number;
  features: string[];
  quantity: number; // ✅ NEW
};

type CartStore = {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),

  increment: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export default useCartStore;
