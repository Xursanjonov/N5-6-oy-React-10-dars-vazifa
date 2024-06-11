import { create } from "zustand";
import { toast } from "react-toastify";
import baseUrl from "../config";

const productsStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,
  //   post product
  createProduct: async (newProduct) => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.post("/products", newProduct);
      set((state) => ({
        products: [...state.products, response.data],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  //   get product
  getProduct: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.get("/products");
      console.log(response);
      set({ products: response.data, isLoading: false });
    } catch (e) {
      set({ error: e.message, isLoading: false });
    }
  },
  //   update or edit
  updateProduct: async (updatedProduct) => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.put(
        `/products/${updatedProduct.id}`,
        updatedProduct
      );
      set((state) => ({
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  //   delete or remove
  deleteProduct: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      await baseUrl.delete(`/products/${productId}`);
      set((state) => ({
        products: state.products.filter((user) => user.id !== productId),
        isLoading: false,
      }));
      toast.success(`OK Delete user 🔥`);
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default productsStore;
