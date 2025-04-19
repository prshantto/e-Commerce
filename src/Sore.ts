import { create } from "zustand";

type products = {
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
};

export const useStore = create<products>((set) => ({
  id: 0,
  name: "",
  category: "",
  price: 0,
  currency: "",
  description: "",
  brand: "",
  rating: 0,
  reviews: 0,
  color: "",
  image: "",
  stock: 0,
  discount: 0,
  features: [],

  setId: (id: number) => set({ id }),
  setName: (name: string) => set({ name }),
  setCategory: (category: string) => set({ category }),
  setPrice: (price: number) => set({ price }),
  setCurrency: (currency: string) => set({ currency }),
  setDescription: (description: string) => set({ description }),
  setBrand: (brand: string) => set({ brand }),
  setRating: (rating: number) => set({ rating }),
  setReviews: (reviews: number) => set({ reviews }),
  setColor: (color: string) => set({ color }),
  setImage: (image: string) => set({ image }),
  setStock: (stock: number) => set({ stock }),
  setDiscount: (discount: number) => set({ discount }),
  setFeatures: (features: string[]) => set({ features }),
}));

export default useStore;
