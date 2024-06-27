import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useCartStore;